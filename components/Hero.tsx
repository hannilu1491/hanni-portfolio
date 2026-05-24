'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [heroSrc, setHeroSrc] = useState('/images/hero/homepage-hero-banner.jpg');

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMove = (e: MouseEvent) => setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 14, y: (e.clientY / window.innerHeight - 0.5) * 10 });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const depth = (factor: number) => ({ transform: `translate3d(${mouse.x * factor}px, ${(mouse.y - scrollY * factor * 0.12)}px,0)` });

  return (
    <section className="fade-in bg-[#fcfbf8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[45%_55%] md:items-center">
        <div className="space-y-7">
          <p className="text-[11px] uppercase tracking-[0.34em] text-caramel">UI/UX Designer · Visual Storyteller</p>
          <h1 className="font-serif text-6xl leading-[0.92] md:text-8xl">Hanni Lu<span className="text-gold">.</span></h1>
          <p className="max-w-xl text-[1.05rem] leading-8 text-warm-700">Premium editorial digital experiences, crafted with visual rhythm, strategic clarity, and tactile atmosphere.</p>
          <p className="max-w-xl text-[0.98rem] leading-8 tracking-[0.01em] text-warm-700">以品牌敘事與介面語言結合，打造具層次、有空氣感、並可直接提案展示的作品集體驗。</p>
          <div className="flex flex-wrap items-center gap-4"><Button href="/projects">View Projects 查看作品</Button><Button href="/contact" variant="ghost">Contact Me 聯絡我</Button></div>
        </div>

        <div className="relative h-[680px] overflow-hidden">
          <div style={depth(0.1)} className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.95),transparent_50%),radial-gradient(circle_at_88%_80%,rgba(164,132,88,0.2),transparent_42%)]" />
          <div style={depth(0.1)} className="absolute inset-6 rounded-[34px] border border-warm-200/60 bg-white/20 opacity-40" />

          <figure style={depth(0.3)} className="absolute left-2 top-10 w-[62%] rotate-[-6deg] overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(12,10,8,0.24)]">
            <Image src={heroSrc} alt="desktop mockup" width={980} height={720} className="h-72 w-full object-cover" onError={() => setHeroSrc('/images/projects/uiux-multimedia/uiux-pet-hotel-showcase.avif')} />
          </figure>
          <figure style={depth(0.5)} className="absolute right-3 top-16 w-[38%] rotate-[8deg] overflow-hidden rounded-2xl shadow-[0_24px_56px_rgba(12,10,8,0.22)]">
            <Image src="/images/projects/ecommerce-social/ecommerce-product-detail-thermos.avif" alt="mobile mockup" width={560} height={760} className="h-80 w-full object-cover" />
          </figure>
          <figure style={depth(0.7)} className="float-soft absolute left-[14%] top-[48%] w-[54%] rotate-[-2deg] overflow-hidden rounded-2xl border border-white/50 shadow-[0_20px_46px_rgba(12,10,8,0.2)]">
            <Image src="/images/projects/brand-identity/brand-identity-corner-98-real-estate.avif" alt="editorial collage" width={920} height={620} className="h-56 w-full object-cover" />
          </figure>
          <div style={depth(0.7)} className="float-soft-delay absolute right-[8%] top-[58%] rounded-2xl bg-white/85 px-4 py-3 shadow-soft backdrop-blur">
            <p className="text-[10px] uppercase tracking-[0.26em] text-caramel">Typography Detail</p>
            <p className="mt-1 font-serif text-xl">Editorial Grid</p>
          </div>
        </div>
      </div>
    </section>
  );
}
