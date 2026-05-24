'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import Button from './Button';
import { heroAssets, HeroAssetItem } from '@/data/hero-assets';

type Asset = HeroAssetItem;

function useAssetSource(asset?: Asset) {
  const fallback = '/images/hero/parallax/hero-main-browser-board.png';
  const [src, setSrc] = useState(asset?.src || asset?.fallback || fallback);

  useEffect(() => {
    setSrc(asset?.src || asset?.fallback || fallback);
  }, [asset?.src, asset?.fallback]);

  return {
    src,
    hide: !asset?.src,
    onError: () => setSrc(asset?.fallback || '')
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

  const safeHeroAssets = heroAssets.filter((asset): asset is Asset => Boolean(asset && asset.src));
  const byKind = (kind: Asset['kind'], idx = 0) => safeHeroAssets.filter((a) => a.kind === kind)[idx];

  const bg = byKind('background');
  const frame = byKind('browser-frame');
  const uiMain = byKind('ui-main');
  const uiSecond = byKind('ui-secondary');
  const float1 = byKind('floating-card', 0);
  const foreground = byKind('foreground');

  const bgSrc = useAssetSource(bg);
  const frameSrc = useAssetSource(frame);
  const mainSrc = useAssetSource(uiMain);
  const secondSrc = useAssetSource(uiSecond);
  const f1 = useAssetSource(float1);
  const fg = useAssetSource(foreground);

  const layer = useMemo(() => ({
    bg: { transform: `translate3d(${mouse.x * 0.08}px, ${mouse.y * 0.08 - scrollY * 0.08}px,0)` },
    main: { transform: `translate3d(${mouse.x * 0.18}px, ${mouse.y * 0.18 - scrollY * 0.18}px,0)` },
    floatA: { transform: `translate3d(${mouse.x * 0.4}px, ${mouse.y * 0.4 - scrollY * 0.4}px,0)` },
    front: { transform: `translate3d(${mouse.x * 0.7}px, ${mouse.y * 0.7 - scrollY * 0.7}px,0)` }
  }), [mouse, scrollY]);

  return (
    <section className="fade-in bg-[#fcfbf8]"><div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[45%_55%] md:items-center">
      <div className="space-y-7"><p className="text-[11px] uppercase tracking-[0.34em] text-caramel">UI/UX Designer · Visual Storyteller</p><h1 className="font-serif text-6xl leading-[0.92] md:text-8xl">Hanni Lu<span className="text-gold">.</span></h1><p className="max-w-xl text-[1.05rem] leading-8 text-warm-700">Premium editorial digital experiences with natural atmosphere and refined visual storytelling.</p><div className="flex flex-wrap items-center gap-4 whitespace-nowrap"><Button href="/projects">View Projects 查看作品</Button><Button href="/contact" variant="ghost">Contact Me 聯絡我</Button></div></div>
      <div className="relative h-[620px] overflow-hidden rounded-[36px] md:h-[680px]">
        {!bgSrc.hide && bgSrc.src && <div style={layer.bg} className="absolute inset-0"><Image src={bgSrc.src} alt="" fill className="object-cover" onError={bgSrc.onError} /></div>}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f3ece2]/70 via-white/10 to-transparent" />
        {!mainSrc.hide && mainSrc.src && <div style={layer.main} className="absolute left-[10%] top-[18%] w-[80%] rounded-[26px] border border-white/60 bg-white/45 p-3 shadow-[0_26px_52px_rgba(30,20,10,0.2)] backdrop-blur-[2px]"><div className="relative h-[360px] overflow-hidden rounded-[18px] border border-[#d8cec3] bg-[#fcfbf8] md:h-[400px]"><Image src={mainSrc.src} alt="" fill className="object-cover" onError={mainSrc.onError} />{!frameSrc.hide && frameSrc.src && <Image src={frameSrc.src} alt="" fill className="pointer-events-none object-contain" onError={frameSrc.onError} />}</div></div>}
        {!secondSrc.hide && secondSrc.src && <div style={layer.floatA} className="absolute bottom-[12%] right-[8%] hidden w-[32%] rounded-2xl border border-white/60 bg-white/72 p-2 shadow-soft md:block"><div className="relative h-24 overflow-hidden rounded-xl"><Image src={secondSrc.src} alt="" fill className="object-cover" onError={secondSrc.onError} /></div></div>}
        {!f1.hide && f1.src && <div style={layer.floatA} className="float-soft absolute right-[10%] top-[16%] h-24 w-20 overflow-hidden rounded-2xl shadow-soft"><Image src={f1.src} alt="" fill className="object-cover" onError={f1.onError} /></div>}
        {!fg.hide && fg.src && <div style={layer.front} className="absolute bottom-0 left-0 h-36 w-full opacity-65"><Image src={fg.src} alt="" fill className="object-cover" onError={fg.onError} /></div>}
      </div>
    </div></section>
  );
}
