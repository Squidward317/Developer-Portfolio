import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    category: z.enum(['web', 'backend', 'tooling', 'other']),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    github: z.url().optional(),
    demo: z.url().optional(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, projects };
