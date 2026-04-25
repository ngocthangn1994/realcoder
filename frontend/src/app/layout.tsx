import './globals.css';
import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';

export const metadata = {
  title: 'GoLink',
  description: 'Internal URL shortener and browser keyword redirect tool'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-slate-50 text-slate-900 antialiased'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
