import { Schema, model } from 'mongoose';

export const EmailAccount = model('EmailAccount', new Schema({ userId: { type: Schema.Types.ObjectId, ref: 'User', index: true }, provider: String, email: String, connected: Boolean }, { timestamps: true }));
export const EmailThread = model('EmailThread', new Schema({ userId: { type: Schema.Types.ObjectId, ref: 'User', index: true }, subject: String, labels: [String], unread: Boolean }, { timestamps: true }));
export const EmailMessage = model('EmailMessage', new Schema({ threadId: { type: Schema.Types.ObjectId, ref: 'EmailThread', index: true }, sender: String, body: String, statusTag: String, read: Boolean }, { timestamps: true }));
export const EmailAttachment = model('EmailAttachment', new Schema({ messageId: { type: Schema.Types.ObjectId, ref: 'EmailMessage', index: true }, fileName: String, fileUrl: String, mimeType: String }, { timestamps: true }));
