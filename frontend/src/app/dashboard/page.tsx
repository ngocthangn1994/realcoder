import { DashboardClient } from '../../components/DashboardClient';

export default function DashboardPage() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold text-slate-900">GoLink Dashboard</h1>
      <p className="text-sm text-slate-500">Manage all short links for your team.</p>
      <DashboardClient />
    </div>
  );
}
