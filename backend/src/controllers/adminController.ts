import { Request, Response } from 'express';
import { User } from '../models/User';
import { Application } from '../models/Application';
import { asyncHandler } from '../utils/asyncHandler';

export const getClients = asyncHandler(async (_req: Request, res: Response) => {
  const clients = await User.find({ role: 'client' }).populate('assignedAssistantId subscriptionPlanId');
  res.json(clients);
});

export const getClientById = asyncHandler(async (req: Request, res: Response) => {
  const client = await User.findById(req.params.id).populate('assignedAssistantId subscriptionPlanId');
  res.json(client);
});

export const assignAssistant = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(req.params.id, { assignedAssistantId: req.body.assistantId }, { new: true });
  res.json(user);
});

export const getAllApplications = asyncHandler(async (_req: Request, res: Response) => {
  const apps = await Application.find().sort({ createdAt: -1 });
  res.json(apps);
});

export const updateApplication = asyncHandler(async (req: Request, res: Response) => {
  const app = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(app);
});
