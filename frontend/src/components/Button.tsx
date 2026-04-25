import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
}

export function Button({ variant = 'primary', className, ...props }: Props) {
  return (
    <button
      className={clsx(
        'rounded-lg px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60',
        {
          'bg-slate-900 text-white hover:bg-slate-700': variant === 'primary',
          'bg-slate-100 text-slate-800 hover:bg-slate-200': variant === 'secondary',
          'bg-red-600 text-white hover:bg-red-500': variant === 'danger',
          'text-slate-600 hover:bg-slate-100': variant === 'ghost'
        },
        className
      )}
      {...props}
    />
  );
}
