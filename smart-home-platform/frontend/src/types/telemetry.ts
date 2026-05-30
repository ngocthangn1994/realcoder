export interface TelemetryLog {
  _id: string;
  deviceId: string;
  temperature?: number;
  batteryLevel?: number;
  status: 'online' | 'offline' | 'warning';
  eventType: string;
  createdAt: string;
}
