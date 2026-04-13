import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export const signJwt = (payload: object) => jwt.sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'] });
export const verifyJwt = <T>(token: string) => jwt.verify(token, env.JWT_SECRET) as T;
