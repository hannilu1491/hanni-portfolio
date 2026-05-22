'use client';

import Link from 'next/link';
import { useState } from 'react';

const cats = ['UX / Product Design', 'Brand Experience', 'Web Design', 'Illustration', 'Experimental Lab'];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-warm-200/80 bg-[#fcfbf8]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-5">
          <Link href="/" className="font-serif text-4xl leading-none">Hanni Lu</Link>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-caramel md:block">Portfolio</span>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>Menu</button>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          <li><Link href="/" className="transition hover:text-caramel">Home 首頁</Link></li>
          <li className="group relative">
            <Link href="/projects" className="transition hover:text-caramel">Projects 作品</Link>
            <div className="absolute left-0 top-7 hidden w-60 rounded-xl border border-warm-200 bg-white p-3 shadow-soft group-hover:block">
              {cats.map((c) => (
                <Link key={c} href={`/projects?category=${encodeURIComponent(c)}`} className="block rounded px-3 py-2 text-sm hover:bg-warm-100">
                  {c}
                </Link>
              ))}
            </div>
          </li>
          <li><Link href="/about" className="transition hover:text-caramel">About 關於</Link></li>
          <li><Link href="/resume" className="transition hover:text-caramel">Resume 履歷</Link></li>
          <li><Link href="/contact" className="transition hover:text-caramel">Contact 聯絡</Link></li>
          <li>
            <Link href="/contact" className="rounded bg-warm-900 px-4 py-2 text-xs tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-caramel">Let’s Work Together 合作洽談</Link>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="space-y-2 border-t border-warm-200 px-6 py-4 text-sm md:hidden">
          <Link href="/" className="block">Home 首頁</Link>
          <Link href="/projects" className="block">Projects 作品</Link>
          <Link href="/about" className="block">About 關於</Link>
          <Link href="/resume" className="block">Resume 履歷</Link>
          <Link href="/contact" className="block">Contact 聯絡</Link>
        </div>
      )}
    </header>
  );
}
