import { Schema, model } from 'mongoose';

const chatThreadSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  assistantId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  participantIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  isPremiumUnlocked: { type: Boolean, default: false },
  lastMessageAt: Date
}, { timestamps: true });

export const ChatThread = model('ChatThread', chatThreadSchema);
