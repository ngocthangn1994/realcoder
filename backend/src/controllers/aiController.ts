import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { analyzeResume, generateCoverLetter } from '../services/ai/openai.service';
import { Resume } from '../models/Resume';
import { ClientProfile } from '../models/ClientProfile';
import { JobMatch } from '../models/JobMatch';

export const analyzeResumeController = asyncHandler(async (req: Request, res: Response) => {
  const resume = await Resume.findOne({ userId: req.user?.userId });
  const profile = await ClientProfile.findOne({ userId: req.user?.userId });
  const analysis = await analyzeResume(resume?.parsedText ?? req.body.parsedText ?? '', (profile?.toObject() as unknown as Record<string, unknown>) ?? {});
  res.json(analysis);
});

export const generateJobMatches = asyncHandler(async (req: Request, res: Response) => {
  const matches = await JobMatch.find({ userId: req.user?.userId }).limit(20).sort({ createdAt: -1 });
  res.json(matches);
});

export const generateCoverLetterController = asyncHandler(async (req: Request, res: Response) => {
  const text = await generateCoverLetter(req.body.jobTitle, req.body.company, req.body.resumeSummary ?? '');
  res.json({ coverLetter: text });
});
