import { DashboardHeader } from '@/components/dashboard/header';
import { ApplicationsTable } from '@/components/dashboard/applications-table';

export default function Page() {
  return <section><DashboardHeader title='Messages' subtitle='Manage your concierge workflow with transparency.' /><div className='rounded-2xl border border-slate-200 bg-white p-6 space-y-3'><div className='rounded-xl bg-slate-100 p-3 w-fit'>Assistant: Uploaded proof for Notion application.</div><div className='rounded-xl bg-brand-50 p-3 w-fit ml-auto'>Client: Thanks, prioritize SF + remote roles.</div></div></section>;
}
