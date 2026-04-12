import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

const faqs = [
  ['Do you auto-apply using bots?', 'No. All applications are submitted manually by trained assistants.'],
  ['Can I track proof?', 'Yes, every submission can include screenshots, links, and notes.'],
  ['Is this only for tech jobs?', 'No, we support multiple industries and role families.']
];

export default function FAQPage() {
  return <div><Navbar /><main className="mx-auto max-w-4xl space-y-4 px-6 py-14"><h1 className="text-4xl font-bold">Frequently asked questions</h1>{faqs.map(([q,a]) => <div key={q} className="glass-card p-5"><p className="font-semibold">{q}</p><p className="mt-2 text-sm text-slate-600">{a}</p></div>)}</main><Footer /></div>;
}
