import { Document, Schema, model } from 'mongoose';

export type DeviceType = 'thermostat' | 'camera' | 'doorbell_camera' | 'smoke_detector' | 'temperature_sensor' | 'smart_plug';
export type DeviceStatus = 'online' | 'offline' | 'warning';

export interface IDevice extends Document {
  name: string;
  type: DeviceType;
  room: string;
  status: DeviceStatus;
  batteryLevel?: number;
  currentTemperature?: number;
  targetTemperature?: number;
  lastSeenAt: Date;
  homeAssistantEntityId?: string;
}

const deviceSchema = new Schema<IDevice>(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, enum: ['thermostat', 'camera', 'doorbell_camera', 'smoke_detector', 'temperature_sensor', 'smart_plug'] },
    room: { type: String, required: true, trim: true },
    status: { type: String, enum: ['online', 'offline', 'warning'], default: 'online' },
    batteryLevel: { type: Number, min: 0, max: 100 },
    currentTemperature: { type: Number },
    targetTemperature: { type: Number },
    lastSeenAt: { type: Date, default: Date.now },
    homeAssistantEntityId: { type: String }
  },
  { timestamps: true }
);

export const Device = model<IDevice>('Device', deviceSchema);
