'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import Button from './Button';
import { heroAssets } from '@/data/hero-assets';

type Asset = { src: string; fallback: string; alt: string };

function useAssetSource(asset: Asset) {
  const [src, setSrc] = useState(asset.src);
  return { src, onError: () => setSrc(asset.fallback) };
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const bg = useAssetSource(heroAssets.background);
  const frame = useAssetSource(heroAssets.browserFrame);
  const screen1 = useAssetSource(heroAssets.screens[0]);
  const screen2 = useAssetSource(heroAssets.screens[1]);
  const fg = useAssetSource(heroAssets.foreground);
  const floating0 = useAssetSource(heroAssets.floating[0]);
  const floating1 = useAssetSource(heroAssets.floating[1]);
  const floating2 = useAssetSource(heroAssets.floating[2]);
  const floating3 = useAssetSource(heroAssets.floating[3]);
  const floating4 = useAssetSource(heroAssets.floating[4]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMove = (e: MouseEvent) => setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 14 });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const layerStyle = useMemo(
    () => ({
      bg: { transform: `translate3d(${mouse.x * 0.08}px, ${mouse.y * 0.08 - scrollY * 0.08}px, 0)` },
      card: { transform: `translate3d(${mouse.x * 0.18}px, ${mouse.y * 0.18 - scrollY * 0.18}px, 0)` },
      float: { transform: `translate3d(${mouse.x * 0.35}px, ${mouse.y * 0.35 - scrollY * 0.35}px, 0)` },
      front: { transform: `translate3d(${mouse.x * 0.55}px, ${mouse.y * 0.55 - scrollY * 0.55}px, 0)` }
    }),
    [mouse, scrollY]
  );

  return (
    <section className="fade-in bg-[#fcfbf8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[45%_55%] md:items-center">
        <div className="space-y-7">
          <p className="text-[11px] uppercase tracking-[0.34em] text-caramel">UI/UX Designer · Visual Storyteller</p>
          <h1 className="font-serif text-6xl leading-[0.92] md:text-8xl">Hanni Lu<span className="text-gold">.</span></h1>
          <p className="max-w-xl text-[1.05rem] leading-8 text-warm-700">Premium editorial digital experiences with natural atmosphere and refined visual storytelling.</p>
          <div className="flex flex-wrap items-center gap-4"><Button href="/projects">View Projects 查看作品</Button><Button href="/contact" variant="ghost">Contact Me 聯絡我</Button></div>
        </div>

        <div className="relative h-[700px] overflow-hidden rounded-[36px]">
          <div style={layerStyle.bg} className="absolute inset-0"><Image src={bg.src} alt={heroAssets.background.alt} fill className="object-cover" onError={bg.onError} /></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f3ece2]/70 via-white/10 to-transparent" />

          <div style={layerStyle.card} className="absolute left-[8%] top-[16%] w-[84%] rounded-[26px] border border-white/60 bg-white/45 p-3 shadow-[0_30px_60px_rgba(30,20,10,0.22)] backdrop-blur-[2px]">
            <div className="relative h-[420px] overflow-hidden rounded-[18px] border border-[#d8cec3] bg-[#fcfbf8]">
              <Image src={screen1.src} alt={heroAssets.screens[0].alt} fill className="object-cover" onError={screen1.onError} />
              <Image src={frame.src} alt={heroAssets.browserFrame.alt} fill className="pointer-events-none object-contain" onError={frame.onError} />
            </div>
          </div>

          <div style={layerStyle.float} className="float-soft absolute right-[7%] top-[10%] h-28 w-28 overflow-hidden rounded-full shadow-soft"><Image src={floating0.src} alt={heroAssets.floating[0].alt} fill className="object-cover" onError={floating0.onError} /></div>
          <div style={layerStyle.float} className="float-soft-delay absolute left-[2%] top-[58%] h-24 w-24 overflow-hidden rounded-full shadow-soft"><Image src={floating1.src} alt={heroAssets.floating[1].alt} fill className="object-cover" onError={floating1.onError} /></div>
          <div style={layerStyle.float} className="absolute right-[12%] top-[56%] h-36 w-28 overflow-hidden rounded-2xl shadow-soft"><Image src={floating2.src} alt={heroAssets.floating[2].alt} fill className="object-cover" onError={floating2.onError} /></div>
          <div style={layerStyle.float} className="absolute left-[14%] top-[72%] h-24 w-40 overflow-hidden rounded-2xl shadow-soft"><Image src={floating3.src} alt={heroAssets.floating[3].alt} fill className="object-cover" onError={floating3.onError} /></div>
          <div style={layerStyle.float} className="absolute right-[28%] top-[70%] h-20 w-28 overflow-hidden rounded-xl shadow-soft"><Image src={floating4.src} alt={heroAssets.floating[4].alt} fill className="object-cover" onError={floating4.onError} /></div>

          <div style={layerStyle.front} className="absolute bottom-0 left-0 h-44 w-full opacity-75"><Image src={fg.src} alt={heroAssets.foreground.alt} fill className="object-cover" onError={fg.onError} /></div>
          <div style={layerStyle.card} className="absolute bottom-[10%] right-[8%] w-[36%] rounded-2xl border border-white/60 bg-white/70 p-2 shadow-soft md:block">
            <div className="relative h-28 overflow-hidden rounded-xl"><Image src={screen2.src} alt={heroAssets.screens[1].alt} fill className="object-cover" onError={screen2.onError} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
