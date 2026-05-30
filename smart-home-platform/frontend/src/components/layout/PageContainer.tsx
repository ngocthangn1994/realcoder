import { PropsWithChildren } from 'react';

export const PageContainer = ({ children }: PropsWithChildren) => (
  <main className="max-w-7xl mx-auto p-6">{children}</main>
);
