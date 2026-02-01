import { defineCollection, z } from 'astro:content';

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.string(),
    website: z.string().url(),
    pricing: z.string(),
    featured: z.boolean().default(false),
    featuredUntil: z.string().nullable().optional(),
    description: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    alternatives: z.array(z.string()).optional(),
    lastVerified: z.string(),
    // Outreach tracking
    lastOutreach: z.string().optional(),
    outreachEmail: z.string().optional(),
    doNotContact: z.boolean().optional(),
    declined: z.boolean().optional(),
    // Health tracking
    broken: z.boolean().optional(),
  }),
});

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { tools, categories };
