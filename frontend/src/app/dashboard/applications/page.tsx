import { DashboardHeader } from '@/components/dashboard/header';
import { ApplicationsTable } from '@/components/dashboard/applications-table';

export default function Page() {
  return <section><DashboardHeader title='Applications Tracker' subtitle='Manage your concierge workflow with transparency.' /><ApplicationsTable /></section>;
}
