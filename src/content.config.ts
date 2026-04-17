import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const postSchema = z.object({
  title:       z.string(),
  series:      z.string().optional(),
  seriesPart:  z.number().optional(),
  topic:       z.string(),
  date:        z.string(),
  readingTime: z.string(),
  description: z.string(),
  status:      z.enum(['published', 'draft']).default('published'),
})

const postsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts/en' }),
  schema: postSchema,
})

const postsEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts/es' }),
  schema: postSchema,
})

export const collections = { postsEn, postsEs }
