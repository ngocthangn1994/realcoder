import { Schema, model, Types } from 'mongoose';

const refreshTokenSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true, required: true },
  token: { type: String, required: true, index: true },
  expiresAt: { type: Date, required: true },
  revokedAt: Date,
  userAgent: String,
  ip: String
}, { timestamps: true });

export const RefreshToken = model('RefreshToken', refreshTokenSchema);
