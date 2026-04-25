import mongoose from 'mongoose';
import { env } from './env';

export async function connectDB(): Promise<void> {
  await mongoose.connect(env.MONGODB_URI);
  // Beginner-friendly log so you can confirm DB connectivity quickly.
  console.log('✅ Connected to MongoDB');
}
