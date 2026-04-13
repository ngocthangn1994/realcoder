import { Schema, model, Types } from 'mongoose';

export interface ISubscriptionPlan {
  name: string;
  priceMonthly: number;
  maxApplicationsPerMonth: number;
  features: string[];
}

const schema = new Schema<ISubscriptionPlan>({
  name: { type: String, required: true },
  priceMonthly: { type: Number, required: true },
  maxApplicationsPerMonth: { type: Number, required: true },
  features: { type: [String], default: [] }
}, { timestamps: true });

export const SubscriptionPlan = model<ISubscriptionPlan>('SubscriptionPlan', schema);
