import { Request, Response } from 'express';
import { Application } from '../models/Application';
import { ApplicationEvidence } from '../models/ApplicationEvidence';
import { asyncHandler } from '../utils/asyncHandler';

export const getMyApplications = asyncHandler(async (req: Request, res: Response) => {
  const apps = await Application.find({ userId: req.user?.id }).sort({ createdAt: -1 });
  res.json(apps);
});

export const createApplication = asyncHandler(async (req: Request, res: Response) => {
  const app = await Application.create({ ...req.body, userId: req.user?.id });
  res.status(201).json(app);
});

export const updateApplicationStatus = asyncHandler(async (req: Request, res: Response) => {
  const app = await Application.findByIdAndUpdate(req.params.id, { status: req.body.status, notes: req.body.notes }, { new: true });
  res.json(app);
});

export const addEvidence = asyncHandler(async (req: Request, res: Response) => {
  const evidence = await ApplicationEvidence.create({ ...req.body, applicationId: req.params.id, uploadedBy: req.user?.id });
  res.status(201).json(evidence);
});
