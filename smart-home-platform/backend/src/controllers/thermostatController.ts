import { Request, Response } from 'express';
import { Device } from '../models/Device';
import { TelemetryLog } from '../models/TelemetryLog';
import { buildResponse } from '../utils/apiResponse';

const findThermostat = async () => Device.findOne({ type: 'thermostat' });

const recordThermostatTelemetry = async (deviceId: string, temperature: number, status: 'online' | 'offline' | 'warning') => {
  await TelemetryLog.create({ deviceId, temperature, status, eventType: 'temperature_change' });
};

export const getCurrentThermostat = async (_req: Request, res: Response): Promise<void> => {
  const thermostat = await findThermostat();
  if (!thermostat) {
    res.status(404).json(buildResponse(false, 'Thermostat not found'));
    return;
  }
  res.json(buildResponse(true, 'Thermostat state fetched', thermostat));
};

export const setThermostat = async (req: Request, res: Response): Promise<void> => {
  const { targetTemperature } = req.body;
  const thermostat = await findThermostat();
  if (!thermostat) {
    res.status(404).json(buildResponse(false, 'Thermostat not found'));
    return;
  }

  thermostat.targetTemperature = Number(targetTemperature);
  thermostat.currentTemperature = Number(targetTemperature);
  thermostat.lastSeenAt = new Date();
  await thermostat.save();
  await recordThermostatTelemetry(String(thermostat._id), thermostat.currentTemperature, thermostat.status);

  res.json(buildResponse(true, 'Thermostat target set', thermostat));
};

export const increaseThermostat = async (_req: Request, res: Response): Promise<void> => {
  const thermostat = await findThermostat();
  if (!thermostat) {
    res.status(404).json(buildResponse(false, 'Thermostat not found'));
    return;
  }
  thermostat.targetTemperature = (thermostat.targetTemperature ?? thermostat.currentTemperature ?? 20) + 1;
  thermostat.currentTemperature = thermostat.targetTemperature;
  thermostat.lastSeenAt = new Date();
  await thermostat.save();
  await recordThermostatTelemetry(String(thermostat._id), thermostat.currentTemperature, thermostat.status);

  res.json(buildResponse(true, 'Thermostat temperature increased', thermostat));
};

export const decreaseThermostat = async (_req: Request, res: Response): Promise<void> => {
  const thermostat = await findThermostat();
  if (!thermostat) {
    res.status(404).json(buildResponse(false, 'Thermostat not found'));
    return;
  }
  thermostat.targetTemperature = (thermostat.targetTemperature ?? thermostat.currentTemperature ?? 20) - 1;
  thermostat.currentTemperature = thermostat.targetTemperature;
  thermostat.lastSeenAt = new Date();
  await thermostat.save();
  await recordThermostatTelemetry(String(thermostat._id), thermostat.currentTemperature, thermostat.status);

  res.json(buildResponse(true, 'Thermostat temperature decreased', thermostat));
};
