import { apiClient } from './client';
import { Device } from '../types/device';

export const getDevices = () => apiClient<Device[]>('/api/devices');

export const getDeviceHealth = () =>
  apiClient<Array<{ deviceId: string; name: string; health: 'healthy' | 'offline' | 'low_battery' | 'warning' }>>('/api/devices/health');

export const getCameraStatus = () =>
  apiClient<{ camera: Device; entityState: Record<string, unknown> | null }>('/api/devices/camera/status');
