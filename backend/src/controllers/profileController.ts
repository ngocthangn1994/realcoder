import { Request, Response } from 'express';
import { ClientProfile } from '../models/ClientProfile';
import { asyncHandler } from '../utils/asyncHandler';

export const getMyProfile = asyncHandler(async (req: Request, res: Response) => {
  const profile = await ClientProfile.findOne({ userId: req.user?.userId });
  res.json(profile);
});

export const updateMyProfile = asyncHandler(async (req: Request, res: Response) => {
  const profile = await ClientProfile.findOneAndUpdate(
    { userId: req.user?.userId },
    req.body,
    { upsert: true, new: true }
  );
  res.json(profile);
});
