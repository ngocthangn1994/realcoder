import { Request, Response } from 'express';
import { ClientProfile } from '../models/ClientProfile';
import { asyncHandler } from '../utils/asyncHandler';

export const getMyProfile = asyncHandler(async (req: Request, res: Response) => {
  const profile = await ClientProfile.findOne({ userId: req.user?.id });
  res.json(profile);
});

export const upsertMyProfile = asyncHandler(async (req: Request, res: Response) => {
  const profile = await ClientProfile.findOneAndUpdate({ userId: req.user?.id }, { ...req.body, userId: req.user?.id }, { new: true, upsert: true });
  res.json(profile);
});
