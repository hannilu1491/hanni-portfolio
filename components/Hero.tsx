'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(Math.min(window.scrollY, 320));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="fade-in border-b border-warm-200/70 bg-[#fcfbf8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-14 pt-12 md:grid-cols-[0.88fr_1.12fr] md:items-center md:pt-16">
        <div className="space-y-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-caramel">UI/UX Designer & Visual Storyteller</p>
          <h1 className="font-serif text-6xl leading-[0.88] md:text-8xl">Hanni Lu<span className="text-gold">.</span></h1>
          <p className="max-w-md text-lg leading-relaxed text-warm-700">I design premium digital products and brand experiences with editorial rhythm, strategic clarity, and refined visual storytelling.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" variant="ghost">Contact Me</Button>
          </div>
        </div>

        <div className="relative h-[560px] overflow-hidden rounded-[30px] border border-warm-200 bg-[#f4efe7] p-5 shadow-soft">
          <div style={{ transform: `translateY(${-y * 0.15}px)` }} className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_22%_15%,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_80%_82%,rgba(154,106,68,0.24),transparent_36%)]" />

          <figure style={{ transform: `translateY(${-y * 0.3}px)` }} className="float-soft absolute -left-2 top-7 w-[56%] -rotate-6 rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_22px_48px_rgba(20,18,15,0.2)]">
            <Image src="/images/project-web.svg" alt="Website screenshot mockup" width={600} height={400} className="h-48 w-full rounded-xl object-cover" priority />
          </figure>
          <figure style={{ transform: `translateY(${-y * 0.3}px)` }} className="float-soft-delay absolute right-3 top-5 z-10 w-[52%] rotate-3 rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_18px_40px_rgba(20,18,15,0.18)]">
            <Image src="/images/project-brand.svg" alt="Branding board mockup" width={540} height={430} className="h-60 w-full rounded-xl object-cover" />
          </figure>

          <figure style={{ transform: `translateY(${-y * 0.5}px)` }} className="absolute left-[18%] top-[45%] z-20 w-[66%] rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_26px_54px_rgba(20,18,15,0.24)]">
            <Image src="/images/editorial-hero-board.svg" alt="Editorial portfolio board" width={900} height={620} className="h-56 w-full rounded-xl object-cover" />
          </figure>
          <figure style={{ transform: `translateY(${-y * 0.5}px)` }} className="absolute -bottom-1 right-8 z-30 w-[38%] rotate-[8deg] rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_20px_40px_rgba(20,18,15,0.18)]">
            <Image src="/images/project-ui.svg" alt="Mobile UI mockup" width={460} height={320} className="h-36 w-full rounded-xl object-cover" />
          </figure>

          <div style={{ transform: `translateY(${-y * 0.65}px)` }} className="absolute bottom-10 left-8 z-40 rounded-full bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-warm-700 shadow">
            Featured Composition
          </div>
        </div>
      </div>
    </section>
  );
}
