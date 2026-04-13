import bcrypt from 'bcryptjs';
import { User } from '../../models/User';
import { ApiError } from '../../utils/ApiError';
import { signJwt } from '../../utils/jwt';

export const registerUser = async (fullName: string, email: string, password: string) => {
  const exists = await User.findOne({ email });
  if (exists) throw new ApiError(409, 'Email already exists');

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await User.create({ fullName, email, passwordHash, role: 'client' });
  const token = signJwt({ userId: user._id.toString(), role: user.role, email: user.email });
  return { user, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new ApiError(401, 'Invalid credentials');

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) throw new ApiError(401, 'Invalid credentials');

  const token = signJwt({ userId: user._id.toString(), role: user.role, email: user.email });
  return { user, token };
};
