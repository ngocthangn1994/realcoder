import { Router } from 'express';
import {
  createLink,
  deleteLink,
  getLinkBySlug,
  getLinks,
  redirectToDestination,
  updateLink
} from '../controllers/linkController';

const router = Router();

router.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'GoLink API is healthy' });
});

// API routes are defined first so they never conflict with /go/:slug redirects.
router.post('/api/links', createLink);
router.get('/api/links', getLinks);
router.get('/api/links/:slug', getLinkBySlug);
router.put('/api/links/:id', updateLink);
router.delete('/api/links/:id', deleteLink);

// Redirect route comes after API routes.
router.get('/go/:slug', redirectToDestination);

export default router;
