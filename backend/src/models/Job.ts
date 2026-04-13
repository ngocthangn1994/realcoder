import { Schema, model } from 'mongoose';

const jobSchema = new Schema({
  source: String,
  sourceUrl: String,
  externalId: { type: String, index: true },
  title: { type: String, index: true },
  company: { type: String, index: true },
  location: String,
  remoteType: String,
  salaryMin: Number,
  salaryMax: Number,
  description: String,
  requirements: [String],
  skills: [String],
  postedAt: Date,
  metadata: Schema.Types.Mixed
}, { timestamps: true });

export const Job = model('Job', jobSchema);
