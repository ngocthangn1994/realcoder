import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: String,
  priceMonthly: Number,
  maxApplicationsPerMonth: Number,
  features: [String]
});

export const SubscriptionPlan = model('SubscriptionPlan', schema);
