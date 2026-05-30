import { Device } from '../../types/device';
import { DeviceStatusCard } from './DeviceStatusCard';

export const DeviceGrid = ({ devices }: { devices: Device[] }) => (
  <section>
    <h2 className="text-lg font-semibold mb-3">All Devices</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {devices.map((device) => <DeviceStatusCard key={device._id} device={device} />)}
    </div>
  </section>
);
