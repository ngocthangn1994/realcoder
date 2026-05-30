import { Document, Schema, Types, model } from 'mongoose';
import { DeviceStatus } from './Device';

export interface ITelemetryLog extends Document {
  deviceId: Types.ObjectId;
  temperature?: number;
  batteryLevel?: number;
  status: DeviceStatus;
  eventType: string;
  createdAt: Date;
}

const telemetryLogSchema = new Schema<ITelemetryLog>(
  {
    deviceId: { type: Schema.Types.ObjectId, ref: 'Device', required: true },
    temperature: { type: Number },
    batteryLevel: { type: Number, min: 0, max: 100 },
    status: { type: String, enum: ['online', 'offline', 'warning'], required: true },
    eventType: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

export const TelemetryLog = model<ITelemetryLog>('TelemetryLog', telemetryLogSchema);
