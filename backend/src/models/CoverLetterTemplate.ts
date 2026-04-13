import { Schema, model } from 'mongoose';

const coverLetterTemplateSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  name: String,
  body: String,
  archived: { type: Boolean, default: false }
}, { timestamps: true });

export const CoverLetterTemplate = model('CoverLetterTemplate', coverLetterTemplateSchema);
