import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const events = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.string(),
    timeRange: z.array(z.number()).length(2),
  }),
});

export const collections = {
  posts,
  events,
};
