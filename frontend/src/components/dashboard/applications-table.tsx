import { applications } from '@/data/mock-data';
import { StatusBadge } from '@/components/ui/status-badge';

export const ApplicationsTable = () => (
  <div className='overflow-x-auto rounded-2xl border border-slate-200 bg-white'>
    <table className='min-w-full text-sm'>
      <thead className='bg-slate-50 text-left text-slate-500'><tr><th className='p-3'>Company</th><th>Role</th><th>Source</th><th>Date</th><th>Status</th><th>Note</th><th>Evidence</th></tr></thead>
      <tbody>{applications.map(a => <tr key={a.id} className='border-t border-slate-100'><td className='p-3'>{a.company}</td><td>{a.role}</td><td>{a.source}</td><td>{a.dateApplied}</td><td><StatusBadge status={a.status} /></td><td>{a.note}</td><td>{a.evidenceCount}</td></tr>)}</tbody>
    </table>
  </div>
);
