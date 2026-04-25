import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-10 text-white shadow-lg">
        <p className="text-sm font-medium uppercase tracking-wider text-slate-300">Internal link management</p>
        <h1 className="mt-2 text-4xl font-bold leading-tight">Create fast, memorable GoLinks for your company.</h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          Replace long URLs with clean shortcuts like go/docs, go/payroll, and go/roadmap.
          Share internal resources instantly while tracking click usage.
        </p>
        <div className="mt-8">
          <Link href="/dashboard" className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900">
            Open Dashboard
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: 'Fast creation', body: 'Set up new links in seconds with titles, tags, and descriptions.' },
          { title: 'Central dashboard', body: 'View, search, edit, and delete all links from one place.' },
          { title: 'Click insights', body: 'Track usage to understand which internal resources are most accessed.' }
        ].map((item) => (
          <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
