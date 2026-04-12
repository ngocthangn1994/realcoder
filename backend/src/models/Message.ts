import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  assistantId: { type: Types.ObjectId, ref: 'User', required: true },
  senderRole: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

export const Message = model('Message', schema);
