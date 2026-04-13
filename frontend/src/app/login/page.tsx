import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function Page() {
  return <main><Navbar /><section className='mx-auto max-w-4xl px-6 py-16'><h1 className='text-3xl font-bold'>Login</h1><p className='mt-4 text-slate-600'>ApplyFlow helps job seekers pair AI recommendations with trusted human assistants who manually apply and upload evidence.</p></section><Footer /></main>;
}
