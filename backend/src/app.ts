import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import healthRoutes from './routes/healthRoutes';
import linkRoutes from './routes/linkRoutes';
import goRoutes from './routes/goRoutes';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL
  })
);
app.use(express.json());

// Register API routes first.
app.use('/api', healthRoutes);
app.use('/api', linkRoutes);

// Redirect route comes after /api routes so there is no collision.
app.use('/', goRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
