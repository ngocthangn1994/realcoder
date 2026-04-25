import app from './app';
import { connectDB } from './config/db';
import { env } from './config/env';

async function startServer(): Promise<void> {
  await connectDB();

  app.listen(env.PORT, () => {
    console.log(`🚀 GoLink backend running on http://localhost:${env.PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
