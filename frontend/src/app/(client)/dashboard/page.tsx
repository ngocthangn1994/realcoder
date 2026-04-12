import { applicationRows, trustMetrics } from '@/mock/data';

export default function ClientDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard overview</h1>
      <div className="grid gap-4 md:grid-cols-4">{trustMetrics.map((m) => <div key={m.label} className="glass-card p-4"><p className="text-xl font-bold">{m.value}</p><p className="text-xs text-slate-500">{m.label}</p></div>)}</div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="glass-card p-5 lg:col-span-2"><h2 className="font-semibold">Recent applications</h2><table className="mt-3 w-full text-sm"><thead><tr className="text-left text-slate-500"><th>Company</th><th>Role</th><th>Status</th></tr></thead><tbody>{applicationRows.map((r) => <tr key={r.company} className="border-t"><td>{r.company}</td><td>{r.role}</td><td>{r.status}</td></tr>)}</tbody></table></div>
        <div className="glass-card p-5"><h2 className="font-semibold">Assigned assistant</h2><p className="mt-2 text-sm text-slate-600">Maya R. · Senior Concierge</p><p className="mt-4 rounded-lg bg-brand-50 p-3 text-sm text-brand-700">Profile completion: 96%</p></div>
      </div>
    </div>
  );
}
