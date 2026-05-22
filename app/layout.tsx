import '@/styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: 'Hanni Lu | UI/UX Portfolio',
  description: 'Editorial-style UI/UX portfolio with product thinking and brand aesthetics.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="page-enter"><ScrollProgress /><Header />{children}<Footer /><a href="#top" className="fixed bottom-6 right-6 rounded-full bg-warm-900 px-4 py-2 text-xs text-white shadow-soft transition hover:-translate-y-0.5">Top</a></body></html>;
}
