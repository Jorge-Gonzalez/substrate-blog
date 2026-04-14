import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title:       z.string(),
    series:      z.string().optional(),
    seriesPart:  z.number().optional(),
    topic:       z.string(),
    date:        z.string(),
    readingTime: z.string(),
    description: z.string(),
  })
})

export const collections = { posts }