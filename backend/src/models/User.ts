import { Schema, model, Types } from 'mongoose';

export interface IUser {
  fullName: string;
  email: string;
  passwordHash: string;
  role: 'client' | 'assistant' | 'admin';
  assignedAssistantId?: Types.ObjectId;
  subscriptionPlanId?: Types.ObjectId;
}

const schema = new Schema<IUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['client', 'assistant', 'admin'], required: true, default: 'client' },
  assignedAssistantId: { type: Schema.Types.ObjectId, ref: 'User' },
  subscriptionPlanId: { type: Schema.Types.ObjectId, ref: 'SubscriptionPlan' }
}, { timestamps: true });

export const User = model<IUser>('User', schema);
