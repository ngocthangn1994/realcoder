import { Button } from '@/components/ui/button';

const links = ['About', 'Pricing', 'How it works', 'Resources'];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-bold tracking-tight">ApplyFlow</div>
        <div className="hidden gap-6 text-sm text-slate-600 md:flex">{links.map((l) => <a key={l} href="#" className="hover:text-slate-900">{l}</a>)}</div>
        <div className="flex items-center gap-3">
          <Button href="/login" className="bg-transparent px-3 py-2 text-slate-700">Login</Button>
          <Button href="/register" className="bg-brand-500 text-white">Get started</Button>
        </div>
      </nav>
    </header>
  );
}
