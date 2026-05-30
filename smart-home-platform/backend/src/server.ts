import app from './app';
import { connectDB } from './config/db';
import { env } from './config/env';
import { ensureSampleDevices } from './controllers/deviceController';

const startServer = async (): Promise<void> => {
  await connectDB();
  await ensureSampleDevices();

  app.listen(env.port, () => {
    console.log(`🚀 Backend running on http://localhost:${env.port}`);
  });
};

startServer().catch((error: Error) => {
  console.error('Failed to start server:', error.message);
  process.exit(1);
});
