import Link from 'next/link';

export function AppShell({ title, links, children }: { title: string; links: Array<{ href: string; label: string }>; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f3fbf6] text-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-[250px_1fr]">
        <aside className="rounded-2xl border border-emerald-100 bg-white p-4">
          <p className="text-xl font-bold text-emerald-900">ApplyFlow</p>
          <nav className="mt-6 space-y-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-emerald-50">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/client/plans" className="mt-8 block rounded-lg bg-emerald-800 px-3 py-2 text-center text-sm font-semibold text-white">Choose a Plan</Link>
        </aside>
        <section>
          <header className="mb-4 flex items-center justify-between rounded-2xl border border-emerald-100 bg-white px-4 py-3">
            <h1 className="text-lg font-semibold">{title}</h1>
            <div className="flex items-center gap-3 text-sm">
              <button className="rounded-lg bg-emerald-800 px-3 py-2 text-white">Hire a Human Assistant</button>
              <span>🔔</span>
              <span className="rounded-full bg-emerald-100 px-2 py-1">Account</span>
            </div>
          </header>
          {children}
        </section>
      </div>
    </div>
  );
}
