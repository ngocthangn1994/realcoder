import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className='border-b border-slate-200 bg-white/90 backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <Link href='/' className='text-xl font-bold'>ApplyFlow</Link>
        <nav className='hidden gap-6 text-sm text-slate-600 md:flex'>
          <Link href='/about'>About</Link><Link href='/pricing'>Pricing</Link><Link href='/#how-it-works'>How it works</Link><Link href='/faq'>FAQ</Link>
        </nav>
        <div className='flex gap-2'>
          <Link href='/login'><Button intent='ghost'>Login</Button></Link>
          <Link href='/register'><Button>Get started</Button></Link>
        </div>
      </div>
    </header>
  );
}
