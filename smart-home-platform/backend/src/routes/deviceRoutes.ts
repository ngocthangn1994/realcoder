import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { createDevice, getCameraStatus, getDeviceById, getDeviceHealth, getDevices } from '../controllers/deviceController';

const router = Router();
router.get('/', asyncHandler(getDevices));
router.post('/', asyncHandler(createDevice));
router.get('/health', asyncHandler(getDeviceHealth));
router.get('/camera/status', asyncHandler(getCameraStatus));
router.get('/:id', asyncHandler(getDeviceById));

export default router;
