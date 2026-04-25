import { z } from 'zod';

const slugRegex = /^[a-z0-9-]+$/;

export const createLinkSchema = z.object({
  title: z.string().trim().min(1, 'Title is required'),
  slug: z
    .string()
    .trim()
    .min(1, 'Slug is required')
    .regex(slugRegex, 'Slug can only include lowercase letters, numbers, and hyphens'),
  destinationUrl: z.string().trim().url('Destination URL must be a valid URL'),
  description: z.string().trim().optional(),
  tags: z.array(z.string().trim().min(1)).optional().default([])
});

export const updateLinkSchema = createLinkSchema.partial().refine((data) => Object.keys(data).length > 0, {
  message: 'At least one field is required for update'
});

export type CreateLinkInput = z.infer<typeof createLinkSchema>;
export type UpdateLinkInput = z.infer<typeof updateLinkSchema>;
