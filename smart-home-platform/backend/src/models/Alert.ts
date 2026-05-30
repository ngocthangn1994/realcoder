import { Document, Schema, Types, model } from 'mongoose';

export type AlertType = 'low_battery' | 'offline' | 'smoke_detected' | 'motion_detected' | 'overheat' | 'system';
export type AlertSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface IAlert extends Document {
  deviceId?: Types.ObjectId;
  type: AlertType;
  message: string;
  severity: AlertSeverity;
  resolved: boolean;
  createdAt: Date;
}

const alertSchema = new Schema<IAlert>(
  {
    deviceId: { type: Schema.Types.ObjectId, ref: 'Device' },
    type: { type: String, enum: ['low_battery', 'offline', 'smoke_detected', 'motion_detected', 'overheat', 'system'], required: true },
    message: { type: String, required: true, trim: true },
    severity: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'medium' },
    resolved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

export const Alert = model<IAlert>('Alert', alertSchema);
