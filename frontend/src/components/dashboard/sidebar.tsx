import Link from 'next/link';

const links = [
  ['Overview', '/dashboard'], ['My Profile', '/dashboard/profile'], ['Resume', '/dashboard/resume'], ['Job Matches', '/dashboard/job-matches'], ['Applications', '/dashboard/applications'], ['Evidence', '/dashboard/evidence'], ['Billing', '/dashboard/billing'], ['Messages', '/dashboard/messages']
];

export const DashboardSidebar = () => <aside className='w-full rounded-2xl border border-slate-200 bg-white p-4 lg:w-64'>
  <p className='mb-4 font-semibold'>Client Workspace</p>
  <nav className='space-y-1 text-sm'>{links.map(([label, href]) => <Link key={href} href={href} className='block rounded-lg px-3 py-2 hover:bg-slate-50'>{label}</Link>)}</nav>
</aside>;
