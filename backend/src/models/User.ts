import { Schema, model, Types } from 'mongoose';

export type Role = 'client' | 'assistant' | 'admin';

interface UserDocument {
  fullName: string;
  email: string;
  passwordHash: string;
  role: Role;
  assignedAssistantId?: Types.ObjectId;
  subscriptionPlanId?: Types.ObjectId;
}

const userSchema = new Schema<UserDocument>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['client', 'assistant', 'admin'], default: 'client' },
    assignedAssistantId: { type: Schema.Types.ObjectId, ref: 'User' },
    subscriptionPlanId: { type: Schema.Types.ObjectId, ref: 'SubscriptionPlan' }
  },
  { timestamps: true }
);

export const User = model<UserDocument>('User', userSchema);
