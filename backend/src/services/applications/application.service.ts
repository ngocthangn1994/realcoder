import { Application } from '../../models/Application';
import { ApplicationEvidence } from '../../models/ApplicationEvidence';

export const listApplicationsForUser = (userId: string) =>
  Application.find({ userId }).sort({ createdAt: -1 });

export const createApplication = (data: Record<string, unknown>) => Application.create(data);

export const updateApplicationStatus = (id: string, status: string) =>
  Application.findByIdAndUpdate(id, { status }, { new: true });

export const addEvidence = (data: Record<string, unknown>) => ApplicationEvidence.create(data);
