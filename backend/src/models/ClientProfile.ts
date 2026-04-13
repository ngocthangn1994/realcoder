import { Schema, model, Types } from 'mongoose';

export interface IClientProfile {
  userId: Types.ObjectId;
  phone?: string;
  location?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  visaStatus?: string;
  yearsOfExperience?: number;
  desiredJobTitles: string[];
  desiredLocations: string[];
  employmentTypes: string[];
  workMode: string[];
  salaryExpectation?: string;
  summary?: string;
}

const schema = new Schema<IClientProfile>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  phone: String,
  location: String,
  linkedinUrl: String,
  portfolioUrl: String,
  visaStatus: String,
  yearsOfExperience: Number,
  desiredJobTitles: { type: [String], default: [] },
  desiredLocations: { type: [String], default: [] },
  employmentTypes: { type: [String], default: [] },
  workMode: { type: [String], default: [] },
  salaryExpectation: String,
  summary: String
}, { timestamps: true });

export const ClientProfile = model<IClientProfile>('ClientProfile', schema);
