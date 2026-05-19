'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="fade-in border-b border-warm-200/70 bg-[#fcfbf8]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-12 pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:pb-14 md:pt-14">
        <div className="space-y-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-caramel">UI/UX Designer · Visual Storyteller</p>
          <h1 className="font-serif text-6xl leading-[0.88] md:text-8xl">Hanni Lu<span className="text-gold">.</span></h1>
          <p className="max-w-md text-lg leading-relaxed text-warm-700">I design premium digital products and brand experiences with editorial rhythm, strategic clarity, and refined visual storytelling.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" variant="ghost">Contact Me</Button>
          </div>
        </div>

        <div className="relative h-[560px] overflow-hidden rounded-[30px] border border-warm-200 bg-[#f3eee5] p-5 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.95),transparent_36%),radial-gradient(circle_at_80%_80%,rgba(154,106,68,0.25),transparent_35%)]" />
          <div className="relative h-full">
            <figure style={{ transform: `translateY(${y * 0.06}px)` }} className="absolute -left-3 top-4 w-[58%] -rotate-6 rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_24px_48px_rgba(20,18,15,0.2)] transition-transform duration-100">
              <Image src="/images/project-web.svg" alt="Website screenshot mockup" width={600} height={400} className="h-48 w-full rounded-xl object-cover" priority />
            </figure>
            <figure style={{ transform: `translateY(${y * 0.035}px)` }} className="absolute right-3 top-3 z-10 w-[52%] rotate-3 rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_18px_40px_rgba(20,18,15,0.18)] transition-transform duration-100">
              <Image src="/images/project-brand.svg" alt="Branding board mockup" width={540} height={430} className="h-60 w-full rounded-xl object-cover" />
            </figure>
            <figure style={{ transform: `translateY(${y * 0.02}px)` }} className="absolute left-[18%] top-[45%] z-20 w-[66%] rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_28px_55px_rgba(20,18,15,0.24)] transition-transform duration-100">
              <Image src="/images/editorial-hero-board.svg" alt="Editorial portfolio board" width={900} height={620} className="h-56 w-full rounded-xl object-cover" />
            </figure>
            <figure style={{ transform: `translateY(${y * 0.08}px)` }} className="absolute -bottom-1 right-8 z-30 w-[38%] rotate-[8deg] rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_20px_40px_rgba(20,18,15,0.18)] transition-transform duration-100">
              <Image src="/images/project-ui.svg" alt="Mobile UI mockup" width={460} height={320} className="h-36 w-full rounded-xl object-cover" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
