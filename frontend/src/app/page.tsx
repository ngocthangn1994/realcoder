import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { SectionTitle } from '@/components/marketing/section-title';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge label="Human Assistant + AI" className="mb-4 bg-brand-50 text-brand-700" />
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">We help apply to jobs for you, with AI guidance and real human execution.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">ApplyFlow analyzes your resume, recommends strong-fit roles, and assigns a trained assistant to move applications forward with proof and progress tracking.</p>
            <div className="mt-8 flex gap-3">
              <Button href="/register" className="bg-brand-500 text-white">Choose a package</Button>
              <Button href="/pricing" className="border border-slate-300 bg-white text-slate-800">Compare plans</Button>
            </div>
          </div>
          <div className="glass-card p-6">
            <p className="text-sm text-slate-500">Live workflow snapshot</p>
            <div className="mt-4 space-y-3">
              {['Resume parsed + skill map complete', '12 high-fit jobs identified', '4 roles delegated to assistant today', '2 recruiter responses received'].map((i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-3 text-sm">{i}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20"><SectionTitle eyebrow="How it works" title="Three-step engine for faster job outcomes" desc="Original workflow focused on human assistant support and AI-assisted preparation." /><div className="grid gap-4 md:grid-cols-3">{['Upload resume + answer onboarding questions', 'AI scores job fit and proposes best targets', 'Human assistant executes applications and reports progress'].map((s,i)=><div key={s} className="glass-card p-4"><p className="text-xs text-brand-700">Step {i+1}</p><p className="mt-2 font-medium">{s}</p></div>)}</div></section>
        <section className="mt-20 grid gap-4 md:grid-cols-2"><div className="glass-card p-6"><h3 className="text-xl font-semibold">Proof-driven assistant workflow</h3><p className="mt-2 text-sm text-slate-600">Every delegated job gets status tracking, notes, and evidence uploads.</p></div><div className="glass-card p-6"><h3 className="text-xl font-semibold">AI resume analysis</h3><p className="mt-2 text-sm text-slate-600">Structured skill extraction, role targeting, keyword gap checks, and fit explanations.</p></div></section>
        <section className="mt-20"><SectionTitle eyebrow="Customer outcomes" title="Metrics that matter" desc="Built for momentum, transparency, and quality at scale." /><div className="grid gap-4 md:grid-cols-4">{[['Avg. profile readiness','96%'],['Weekly delegated applications','42'],['Median response uplift','2.3x'],['Client satisfaction','4.8/5']].map(([l,v])=><div key={l} className="glass-card p-5"><p className="text-2xl font-bold">{v}</p><p className="text-sm">{l}</p></div>)}</div></section>
        <section className="mt-20 grid gap-4 md:grid-cols-2"><div className="glass-card p-6"><h3 className="font-semibold">Founder story</h3><p className="mt-2 text-sm text-slate-600">ApplyFlow was created after seeing qualified candidates burn time on repetitive applications. We designed a better system: AI for precision, humans for execution.</p></div><div className="glass-card p-6"><h3 className="font-semibold">Testimonials</h3><p className="mt-2 text-sm text-slate-600">“I stopped juggling tabs and started getting interviews.” — Early ApplyFlow customer</p></div></section>
      </main>
      <Footer />
    </div>
  );
}
