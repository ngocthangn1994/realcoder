import { Request, Response } from 'express';
import { Alert } from '../models/Alert';
import { buildResponse } from '../utils/apiResponse';

export const getAlerts = async (_req: Request, res: Response): Promise<void> => {
  const alerts = await Alert.find().sort({ createdAt: -1 }).limit(20).populate('deviceId');
  res.json(buildResponse(true, 'Alerts fetched', alerts));
};

export const createAlert = async (req: Request, res: Response): Promise<void> => {
  const alert = await Alert.create(req.body);
  res.status(201).json(buildResponse(true, 'Alert created', alert));
};
