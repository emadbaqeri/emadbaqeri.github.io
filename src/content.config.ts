import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
  })
})

export const collections = { blog }
