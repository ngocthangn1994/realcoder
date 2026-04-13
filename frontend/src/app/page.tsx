import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/marketing/hero';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id='how-it-works' className='mx-auto max-w-6xl px-6 py-14'>
        <h2 className='text-3xl font-bold'>How ApplyFlow works</h2>
        <div className='mt-6 grid gap-4 md:grid-cols-5'>{['Fill profile once', 'Upload resume', 'Get AI matches', 'Assistant applies manually', 'Track proofs'].map((s) => <div key={s} className='rounded-2xl border border-slate-200 bg-white p-4 shadow-soft text-sm'>{s}</div>)}</div>
      </section>
      <section className='mx-auto max-w-6xl px-6 py-14'>
        <h2 className='text-3xl font-bold'>Pricing</h2>
        <div className='mt-6 grid gap-4 md:grid-cols-3'>{[['Starter','$149'],['Growth','$299'],['Premium','$599']].map(([n,p]) => <div key={n} className='rounded-2xl border border-slate-200 bg-white p-6'><p className='font-semibold'>{n}</p><p className='mt-2 text-3xl font-bold'>{p}<span className='text-base font-normal text-slate-500'>/mo</span></p></div>)}</div>
      </section>
      <Footer />
    </main>
  );
}
