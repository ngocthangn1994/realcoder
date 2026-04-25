import dotenv from 'dotenv';

dotenv.config();

function requiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 5000),
  mongodbUri: requiredEnv('MONGODB_URI'),
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:3000'
};
