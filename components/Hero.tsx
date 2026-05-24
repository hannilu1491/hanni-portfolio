'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import Button from './Button';
import { heroAssets, HeroAssetItem } from '@/data/hero-assets';

function useAssetSource(asset?: HeroAssetItem) {
  const fallback = '/images/projects/uiux-multimedia/uiux-pet-hotel-showcase.avif';
  const [src, setSrc] = useState(asset?.src || fallback);

  useEffect(() => {
    setSrc(asset?.src || fallback);
  }, [asset?.src]);

  return {
    src,
    onError: () => setSrc(asset?.fallback || fallback)
  };
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMove = (e: MouseEvent) => setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 16, y: (e.clientY / window.innerHeight - 0.5) * 12 });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const safeAssets = heroAssets.filter(Boolean).filter((asset) => asset?.src);
  const byKind = (kind: HeroAssetItem['kind'], idx = 0) => safeAssets.filter((a) => a.kind === kind)[idx];

  const bg = byKind('background');
  const frame = byKind('browser-frame');
  const uiMain = byKind('ui-main');
  const uiSecond = byKind('ui-secondary');
  const float1 = byKind('floating-card', 0);
  const float2 = byKind('floating-card', 1);
  const nature1 = byKind('nature', 0);
  const nature2 = byKind('nature', 1);
  const foreground = byKind('foreground');

  const bgSrc = useAssetSource(bg);
  const frameSrc = useAssetSource(frame);
  const mainSrc = useAssetSource(uiMain);
  const secondSrc = useAssetSource(uiSecond);
  const f1 = useAssetSource(float1);
  const f2 = useAssetSource(float2);
  const n1 = useAssetSource(nature1);
  const n2 = useAssetSource(nature2);
  const fg = useAssetSource(foreground);

  const layer = useMemo(() => ({
    bg: { transform: `translate3d(${mouse.x * 0.08}px, ${mouse.y * 0.08 - scrollY * 0.08}px,0)` },
    main: { transform: `translate3d(${mouse.x * 0.18}px, ${mouse.y * 0.18 - scrollY * 0.18}px,0)` },
    floatA: { transform: `translate3d(${mouse.x * 0.35}px, ${mouse.y * 0.35 - scrollY * 0.35}px,0)` },
    floatB: { transform: `translate3d(${mouse.x * 0.55}px, ${mouse.y * 0.55 - scrollY * 0.55}px,0)` },
    front: { transform: `translate3d(${mouse.x * 0.65}px, ${mouse.y * 0.65 - scrollY * 0.65}px,0)` }
  }), [mouse, scrollY]);

  return (
    <section className="fade-in bg-[#fcfbf8]"><div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[45%_55%] md:items-center">
      <div className="space-y-7"><p className="text-[11px] uppercase tracking-[0.34em] text-caramel">UI/UX Designer · Visual Storyteller</p><h1 className="font-serif text-6xl leading-[0.92] md:text-8xl">Hanni Lu<span className="text-gold">.</span></h1><p className="max-w-xl text-[1.05rem] leading-8 text-warm-700">Premium editorial digital experiences with natural atmosphere and refined visual storytelling.</p><div className="flex flex-wrap items-center gap-4"><Button href="/projects">View Projects 查看作品</Button><Button href="/contact" variant="ghost">Contact Me 聯絡我</Button></div></div>
      <div className="relative h-[660px] overflow-hidden rounded-[36px] md:h-[700px]">
        {bg?.src && <div style={layer.bg} className="absolute inset-0"><Image src={bgSrc.src} alt={bg.alt || ''} fill className="object-cover" onError={bgSrc.onError} /></div>}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f3ece2]/70 via-white/10 to-transparent" />
        {uiMain?.src && <div style={layer.main} className="absolute left-[9%] top-[17%] w-[82%] rounded-[26px] border border-white/60 bg-white/45 p-3 shadow-[0_26px_52px_rgba(30,20,10,0.2)] backdrop-blur-[2px]"><div className="relative h-[390px] overflow-hidden rounded-[18px] border border-[#d8cec3] bg-[#fcfbf8] md:h-[420px]"><Image src={mainSrc.src} alt={uiMain.alt || ''} fill className="object-cover" onError={mainSrc.onError} />{frame?.src && <Image src={frameSrc.src} alt={frame.alt || ''} fill className="pointer-events-none object-contain" onError={frameSrc.onError} />}</div></div>}
        {uiSecond?.src && <div style={layer.floatA} className="absolute bottom-[11%] right-[8%] hidden w-[34%] rounded-2xl border border-white/60 bg-white/70 p-2 shadow-soft md:block"><div className="relative h-28 overflow-hidden rounded-xl"><Image src={secondSrc.src} alt={uiSecond.alt || ''} fill className="object-cover" onError={secondSrc.onError} /></div></div>}
        {float1?.src && <div style={layer.floatA} className="float-soft absolute right-[9%] top-[14%] h-28 w-24 overflow-hidden rounded-2xl shadow-soft"><Image src={f1.src} alt={float1.alt || ''} fill className="object-cover" onError={f1.onError} /></div>}
        {float2?.src && <div style={layer.floatB} className="float-soft-delay absolute left-[6%] top-[64%] h-20 w-32 overflow-hidden rounded-xl shadow-soft"><Image src={f2.src} alt={float2.alt || ''} fill className="object-cover" onError={f2.onError} /></div>}
        {nature1?.src && <div style={layer.floatA} className="absolute right-[27%] top-[72%] h-16 w-16 overflow-hidden rounded-full shadow-soft"><Image src={n1.src} alt={nature1.alt || ''} fill className="object-cover" onError={n1.onError} /></div>}
        {nature2?.src && <div style={layer.floatB} className="absolute left-[3%] top-[26%] h-20 w-20 overflow-hidden rounded-full shadow-soft"><Image src={n2.src} alt={nature2.alt || ''} fill className="object-cover" onError={n2.onError} /></div>}
        {foreground?.src && <div style={layer.front} className="absolute bottom-0 left-0 h-40 w-full opacity-70"><Image src={fg.src} alt={foreground.alt || ''} fill className="object-cover" onError={fg.onError} /></div>}
      </div>
    </div></section>
  );
}
