import { Request, Response } from 'express';
import { Device } from '../models/Device';
import { evaluateDeviceHealth } from '../services/deviceHealthService';
import { getEntityState } from '../services/homeAssistantService';
import { buildResponse } from '../utils/apiResponse';

const sampleDevices = [
  { name: 'Main Thermostat', type: 'thermostat', room: 'Living Room', status: 'online', currentTemperature: 22, targetTemperature: 23, lastSeenAt: new Date(), homeAssistantEntityId: 'climate.main_thermostat' },
  { name: 'Front Door Camera', type: 'doorbell_camera', room: 'Entrance', status: 'online', batteryLevel: 76, lastSeenAt: new Date(), homeAssistantEntityId: 'camera.front_door' },
  { name: 'Kitchen Smoke Detector', type: 'smoke_detector', room: 'Kitchen', status: 'online', batteryLevel: 60, lastSeenAt: new Date(), homeAssistantEntityId: 'binary_sensor.kitchen_smoke' }
];

export const ensureSampleDevices = async (): Promise<void> => {
  const count = await Device.countDocuments();
  if (count === 0) {
    await Device.insertMany(sampleDevices);
  }
};

export const getDevices = async (_req: Request, res: Response): Promise<void> => {
  const devices = await Device.find().sort({ createdAt: -1 });
  res.json(buildResponse(true, 'Devices fetched', devices));
};

export const createDevice = async (req: Request, res: Response): Promise<void> => {
  const device = await Device.create(req.body);
  res.status(201).json(buildResponse(true, 'Device created', device));
};

export const getDeviceById = async (req: Request, res: Response): Promise<void> => {
  const device = await Device.findById(req.params.id);
  if (!device) {
    res.status(404).json(buildResponse(false, 'Device not found'));
    return;
  }
  res.json(buildResponse(true, 'Device fetched', device));
};

export const getDeviceHealth = async (_req: Request, res: Response): Promise<void> => {
  const devices = await Device.find();
  const health = devices.map((device) => ({ deviceId: device._id, name: device.name, health: evaluateDeviceHealth(device) }));
  res.json(buildResponse(true, 'Device health fetched', health));
};

export const getCameraStatus = async (_req: Request, res: Response): Promise<void> => {
  const camera = await Device.findOne({ type: { $in: ['camera', 'doorbell_camera'] } });
  if (!camera) {
    res.status(404).json(buildResponse(false, 'No camera device found'));
    return;
  }
  const entityState = camera.homeAssistantEntityId ? await getEntityState(camera.homeAssistantEntityId) : null;
  res.json(buildResponse(true, 'Camera status fetched', { camera, entityState }));
};
