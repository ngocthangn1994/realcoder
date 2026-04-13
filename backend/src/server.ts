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
import platformRoutes from './routes/platformRoutes';

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, service: 'applyflow-api' }));
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/profile', requireAuth, profileRoutes);
app.use('/api/v1/resumes', requireAuth, resumeRoutes);
app.use('/api/v1/ai', requireAuth, aiRoutes);
app.use('/api/v1/applications', requireAuth, applicationRoutes);
app.use('/api/v1/admin', requireAuth, adminRoutes);
app.use('/api/v1', platformRoutes);

app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(Number(env.PORT), () => console.log(`API running on :${env.PORT}`));
});
