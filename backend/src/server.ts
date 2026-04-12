import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import { connectDB } from './config/db';
import { requireAuth } from './middleware/authMiddleware';
import { errorMiddleware } from './middleware/errorMiddleware';
import authRoutes from './routes/authRoutes';
import profileRoutes from './routes/profileRoutes';
import resumeRoutes from './routes/resumeRoutes';
import aiRoutes from './routes/aiRoutes';
import applicationRoutes from './routes/applicationRoutes';
import adminRoutes from './routes/adminRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/api/auth', authRoutes);
app.use('/api/profile', requireAuth, profileRoutes);
app.use('/api/resume', requireAuth, resumeRoutes);
app.use('/api/ai', requireAuth, aiRoutes);
app.use('/api/applications', requireAuth, applicationRoutes);
app.use('/api/admin', requireAuth, adminRoutes);

app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(Number(env.PORT), () => console.log(`API running on :${env.PORT}`));
});
