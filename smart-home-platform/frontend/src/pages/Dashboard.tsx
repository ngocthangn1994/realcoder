import { useEffect, useState } from 'react';
import { getAlerts } from '../api/alertApi';
import { getCameraStatus, getDevices } from '../api/deviceApi';
import { decreaseThermostat, getThermostatCurrent, increaseThermostat, setThermostat } from '../api/thermostatApi';
import { AlertsList } from '../components/dashboard/AlertsList';
import { CameraCard } from '../components/dashboard/CameraCard';
import { DeviceGrid } from '../components/dashboard/DeviceGrid';
import { SmokeDetectorCard } from '../components/dashboard/SmokeDetectorCard';
import { TemperatureCard } from '../components/dashboard/TemperatureCard';
import { Alert } from '../types/alert';
import { Device } from '../types/device';

export const Dashboard = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [thermostat, setThermostat] = useState<Device | null>(null);
  const [camera, setCamera] = useState<Device | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const [deviceData, alertData, thermoData, cameraData] = await Promise.all([
        getDevices(), getAlerts(), getThermostatCurrent(), getCameraStatus()
      ]);
      setDevices(deviceData);
      setAlerts(alertData);
      setThermostat(thermoData);
      setCamera(cameraData.camera);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void load(); }, []);

  const smokeDetector = devices.find((d) => d.type === 'smoke_detector') || null;

  if (loading) return <p className="text-gray-600">Loading dashboard...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-4">
        <TemperatureCard thermostat={thermostat} onIncrease={async () => { setThermostat(await increaseThermostat()); }} onDecrease={async () => { setThermostat(await decreaseThermostat()); }} onSet={async (value) => { setThermostat(await setThermostat(value)); }} />
        <CameraCard camera={camera} />
        <SmokeDetectorCard detector={smokeDetector} />
      </div>
      <AlertsList alerts={alerts} />
      <DeviceGrid devices={devices} />
    </div>
  );
};
