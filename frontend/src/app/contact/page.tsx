import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function ContactPage() {
  return <div><Navbar /><main className="mx-auto max-w-4xl px-6 py-16"><h1 className="text-4xl font-bold">Contact ApplyFlow</h1><p className="mt-4 text-slate-600">Questions about packages or enterprise workflow support? Reach us at hello@applyflow.dev.</p></main><Footer /></div>;
}
