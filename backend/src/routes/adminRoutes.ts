import { Router } from 'express';
import { assignAssistantController, getAdminApplications, getClientById, getClients, updateAdminApplication } from '../controllers/adminController';

const router = Router();
router.get('/clients', getClients);
router.get('/clients/:id', getClientById);
router.put('/clients/:id/assign-assistant', assignAssistantController);
router.get('/applications', getAdminApplications);
router.put('/applications/:id', updateAdminApplication);
export default router;
