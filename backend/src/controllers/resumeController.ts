import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { Resume } from '../models/Resume';
import { upsertResume } from '../services/resume/resume.service';

export const uploadResume = asyncHandler(async (req: Request, res: Response) => {
  const resume = await upsertResume(req.user!.userId, req.body);
  res.status(201).json(resume);
});

export const getMyResume = asyncHandler(async (req: Request, res: Response) => {
  const resume = await Resume.findOne({ userId: req.user?.userId });
  res.json(resume);
});
