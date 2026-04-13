import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

export const errorMiddleware = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err instanceof Error) {
    return res.status(500).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Unknown server error' });
};
