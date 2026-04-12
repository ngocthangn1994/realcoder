import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

export default function AboutPage() {
  return <div><Navbar /><main className="mx-auto max-w-4xl px-6 py-14"><h1 className="text-4xl font-bold">About ApplyFlow</h1><p className="mt-5 text-slate-600">ApplyFlow is an AI-powered job application concierge with dedicated human assistants. We focus on premium support, transparent proof tracking, and better interview outcomes.</p></main><Footer /></div>;
}
