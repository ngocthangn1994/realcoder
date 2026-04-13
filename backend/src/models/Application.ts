import { Schema, model, Types } from 'mongoose';

export interface IApplication {
  userId: Types.ObjectId;
  assistantId?: Types.ObjectId;
  jobMatchId?: Types.ObjectId;
  company: string;
  title: string;
  jobUrl: string;
  status: 'Suggested' | 'Pending' | 'Applied' | 'Interview' | 'Rejected' | 'Offer';
  dateApplied?: Date;
  notes?: string;
}

const schema = new Schema<IApplication>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  assistantId: { type: Schema.Types.ObjectId, ref: 'User' },
  jobMatchId: { type: Schema.Types.ObjectId, ref: 'JobMatch' },
  company: { type: String, required: true },
  title: { type: String, required: true },
  jobUrl: { type: String, required: true },
  status: { type: String, enum: ['Suggested', 'Pending', 'Applied', 'Interview', 'Rejected', 'Offer'], default: 'Pending' },
  dateApplied: Date,
  notes: String
}, { timestamps: true });

export const Application = model<IApplication>('Application', schema);
