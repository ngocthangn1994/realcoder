import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = React.PropsWithChildren<{ href?: string; className?: string }>;

export function Button({ href, className, children }: Props) {
  const styles = cn('inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5', className);
  if (href) return <Link href={href} className={styles}>{children}</Link>;
  return <button className={styles}>{children}</button>;
}
