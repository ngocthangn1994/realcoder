import { useState } from 'react';
import { Device } from '../../types/device';

interface Props {
  thermostat: Device | null;
  onIncrease: () => Promise<void>;
  onDecrease: () => Promise<void>;
  onSet: (value: number) => Promise<void>;
}

export const TemperatureCard = ({ thermostat, onIncrease, onDecrease, onSet }: Props) => {
  const [value, setValue] = useState<number>(thermostat?.targetTemperature ?? 22);

  return (
    <section className="bg-white rounded-xl shadow p-5">
      <h2 className="text-lg font-semibold mb-2">Thermostat</h2>
      <p className="text-3xl font-bold text-indigo-600">{thermostat?.currentTemperature ?? '--'}°C</p>
      <p className="text-sm text-gray-500 mb-4">Target: {thermostat?.targetTemperature ?? '--'}°C</p>
      <div className="flex gap-2 mb-3">
        <button className="px-4 py-2 rounded bg-slate-200" onClick={onDecrease}>-1°C</button>
        <button className="px-4 py-2 rounded bg-slate-200" onClick={onIncrease}>+1°C</button>
      </div>
      <div className="flex gap-2">
        <input className="border rounded px-2 py-1 w-24" type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
        <button className="px-3 py-1 rounded bg-indigo-600 text-white" onClick={() => onSet(value)}>Set</button>
      </div>
    </section>
  );
};
