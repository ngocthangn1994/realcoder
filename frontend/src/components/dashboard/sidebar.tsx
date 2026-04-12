import Link from 'next/link';

export function DashboardSidebar({ admin = false }: { admin?: boolean }) {
  const clientLinks = ['Overview', 'My Profile', 'Resume Upload', 'AI Job Matches', 'Applications', 'Evidence', 'Billing', 'Messages'];
  const adminLinks = ['Overview', 'Clients', 'Assigned', 'Applications', 'Evidence Upload', 'Internal Notes'];
  const links = admin ? adminLinks : clientLinks;
  return (
    <aside className="glass-card h-fit p-4">
      <p className="mb-4 text-sm font-semibold text-slate-500">{admin ? 'Assistant Panel' : 'Client Workspace'}</p>
      <div className="space-y-2">
        {links.map((link) => (
          <Link key={link} href="#" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">{link}</Link>
        ))}
      </div>
    </aside>
  );
}
