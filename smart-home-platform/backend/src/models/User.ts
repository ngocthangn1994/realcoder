import { Document, Schema, model } from 'mongoose';

export type UserRole = 'admin' | 'owner' | 'member';

export interface IUser extends Document {
  name: string;
  email: string;
  role: UserRole;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    role: { type: String, enum: ['admin', 'owner', 'member'], default: 'owner' }
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);
