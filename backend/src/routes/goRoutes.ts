import { Router } from 'express';
import { goToLink } from '../controllers/linkController';

const goRoutes = Router();

goRoutes.get('/go/:slug', goToLink);

export default goRoutes;
