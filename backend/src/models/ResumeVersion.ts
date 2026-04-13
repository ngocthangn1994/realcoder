import { Schema, model } from 'mongoose';

const resumeVersionSchema = new Schema({
  resumeId: { type: Schema.Types.ObjectId, ref: 'Resume', index: true },
  label: String,
  fileUrl: String,
  parsed: Schema.Types.Mixed,
  isDefault: { type: Boolean, default: false }
}, { timestamps: true });

export const ResumeVersion = model('ResumeVersion', resumeVersionSchema);
