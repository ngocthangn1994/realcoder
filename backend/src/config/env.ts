import dotenv from 'dotenv';

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: Number(process.env.PORT ?? 5000),
  MONGODB_URI: requireEnv('MONGODB_URI'),
  CLIENT_URL: process.env.CLIENT_URL ?? 'http://localhost:3000'
};
