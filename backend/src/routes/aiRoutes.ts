import { Router } from 'express';
import { analyzeResumeController, generateCoverLetterController, jobMatchesController } from '../controllers/aiController';

const router = Router();
router.post('/analyze-resume', analyzeResumeController);
router.post('/job-matches', jobMatchesController);
router.post('/generate-cover-letter', generateCoverLetterController);

export default router;
