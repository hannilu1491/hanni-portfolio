'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(Math.min(window.scrollY, 360));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="fade-in border-b border-warm-200/70 bg-[#fcfbf8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-14 md:grid-cols-[0.86fr_1.14fr] md:items-center md:pt-20">
        <div className="space-y-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-caramel">UI/UX Designer · Visual Storyteller</p>
            <p className="mt-2 text-sm tracking-[0.14em] text-warm-700">UI/UX 設計師 · 視覺敘事者</p>
          </div>
          <h1 className="font-serif text-6xl leading-[0.88] md:text-8xl">Hanni Lu<span className="text-gold">.</span></h1>
          <p className="max-w-lg text-lg leading-relaxed text-warm-700">I design premium digital products and brand experiences with editorial rhythm, strategic clarity, and refined visual storytelling.</p>
          <p className="max-w-lg text-sm leading-relaxed text-warm-700">我擅長將品牌美感、使用者思考與數位體驗整合，打造清楚、有溫度、具敘事感的設計作品。</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/projects">View Projects 查看作品</Button>
            <Button href="/contact" variant="ghost">Contact Me 聯絡我</Button>
          </div>
        </div>

        <div className="relative h-[570px] md:h-[620px]">
          <div style={{ transform: `translateY(${-y * 0.15}px)` }} className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.95),transparent_40%),radial-gradient(circle_at_80%_82%,rgba(154,106,68,0.2),transparent_38%)]" />

          <figure style={{ transform: `translateY(${-y * 0.3}px)` }} className="float-soft absolute left-0 top-8 w-[54%] -rotate-6 rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_24px_50px_rgba(20,18,15,0.2)]">
            <Image src="/images/project-web.svg" alt="desktop mockup" width={620} height={420} className="h-52 w-full rounded-xl object-cover" priority />
          </figure>
          <figure style={{ transform: `translateY(${-y * 0.3}px)` }} className="float-soft-delay absolute right-1 top-12 z-10 w-[50%] rotate-[5deg] rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_20px_42px_rgba(20,18,15,0.18)]">
            <Image src="/images/project-brand.svg" alt="brand board" width={560} height={440} className="h-56 w-full rounded-xl object-cover" />
          </figure>

          <figure style={{ transform: `translateY(${-y * 0.5}px)` }} className="absolute left-[18%] top-[43%] z-20 w-[64%] rounded-2xl border border-[#d7c8b3] bg-white p-2 shadow-[0_28px_55px_rgba(20,18,15,0.24)]">
            <Image src="/images/editorial-hero-board.svg" alt="ui card" width={920} height={620} className="h-56 w-full rounded-xl object-cover" />
          </figure>
          <figure style={{ transform: `translateY(${-y * 0.5}px)` }} className="absolute bottom-6 right-8 z-30 w-[36%] rotate-[8deg] rounded-2xl border border-[#d7c8b3] bg-white p-2 shadow-[0_20px_40px_rgba(20,18,15,0.18)]">
            <Image src="/images/project-ui.svg" alt="mobile mockup" width={460} height={320} className="h-40 w-full rounded-xl object-cover" />
          </figure>

          <div style={{ transform: `translateY(${-y * 0.65}px)` }} className="absolute left-8 top-1/2 z-40 h-2 w-2 rounded-full bg-caramel" />
          <div style={{ transform: `translateY(${-y * 0.65}px)` }} className="absolute left-12 top-[52%] z-40 h-px w-20 bg-caramel/60" />
          <div style={{ transform: `translateY(${-y * 0.65}px)` }} className="absolute left-12 top-[54%] z-40 text-[10px] uppercase tracking-[0.22em] text-warm-700">Premium Layout</div>
        </div>
      </div>
    </section>
  );
}
