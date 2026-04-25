import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='mx-auto max-w-6xl px-6 py-16'>
      <section className='rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-10 text-white shadow-xl'>
        <p className='text-sm uppercase tracking-[0.2em] text-indigo-200'>Internal productivity tool</p>
        <h1 className='mt-4 text-4xl font-bold leading-tight'>GoLink: your team&apos;s fast URL launcher</h1>
        <p className='mt-4 max-w-2xl text-slate-200'>
          Create memorable slugs like <strong>sam</strong>, <strong>docs</strong>, and <strong>payroll</strong>. Then type
          your browser keyword and slug to jump instantly.
        </p>
        <div className='mt-8 flex flex-wrap gap-3'>
          <Link href='/dashboard' className='rounded-lg bg-white px-4 py-2 font-semibold text-slate-900'>
            Open dashboard
          </Link>
          <span className='rounded-lg border border-white/30 px-4 py-2 text-sm'>Backend redirect route: GET /go/:slug</span>
        </div>
      </section>

      <section className='mt-10 grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 md:grid-cols-2'>
        <div>
          <h2 className='text-xl font-semibold'>Chrome shortcut setup</h2>
          <ol className='mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600'>
            <li>Name: GoLink</li>
            <li>Shortcut: go</li>
            <li>URL: http://localhost:5000/go/%s</li>
          </ol>
        </div>
        <div>
          <h2 className='text-xl font-semibold'>How to use</h2>
          <p className='mt-3 text-sm text-slate-600'>
            In the address bar type: <strong>go + Tab + sam + Enter</strong>. Your browser opens
            http://localhost:5000/go/sam and the backend redirects to the saved destination URL.
          </p>
        </div>
      </section>
    </main>
  );
}
