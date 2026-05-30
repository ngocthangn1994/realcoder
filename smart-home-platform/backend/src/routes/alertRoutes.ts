import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { createAlert, getAlerts } from '../controllers/alertController';

const router = Router();
router.get('/', asyncHandler(getAlerts));
router.post('/', asyncHandler(createAlert));

export default router;
