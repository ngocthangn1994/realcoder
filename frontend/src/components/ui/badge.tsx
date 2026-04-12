import { cn } from '@/lib/utils';

export function Badge({ label, className }: { label: string; className?: string }) {
  return <span className={cn('rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700', className)}>{label}</span>;
}
