import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: { type: String, required: true },
  priceMonthly: { type: Number, required: true },
  applicationLimit: { type: Number, default: 0 },
  assistantSupportLevel: { type: String, default: 'none' },
  chatAvailability: { type: String, default: 'business-hours' },
  turnaround: { type: String, default: '48h' },
  documentGenerationLimit: { type: Number, default: 10 },
  features: [String],
  badge: String,
  active: { type: Boolean, default: true }
}, { timestamps: true });

export const SubscriptionPlan = model('SubscriptionPlan', schema);
