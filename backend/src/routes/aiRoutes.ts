import { Router } from 'express';
import { analyzeResumeController, generateCoverLetterController, generateJobMatches } from '../controllers/aiController';

const router = Router();
router.post('/analyze-resume', analyzeResumeController);
router.post('/job-matches', generateJobMatches);
router.post('/generate-cover-letter', generateCoverLetterController);
export default router;
