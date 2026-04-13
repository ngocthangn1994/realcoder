import { Schema, model, Types } from 'mongoose';

export interface IResume {
  userId: Types.ObjectId;
  fileUrl: string;
  originalFileName: string;
  parsedText: string;
  extractedSkills: string[];
  extractedTitles: string[];
  aiSummary: string;
}

const schema = new Schema<IResume>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  fileUrl: { type: String, required: true },
  originalFileName: { type: String, required: true },
  parsedText: { type: String, required: true },
  extractedSkills: { type: [String], default: [] },
  extractedTitles: { type: [String], default: [] },
  aiSummary: { type: String, default: '' }
}, { timestamps: true });

export const Resume = model<IResume>('Resume', schema);
