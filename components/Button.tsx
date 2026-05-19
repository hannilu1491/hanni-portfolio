import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props { href: string; children: React.ReactNode; variant?: 'primary' | 'ghost'; }
export default function Button({ href, children, variant = 'primary' }: Props) {
  return <Link href={href} className={cn('inline-flex items-center rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-300', variant==='primary' ? 'bg-warm-900 text-warm-50 hover:-translate-y-0.5 hover:bg-caramel' : 'border border-warm-700/30 hover:border-caramel hover:text-caramel')}>{children}</Link>;
}
