import { Request, Response } from 'express';
import { buildResponse } from '../utils/apiResponse';

export const getHealth = (_req: Request, res: Response): void => {
  res.json(buildResponse(true, 'Service is healthy', { uptime: process.uptime() }));
};
