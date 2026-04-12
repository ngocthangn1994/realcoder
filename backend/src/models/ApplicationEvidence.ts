import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
  applicationId: { type: Types.ObjectId, ref: 'Application', required: true },
  uploadedBy: { type: Types.ObjectId, ref: 'User', required: true },
  type: String,
  fileUrl: String,
  textNote: String,
  createdAt: { type: Date, default: Date.now }
});

export const ApplicationEvidence = model('ApplicationEvidence', schema);
