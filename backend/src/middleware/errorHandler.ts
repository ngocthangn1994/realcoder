import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../utils/AppError';

interface MongoError extends Error {
  code?: number;
  keyValue?: Record<string, string>;
}

// Centralized error handling keeps route code simpler and easier for beginners.
export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction): void {
  if (err instanceof ZodError) {
    res.status(400).json({
      message: 'Validation failed',
      errors: err.issues.map((issue) => ({ field: issue.path.join('.'), message: issue.message }))
    });
    return;
  }

  const mongoErr = err as MongoError;
  if (mongoErr?.code === 11000) {
    const duplicateField = Object.keys(mongoErr.keyValue ?? {})[0] ?? 'field';
    res.status(409).json({ message: `Duplicate value for ${duplicateField}. Slug already exists.` });
    return;
  }

  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  console.error('Unexpected error:', err);
  res.status(500).json({ message: 'Internal server error' });
}
