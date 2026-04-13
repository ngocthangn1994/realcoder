import { Schema, model } from 'mongoose';

const assistantProfileSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', unique: true, index: true },
  specialties: [String],
  capacity: { type: Number, default: 8 },
  activeClientCount: { type: Number, default: 0 },
  bio: String,
  timezone: String,
  rating: { type: Number, default: 5 }
}, { timestamps: true });

export const AssistantProfile = model('AssistantProfile', assistantProfileSchema);
