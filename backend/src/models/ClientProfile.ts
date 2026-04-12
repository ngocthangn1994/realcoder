import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true, unique: true },
  phone: String,
  location: String,
  linkedinUrl: String,
  portfolioUrl: String,
  visaStatus: String,
  yearsOfExperience: Number,
  desiredJobTitles: [String],
  desiredLocations: [String],
  employmentTypes: [String],
  workMode: [String],
  salaryExpectation: String,
  summary: String
}, { timestamps: true });

export const ClientProfile = model('ClientProfile', schema);
