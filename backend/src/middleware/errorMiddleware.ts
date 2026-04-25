import { NextFunction, Request, Response } from 'express';

interface ErrorWithMeta extends Error {
  statusCode?: number;
  code?: number;
}

export function errorMiddleware(err: ErrorWithMeta, _req: Request, res: Response, _next: NextFunction): void {
  // Handle duplicate slug errors from MongoDB unique index.
  if (err.code === 11000) {
    res.status(409).json({
      success: false,
      message: 'A link with this slug already exists.'
    });
    return;
  }

  const statusCode = err.statusCode ?? 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal server error'
  });
}
