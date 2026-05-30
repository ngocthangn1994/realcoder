import { NextFunction, Request, Response } from 'express';
import { buildResponse } from '../utils/apiResponse';

export const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  const message = err.message || 'Internal server error';
  res.status(500).json(buildResponse(false, message));
};
