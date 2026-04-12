import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { AuthenticatedUser } from '../types/express';

declare global {
  namespace Express {
    interface Request { user?: AuthenticatedUser }
  }
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  const decoded = jwt.verify(token, env.JWT_SECRET) as AuthenticatedUser;
  req.user = decoded;
  next();
};

export const requireRole = (...roles: Array<'client' | 'assistant' | 'admin'>) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' });
    next();
  };
