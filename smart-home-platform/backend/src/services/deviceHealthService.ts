import { IDevice } from '../models/Device';

export type HealthState = 'healthy' | 'offline' | 'low_battery' | 'warning';

export const evaluateDeviceHealth = (device: IDevice): HealthState => {
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

  if (device.lastSeenAt < tenMinutesAgo) {
    return 'offline';
  }

  if (typeof device.batteryLevel === 'number' && device.batteryLevel < 20) {
    return 'low_battery';
  }

  if (device.status === 'warning') {
    return 'warning';
  }

  return 'healthy';
};
