import { Router } from 'express';
import { addEvidence, createApplication, getMyApplications, updateApplicationStatus } from '../controllers/applicationController';

const router = Router();
router.get('/me', getMyApplications);
router.post('/', createApplication);
router.put('/:id/status', updateApplicationStatus);
router.post('/:id/evidence', addEvidence);

export default router;
