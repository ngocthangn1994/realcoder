import { Schema, model } from 'mongoose';

const delegatedJobSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  assistantId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  jobId: { type: Schema.Types.ObjectId, ref: 'Job', index: true },
  status: { type: String, enum: ['new', 'in_progress', 'applied', 'blocked', 'needs_client_input'], default: 'new' },
  notes: String,
  proofFiles: [String]
}, { timestamps: true });

export const DelegatedJob = model('DelegatedJob', delegatedJobSchema);
