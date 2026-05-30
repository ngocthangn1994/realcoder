import { Request, Response } from 'express';
import { buildResponse } from '../utils/apiResponse';

export const notFoundMiddleware = (req: Request, res: Response): void => {
  res.status(404).json(buildResponse(false, `Route not found: ${req.originalUrl}`));
};
