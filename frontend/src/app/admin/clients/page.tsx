import Link from 'next/link';

export default function ClientsPage() {
  return <section className='rounded-2xl border border-slate-200 bg-white p-6'><h1 className='text-2xl font-bold'>Clients</h1><div className='mt-4 space-y-2'><Link href='/admin/clients/1' className='block rounded-xl border p-3'>Taylor Brooks · Growth plan · Assistant Maya K.</Link></div></section>;
}
