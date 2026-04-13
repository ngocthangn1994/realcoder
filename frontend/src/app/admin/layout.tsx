import { ReactNode } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <main className='mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[240px_1fr]'>
    <aside className='rounded-2xl border border-slate-200 bg-white p-4'><p className='mb-3 font-semibold'>Assistant Console</p><nav className='space-y-1 text-sm'><Link href='/admin' className='block rounded px-3 py-2 hover:bg-slate-50'>Overview</Link><Link href='/admin/clients' className='block rounded px-3 py-2 hover:bg-slate-50'>Clients</Link><Link href='/admin/applications' className='block rounded px-3 py-2 hover:bg-slate-50'>Applications</Link></nav></aside>
    {children}
  </main>;
}
