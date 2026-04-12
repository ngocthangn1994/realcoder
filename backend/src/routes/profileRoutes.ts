import { Router } from 'express';
import { getMyProfile, upsertMyProfile } from '../controllers/profileController';

const router = Router();
router.get('/me', getMyProfile);
router.put('/me', upsertMyProfile);

export default router;
