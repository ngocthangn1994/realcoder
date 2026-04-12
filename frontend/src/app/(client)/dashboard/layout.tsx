import { DashboardSidebar } from '@/components/dashboard/sidebar';

export default function ClientDashboardLayout({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[250px_1fr]"><DashboardSidebar /> <section>{children}</section></main>;
}
