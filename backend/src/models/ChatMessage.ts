import { Schema, model } from 'mongoose';

const chatMessageSchema = new Schema({
  threadId: { type: Schema.Types.ObjectId, ref: 'ChatThread', index: true },
  senderId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  body: String,
  messageType: { type: String, enum: ['text', 'system'], default: 'text' },
  attachments: [String],
  readBy: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

export const ChatMessage = model('ChatMessage', chatMessageSchema);
