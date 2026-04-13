import { Router } from 'express';
import { forgotPassword, login, logout, me, refresh, register } from '../controllers/authController';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();
router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.get('/me', requireAuth, me);

export default router;
