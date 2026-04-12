import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  title: String,
  company: String,
  location: String,
  source: String,
  jobUrl: String,
  description: String,
  matchScore: Number,
  matchedSkills: [String],
  missingSkills: [String],
  aiReason: String,
  status: { type: String, default: 'Suggested' }
}, { timestamps: true });

export const JobMatch = model('JobMatch', schema);
