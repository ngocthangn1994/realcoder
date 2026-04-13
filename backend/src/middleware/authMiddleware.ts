import { Request, Response, NextFunction } from 'express';
import { verifyJwt } from '../utils/jwt';
import { ApiError } from '../utils/ApiError';

export const authMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) throw new ApiError(401, 'Unauthorized');
  req.user = verifyJwt<Express.UserPayload>(token);
  next();
};
