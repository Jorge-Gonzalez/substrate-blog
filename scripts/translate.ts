import Anthropic from '@anthropic-ai/sdk'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, basename } from 'path'

const client = new Anthropic()

const SYSTEM_PROMPT = `You are translating a blog post from English to Spanish for substrate.lat,
a personal site by Jorge Gonzalez — web designer and programmer from Costa Rica.

The writing style is conversational but precise. Not academic, not casual. A well-read person
thinking out loud with care. Preserve this voice exactly.

Rules:
- Translate ALL prose content faithfully — do not summarise or paraphrase
- Preserve all markdown formatting: headings, bold, italic, blockquotes, code blocks, lists
- Keep frontmatter KEYS in English (title, series, seriesPart, topic, date, readingTime, description, status)
- Translate only frontmatter VALUES (title, series, topic, description)
- Keep date and readingTime values unchanged
- Keep all code blocks exactly as-is — do not translate code
- Translate internal links: /posts/slug → /es/posts/slug
- Add status: "draft" to the frontmatter (reviewer will change to "published" after approval)
- Keep mathematical notation (δ, θ, ε, π, etc.) unchanged
- Preserve all HTML entities and special characters
- Do not add a translator's note or any meta-commentary
- Output ONLY the translated markdown file, nothing else`

async function translatePost(enPath: string, esPath: string): Promise<void> {
  const content = readFileSync(enPath, 'utf-8')
  const filename = basename(enPath)

  console.log(`Translating ${filename}...`)

  const message = await client.messages.create({
    model: 'claude-opus-4-5-20251101',
    max_tokens: 8192,
    messages: [
      {
        role: 'user',
        content: `Translate this blog post from English to Spanish. Follow all rules exactly.\n\n${content}`,
      },
    ],
    system: SYSTEM_PROMPT,
  })

  const translated = message.content
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('')

  writeFileSync(esPath, translated, 'utf-8')
  console.log(`Written: ${esPath}`)
}

async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error('Usage: tsx scripts/translate.ts <path-to-en-post.md> [...]')
    process.exit(1)
  }

  for (const arg of args) {
    const enPath = resolve(arg)

    if (!existsSync(enPath)) {
      console.error(`File not found: ${enPath}`)
      continue
    }

    // Derive Spanish output path: src/content/posts/en/slug.md → src/content/posts/es/slug.md
    const esPath = enPath.replace('/content/posts/en/', '/content/posts/es/')

    if (existsSync(esPath)) {
      console.log(`Skipping ${basename(enPath)} — Spanish version already exists at ${esPath}`)
      console.log('Delete the Spanish file first if you want to re-translate.')
      continue
    }

    await translatePost(enPath, esPath)
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
