import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

export const roleMiddleware = (...roles: Array<'client' | 'assistant' | 'admin'>) =>
  (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      throw new ApiError(403, 'Forbidden');
    }
    next();
  };
