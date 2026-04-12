import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ApplyFlow | AI + Human Job Concierge',
  description: 'Premium job application concierge with AI insights and human assistants.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
