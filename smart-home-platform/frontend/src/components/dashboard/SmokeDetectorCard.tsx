import { Device } from '../../types/device';

export const SmokeDetectorCard = ({ detector }: { detector: Device | null }) => (
  <section className="bg-white rounded-xl shadow p-4">
    <h2 className="font-semibold mb-2">Smoke Detector</h2>
    {detector ? <p>{detector.name}: <strong>{detector.status}</strong></p> : <p>No smoke detector found</p>}
  </section>
);
