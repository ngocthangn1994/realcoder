import { Alert } from '../../types/alert';

export const AlertsList = ({ alerts }: { alerts: Alert[] }) => (
  <section className="bg-white rounded-xl shadow p-4">
    <h2 className="font-semibold mb-3">Recent Alerts</h2>
    <ul className="space-y-2">
      {alerts.map((alert) => (
        <li key={alert._id} className="border rounded p-2">
          <p className="text-sm font-medium">{alert.message}</p>
          <p className="text-xs text-gray-500">{alert.type} • {alert.severity}</p>
        </li>
      ))}
      {alerts.length === 0 && <li className="text-sm text-gray-500">No alerts yet.</li>}
    </ul>
  </section>
);
