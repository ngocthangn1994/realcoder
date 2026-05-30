import { Device } from '../../types/device';

export const CameraCard = ({ camera }: { camera: Device | null }) => (
  <section className="bg-white rounded-xl shadow p-4">
    <h2 className="font-semibold mb-2">Camera / Doorbell</h2>
    {camera ? <p>{camera.name} is <strong>{camera.status}</strong></p> : <p>No camera found</p>}
  </section>
);
