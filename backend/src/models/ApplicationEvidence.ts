import { Schema, model, Types } from 'mongoose';

export interface IApplicationEvidence {
  applicationId: Types.ObjectId;
  uploadedBy: Types.ObjectId;
  type: string;
  fileUrl?: string;
  textNote?: string;
  createdAt: Date;
}

const schema = new Schema<IApplicationEvidence>({
  applicationId: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  fileUrl: String,
  textNote: String,
  createdAt: { type: Date, default: Date.now }
}, { timestamps: false });

export const ApplicationEvidence = model<IApplicationEvidence>('ApplicationEvidence', schema);
