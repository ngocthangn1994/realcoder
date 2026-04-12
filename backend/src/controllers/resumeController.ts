import { Request, Response } from 'express';
import { Resume } from '../models/Resume';
import { asyncHandler } from '../utils/asyncHandler';

export const uploadResume = asyncHandler(async (req: Request, res: Response) => {
  const resume = await Resume.create({ userId: req.user?.id, ...req.body });
  res.status(201).json(resume);
});

export const getMyResume = asyncHandler(async (req: Request, res: Response) => {
  const resume = await Resume.findOne({ userId: req.user?.id }).sort({ createdAt: -1 });
  res.json(resume);
});
