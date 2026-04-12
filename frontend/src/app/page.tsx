import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { SectionTitle } from '@/components/marketing/section-title';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { trustMetrics } from '@/mock/data';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge label="AI-powered • Human-assisted" className="mb-4 bg-brand-50 text-brand-700" />
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">Land better roles faster with your personal job concierge.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">ApplyFlow pairs intelligent matching with dedicated human assistants who manually apply on your behalf and keep proof in one premium dashboard.</p>
            <div className="mt-8 flex gap-3">
              <Button href="/register" className="bg-brand-500 text-white">Start my concierge</Button>
              <Button href="/pricing" className="border border-slate-300 bg-white text-slate-800">View plans</Button>
            </div>
          </div>
          <div className="glass-card p-6">
            <p className="text-sm text-slate-500">Live campaign preview</p>
            <div className="mt-4 space-y-3">
              {['Profile 96% complete', '18 applications submitted this week', '3 interview callbacks active'].map((i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-3 text-sm">{i}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-4">
          {trustMetrics.map((metric) => (
            <div className="glass-card p-5" key={metric.label}>
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="mt-1 text-sm font-semibold">{metric.label}</p>
              <p className="mt-2 text-xs text-slate-500">{metric.hint}</p>
            </div>
          ))}
        </section>

        <section className="mt-20">
          <SectionTitle eyebrow="How it works" title="A trusted workflow built for serious job seekers" desc="We combine AI guidance with real assistants so every application stays thoughtful, accurate, and trackable." />
          <div className="grid gap-4 md:grid-cols-5">{['Fill profile once', 'Upload resume', 'Get AI matches', 'Assistant applies manually', 'Track proofs + statuses'].map((step, idx) => <div key={step} className="glass-card p-4 text-sm"><p className="mb-2 text-xs text-brand-700">Step {idx + 1}</p><p className="font-medium">{step}</p></div>)}</div>
        </section>

        <section className="mt-20">
          <SectionTitle eyebrow="Pricing" title="Concierge plans for every stage" desc="Transparent plans with dedicated support and manual application quality control." />
          <div className="grid gap-4 md:grid-cols-3">{[
            { name: 'Starter', price: '$149/mo', feature: '40 applications' },
            { name: 'Growth', price: '$299/mo', feature: '120 applications' },
            { name: 'Premium', price: '$549/mo', feature: 'Unlimited + priority' }
          ].map((plan) => <div key={plan.name} className="glass-card p-6"><p className="font-semibold">{plan.name}</p><p className="mt-3 text-3xl font-bold">{plan.price}</p><p className="mt-2 text-sm text-slate-500">{plan.feature}</p><Button className="mt-5 w-full bg-brand-500 text-white">Choose {plan.name}</Button></div>)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
