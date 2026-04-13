import { Schema, model } from 'mongoose';

export const Subscription = model('Subscription', new Schema({ userId: { type: Schema.Types.ObjectId, ref: 'User', index: true }, planId: { type: Schema.Types.ObjectId, ref: 'SubscriptionPlan' }, status: String, currentPeriodStart: Date, currentPeriodEnd: Date, provider: String, externalId: String }, { timestamps: true }));
export const Invoice = model('Invoice', new Schema({ userId: { type: Schema.Types.ObjectId, ref: 'User', index: true }, amount: Number, currency: String, status: String, providerInvoiceId: String, dueAt: Date }, { timestamps: true }));
export const Payment = model('Payment', new Schema({ userId: { type: Schema.Types.ObjectId, ref: 'User', index: true }, invoiceId: { type: Schema.Types.ObjectId, ref: 'Invoice' }, amount: Number, status: String, method: String, providerPaymentId: String }, { timestamps: true }));
