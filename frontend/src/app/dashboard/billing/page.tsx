import { DashboardHeader } from '@/components/dashboard/header';
import { ApplicationsTable } from '@/components/dashboard/applications-table';

export default function Page() {
  return <section><DashboardHeader title='Subscription & Billing' subtitle='Manage your concierge workflow with transparency.' /><p className='rounded-2xl border border-slate-200 bg-white p-6 text-slate-600'>Premium MVP module view with realistic mock workflow data.</p></section>;
}
