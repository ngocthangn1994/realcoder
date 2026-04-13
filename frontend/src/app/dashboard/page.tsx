import { DashboardHeader } from '@/components/dashboard/header';
import { ApplicationsTable } from '@/components/dashboard/applications-table';
import { kpis, matches } from '@/data/mock-data';

export default function DashboardPage() {
  return <section>
    <DashboardHeader title='Welcome back, Taylor' subtitle='Your assistant submitted 3 applications today.' />
    <div className='grid gap-4 md:grid-cols-4'>{kpis.map(k => <div key={k.label} className='rounded-2xl border border-slate-200 bg-white p-4'><p className='text-sm text-slate-500'>{k.label}</p><p className='mt-2 text-2xl font-bold'>{k.value}</p></div>)}</div>
    <h2 className='mb-3 mt-6 text-lg font-semibold'>Recent applications</h2>
    <ApplicationsTable />
    <h2 className='mb-3 mt-6 text-lg font-semibold'>Top AI Matches</h2>
    <div className='grid gap-3 md:grid-cols-2'>{matches.map(m => <div key={m.id} className='rounded-2xl border border-slate-200 bg-white p-4'><p className='font-semibold'>{m.title} · {m.company}</p><p className='text-sm text-slate-500'>{m.location} · {m.matchScore}% match</p><p className='mt-2 text-sm'>{m.reason}</p></div>)}</div>
  </section>;
}
