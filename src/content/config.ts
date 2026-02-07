import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
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
    place: z.string().optional(),
    source: z.union([z.string(), z.array(z.string())]).optional(),
    registration: z.string().optional(),
  }),
});

export const collections = {
  posts,
  events,
};
