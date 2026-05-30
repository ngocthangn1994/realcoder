export type DeviceType = 'thermostat' | 'camera' | 'doorbell_camera' | 'smoke_detector' | 'temperature_sensor' | 'smart_plug';
export type DeviceStatus = 'online' | 'offline' | 'warning';

export interface Device {
  _id: string;
  name: string;
  type: DeviceType;
  room: string;
  status: DeviceStatus;
  batteryLevel?: number;
  currentTemperature?: number;
  targetTemperature?: number;
  lastSeenAt: string;
}
