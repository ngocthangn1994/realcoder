import { Schema, model, Types } from 'mongoose';

export interface IMessage {
  userId: Types.ObjectId;
  assistantId: Types.ObjectId;
  senderRole: 'client' | 'assistant' | 'admin';
  content: string;
  createdAt: Date;
}

const schema = new Schema<IMessage>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  assistantId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  senderRole: { type: String, enum: ['client', 'assistant', 'admin'], required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: false });

export const Message = model<IMessage>('Message', schema);
