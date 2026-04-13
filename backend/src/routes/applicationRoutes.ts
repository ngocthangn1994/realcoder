import { Router } from 'express';
import { addEvidenceController, createApplicationController, getMyApplications, updateApplicationStatusController } from '../controllers/applicationController';

const router = Router();
router.get('/me', getMyApplications);
router.post('/', createApplicationController);
router.put('/:id/status', updateApplicationStatusController);
router.post('/:id/evidence', addEvidenceController);
export default router;
