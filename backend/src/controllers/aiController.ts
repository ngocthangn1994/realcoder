import { Request, Response } from 'express';
import { analyzeResume, generateCoverLetter } from '../services/aiService';
import { asyncHandler } from '../utils/asyncHandler';

export const analyzeResumeController = asyncHandler(async (req: Request, res: Response) => {
  const analysis = await analyzeResume(req.body.resumeText, req.body.profile ?? {});
  res.json(analysis);
});

export const jobMatchesController = asyncHandler(async (_req: Request, res: Response) => {
  res.json({ matches: [], note: 'Use analysis + job source integrations to populate.' });
});

export const generateCoverLetterController = asyncHandler(async (req: Request, res: Response) => {
  const text = await generateCoverLetter(req.body.jobTitle, req.body.company, req.body.resumeSummary);
  res.json({ coverLetter: text });
});
