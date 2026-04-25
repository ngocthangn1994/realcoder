import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import { connectDatabase } from './config/db';
import linkRoutes from './routes/linkRoutes';
import { notFoundMiddleware } from './middleware/notFoundMiddleware';
import { errorMiddleware } from './middleware/errorMiddleware';

async function bootstrap(): Promise<void> {
  await connectDatabase();

  const app = express();

  app.use(
    cors({
      origin: env.clientUrl
    })
  );

  app.use(express.json());

  // Request logger for development visibility.
  app.use((req, _res, next) => {
    console.log(`[http] ${req.method} ${req.originalUrl}`);
    next();
  });

  app.use(linkRoutes);
  app.use(notFoundMiddleware);
  app.use(errorMiddleware);

  app.listen(env.port, () => {
    console.log(`[server] GoLink backend running on http://localhost:${env.port}`);
  });
}

bootstrap().catch((error) => {
  console.error('[server] Failed to start backend', error);
  process.exit(1);
});
