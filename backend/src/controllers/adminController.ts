import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { assignAssistant, getClientDetail, listAllApplications, listClients } from '../services/admin/admin.service';
import { Application } from '../models/Application';

export const getClients = asyncHandler(async (_req: Request, res: Response) => {
  res.json(await listClients());
});

export const getClientById = asyncHandler(async (req: Request, res: Response) => {
  res.json(await getClientDetail(String(req.params.id)));
});

export const assignAssistantController = asyncHandler(async (req: Request, res: Response) => {
  res.json(await assignAssistant(String(req.params.id), req.body.assistantId));
});

export const getAdminApplications = asyncHandler(async (_req: Request, res: Response) => {
  res.json(await listAllApplications());
});

export const updateAdminApplication = asyncHandler(async (req: Request, res: Response) => {
  const updated = await Application.findByIdAndUpdate(String(req.params.id), req.body, { new: true });
  res.json(updated);
});
