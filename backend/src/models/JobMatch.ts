import { Schema, model, Types } from 'mongoose';

export interface IJobMatch {
  userId: Types.ObjectId;
  title: string;
  company: string;
  location: string;
  source: string;
  jobUrl: string;
  description: string;
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  aiReason: string;
  status: 'Suggested' | 'Pending' | 'Applied' | 'Interview' | 'Rejected' | 'Offer';
}

const schema = new Schema<IJobMatch>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: String, company: String, location: String, source: String, jobUrl: String, description: String,
  matchScore: Number,
  matchedSkills: { type: [String], default: [] },
  missingSkills: { type: [String], default: [] },
  aiReason: String,
  status: { type: String, enum: ['Suggested', 'Pending', 'Applied', 'Interview', 'Rejected', 'Offer'], default: 'Suggested' }
}, { timestamps: true });

export const JobMatch = model<IJobMatch>('JobMatch', schema);
