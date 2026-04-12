import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  assistantId: { type: Types.ObjectId, ref: 'User' },
  jobMatchId: { type: Types.ObjectId, ref: 'JobMatch' },
  company: String,
  title: String,
  jobUrl: String,
  status: { type: String, default: 'Pending' },
  dateApplied: Date,
  notes: String
}, { timestamps: true });

export const Application = model('Application', schema);
