import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Button({ className, intent = 'primary', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { intent?: 'primary' | 'ghost' }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition',
        intent === 'primary' ? 'bg-brand-600 text-white hover:bg-brand-700' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
        className
      )}
      {...props}
    />
  );
}
