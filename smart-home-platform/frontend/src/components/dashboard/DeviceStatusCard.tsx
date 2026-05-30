import { Device } from '../../types/device';

export const DeviceStatusCard = ({ device }: { device: Device }) => (
  <article className="bg-white rounded-xl shadow p-4">
    <h3 className="font-semibold">{device.name}</h3>
    <p className="text-sm text-gray-600">{device.room} • {device.type}</p>
    <p className="mt-2 text-sm">Status: <span className="font-medium">{device.status}</span></p>
    {typeof device.batteryLevel === 'number' && <p className="text-sm">Battery: {device.batteryLevel}%</p>}
  </article>
);
