import { Request, Response } from 'express';
import { z } from 'zod';
import { asyncHandler } from '../utils/asyncHandler';
import { loginUser, registerUser } from '../services/auth/auth.service';
import { User } from '../models/User';

export const register = asyncHandler(async (req: Request, res: Response) => {
  const body = z.object({ fullName: z.string().min(2), email: z.string().email(), password: z.string().min(8) }).parse(req.body);
  const result = await registerUser(body.fullName, body.email, body.password);
  res.status(201).json(result);
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const body = z.object({ email: z.string().email(), password: z.string().min(8) }).parse(req.body);
  const result = await loginUser(body.email, body.password);
  res.json(result);
});

export const me = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.user?.userId).select('-passwordHash');
  res.json(user);
});
