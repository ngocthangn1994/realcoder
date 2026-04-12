import { Role } from '../models/User';

export interface AuthenticatedUser {
  id: string;
  role: Role;
}
