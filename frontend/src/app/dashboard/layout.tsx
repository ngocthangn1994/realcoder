import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <main className='mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[260px_1fr]'><DashboardSidebar />{children}</main>;
}
