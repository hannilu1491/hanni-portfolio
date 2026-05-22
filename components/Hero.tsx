'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const clamp = Math.min(scrollY, 360);
  const bgY = -(clamp / 360) * 20;
  const midY = -(clamp / 360) * 45;
  const fgY = -(clamp / 360) * 80;
  const detailY = -(clamp / 360) * 120;

  return (
    <section className="fade-in bg-[#fcfbf8]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[0.86fr_1.14fr] md:items-center">
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

        <div className="relative h-[590px] md:h-[640px]">
          <div style={{ transform: `translateY(${bgY}px)` }} className="absolute inset-4 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(200,169,106,0.15),transparent_38%)]" />

          <figure style={{ transform: `translateY(${midY}px)` }} className="float-soft absolute left-0 top-10 z-10 w-[52%] -rotate-[7deg] shadow-[0_28px_54px_rgba(16,14,12,0.2)]">
            <Image src="/images/project-web.svg" alt="desktop mockup" width={620} height={420} className="h-52 w-full rounded-2xl object-cover" priority />
          </figure>

          <figure style={{ transform: `translateY(${midY}px)` }} className="float-soft-delay absolute right-2 top-16 z-20 w-[48%] rotate-[6deg] scale-[0.98] shadow-[0_24px_48px_rgba(16,14,12,0.18)]">
            <Image src="/images/project-brand.svg" alt="brand board" width={560} height={440} className="h-56 w-full rounded-2xl object-cover" />
          </figure>

          <figure style={{ transform: `translateY(${fgY}px)` }} className="absolute left-[17%] top-[44%] z-30 w-[66%] rotate-[-2deg] shadow-[0_30px_60px_rgba(16,14,12,0.24)]">
            <Image src="/images/editorial-hero-board.svg" alt="ui card" width={920} height={620} className="h-56 w-full rounded-2xl object-cover" />
          </figure>

          <figure style={{ transform: `translateY(${fgY}px)` }} className="absolute bottom-8 right-6 z-40 w-[35%] rotate-[9deg] scale-[1.02] shadow-[0_22px_46px_rgba(16,14,12,0.2)]">
            <Image src="/images/project-ui.svg" alt="mobile mockup" width={460} height={320} className="h-40 w-full rounded-2xl object-cover" />
          </figure>

          <div style={{ transform: `translateY(${detailY}px)` }} className="absolute left-6 top-[58%] z-50 h-2 w-2 rounded-full bg-caramel" />
          <div style={{ transform: `translateY(${detailY}px)` }} className="absolute left-10 top-[59%] z-50 h-px w-20 bg-caramel/70" />
          <p style={{ transform: `translateY(${detailY}px)` }} className="absolute left-10 top-[61%] z-50 text-[10px] uppercase tracking-[0.2em] text-warm-700">Editorial Motion Layer</p>
        </div>
      </div>
    </section>
  );
}
