import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import authRoutes from './routes/authRoutes';
import profileRoutes from './routes/profileRoutes';
import resumeRoutes from './routes/resumeRoutes';
import aiRoutes from './routes/aiRoutes';
import applicationRoutes from './routes/applicationRoutes';
import adminRoutes from './routes/adminRoutes';
import { authMiddleware } from './middleware/authMiddleware';
import { roleMiddleware } from './middleware/roleMiddleware';
import { errorMiddleware } from './middleware/errorMiddleware';
import { notFoundMiddleware } from './middleware/notFoundMiddleware';

export const app = express();
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: '2mb' }));

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/api/auth', authRoutes);
app.use('/api/profile', authMiddleware, profileRoutes);
app.use('/api/resume', authMiddleware, resumeRoutes);
app.use('/api/ai', authMiddleware, aiRoutes);
app.use('/api/applications', authMiddleware, applicationRoutes);
app.use('/api/admin', authMiddleware, roleMiddleware('assistant', 'admin'), adminRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);
