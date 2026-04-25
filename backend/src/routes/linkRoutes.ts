import { Router } from 'express';
import {
  createLink,
  deleteLink,
  getLinkBySlug,
  getLinks,
  updateLink
} from '../controllers/linkController';

const linkRoutes = Router();

linkRoutes.post('/links', createLink);
linkRoutes.get('/links', getLinks);
linkRoutes.get('/links/:slug', getLinkBySlug);
linkRoutes.put('/links/:id', updateLink);
linkRoutes.delete('/links/:id', deleteLink);

export default linkRoutes;
