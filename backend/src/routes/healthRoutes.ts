import { Router } from 'express';

const healthRoutes = Router();

healthRoutes.get('/health', (_req, res) => {
  res.json({ ok: true, message: 'GoLink API is healthy' });
});

export default healthRoutes;
