import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    banner: z.union([z.string(), z.null()]).optional(),
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
