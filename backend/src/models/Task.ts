import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  assistantId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  title: String,
  status: { type: String, enum: ['open', 'in_progress', 'done'], default: 'open' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  dueAt: Date,
  comments: [String]
}, { timestamps: true });

export const Task = model('Task', taskSchema);
