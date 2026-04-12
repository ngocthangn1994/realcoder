import { Router } from 'express';
import { assignAssistant, getAllApplications, getClientById, getClients, updateApplication } from '../controllers/adminController';
import { requireRole } from '../middleware/authMiddleware';

const router = Router();
router.use(requireRole('admin', 'assistant'));
router.get('/clients', getClients);
router.get('/clients/:id', getClientById);
router.put('/clients/:id/assign-assistant', assignAssistant);
router.get('/applications', getAllApplications);
router.put('/applications/:id', updateApplication);

export default router;
