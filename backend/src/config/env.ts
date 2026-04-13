import { config } from 'dotenv';
import { z } from 'zod';

config();

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.string().default('4000'),
  MONGODB_URI: z.string(),
  JWT_SECRET: z.string(),
  OPENAI_API_KEY: z.string().optional(),
  OPENAI_MODEL: z.string().default('gpt-4.1-mini'),
  STRIPE_SECRET_KEY: z.string().optional()
});

export const env = EnvSchema.parse(process.env);
