import { apiClient } from './client';
import { Device } from '../types/device';

export const getThermostatCurrent = () => apiClient<Device>('/api/thermostat/current');
export const increaseThermostat = () => apiClient<Device>('/api/thermostat/increase', { method: 'POST' });
export const decreaseThermostat = () => apiClient<Device>('/api/thermostat/decrease', { method: 'POST' });
export const setThermostat = (targetTemperature: number) =>
  apiClient<Device>('/api/thermostat/set', { method: 'POST', body: JSON.stringify({ targetTemperature }) });
