import mongoose from 'mongoose';
import { env } from './env';

export async function connectDatabase(): Promise<void> {
  console.log('[db] Connecting to MongoDB...');
  await mongoose.connect(env.mongodbUri);
  console.log('[db] MongoDB connected');
}
