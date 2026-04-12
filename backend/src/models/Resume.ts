import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  fileUrl: { type: String, required: true },
  originalFileName: String,
  parsedText: String,
  extractedSkills: [String],
  extractedTitles: [String],
  aiSummary: String
}, { timestamps: true });

export const Resume = model('Resume', schema);
