import Link from 'next/link';

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          GoLink
        </Link>
        <nav className="flex items-center gap-5 text-sm text-slate-600">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
