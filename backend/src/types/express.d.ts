import 'express';

declare global {
  namespace Express {
    interface UserPayload {
      userId: string;
      role: 'client' | 'assistant' | 'admin';
      email: string;
    }

    interface Request {
      user?: UserPayload;
    }
  }
}

export {};
