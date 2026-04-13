import { Router } from 'express';
import { getMyResume, uploadResume } from '../controllers/resumeController';

const router = Router();
router.post('/upload', uploadResume);
router.get('/me', getMyResume);
export default router;
