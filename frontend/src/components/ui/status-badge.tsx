import { ApplicationStatus } from '@/types';

const map: Record<ApplicationStatus, string> = {
  Suggested: 'bg-slate-100 text-slate-600',
  Pending: 'bg-amber-100 text-amber-700',
  Applied: 'bg-blue-100 text-blue-700',
  Interview: 'bg-emerald-100 text-emerald-700',
  Rejected: 'bg-rose-100 text-rose-700',
  Offer: 'bg-purple-100 text-purple-700'
};

export const StatusBadge = ({ status }: { status: ApplicationStatus }) => (
  <span className={`rounded-full px-2 py-1 text-xs font-medium ${map[status]}`}>{status}</span>
);
