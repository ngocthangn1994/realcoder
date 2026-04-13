export const DashboardHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <header className='mb-6 rounded-2xl border border-slate-200 bg-white p-5'>
    <h1 className='text-2xl font-bold text-slate-900'>{title}</h1>
    <p className='mt-1 text-sm text-slate-600'>{subtitle}</p>
  </header>
);
