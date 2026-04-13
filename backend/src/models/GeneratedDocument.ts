import { Schema, model } from 'mongoose';

const generatedDocumentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  jobId: { type: Schema.Types.ObjectId, ref: 'Job' },
  kind: { type: String, enum: ['resume', 'coverLetter'] },
  title: String,
  content: String,
  fileUrl: String,
  status: { type: String, default: 'ready' }
}, { timestamps: true });

export const GeneratedDocument = model('GeneratedDocument', generatedDocumentSchema);
