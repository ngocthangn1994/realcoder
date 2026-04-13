import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { addEvidence, createApplication, listApplicationsForUser, updateApplicationStatus } from '../services/applications/application.service';

export const getMyApplications = asyncHandler(async (req: Request, res: Response) => {
  const list = await listApplicationsForUser(req.user!.userId);
  res.json(list);
});

export const createApplicationController = asyncHandler(async (req: Request, res: Response) => {
  const created = await createApplication({ ...req.body, userId: req.user!.userId });
  res.status(201).json(created);
});

export const updateApplicationStatusController = asyncHandler(async (req: Request, res: Response) => {
  const updated = await updateApplicationStatus(String(req.params.id), req.body.status);
  res.json(updated);
});

export const addEvidenceController = asyncHandler(async (req: Request, res: Response) => {
  const evidence = await addEvidence({ ...req.body, applicationId: String(req.params.id), uploadedBy: req.user!.userId });
  res.status(201).json(evidence);
});
