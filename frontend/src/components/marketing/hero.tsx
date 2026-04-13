import { Button } from '@/components/ui/button';

export function Hero() {
  return <section className='mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2'>
    <div>
      <p className='mb-3 text-sm font-semibold text-brand-700'>AI-powered job application concierge</p>
      <h1 className='text-4xl font-bold tracking-tight text-slate-900'>Apply faster with AI insights and real human assistants.</h1>
      <p className='mt-4 text-slate-600'>You fill your profile once. We match ideal roles, assistants manually apply, and every proof is tracked in your dashboard.</p>
      <div className='mt-6 flex gap-3'><Button>Start free setup</Button><Button intent='ghost'>See dashboard</Button></div>
    </div>
    <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-soft'>
      <p className='text-sm text-slate-500'>Dashboard Preview</p>
      <div className='mt-4 space-y-3'>
        <div className='rounded-2xl bg-slate-50 p-3'>42 applications this month</div>
        <div className='rounded-2xl bg-slate-50 p-3'>9 interview callbacks</div>
        <div className='rounded-2xl bg-slate-50 p-3'>Assistant: Maya K. (avg response 12 min)</div>
      </div>
    </div>
  </section>;
}
