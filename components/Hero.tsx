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

const mainVisual = '/images/projects/uiux-multimedia/uiux-pet-hotel-showcase.avif';

const MAIN_VISUAL = '/images/projects/uiux-multimedia/uiux-pet-hotel-showcase.avif';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 16,
        y: (e.clientY / window.innerHeight - 0.5) * 12
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const layer = useMemo(
    () => ({
      main: {
        transform: `translate3d(${mouse.x * 0.16}px, ${mouse.y * 0.16 - scrollY * 0.12}px, 0)`
      },
      cardA: {
        transform: `translate3d(${mouse.x * 0.34}px, ${mouse.y * 0.34 - scrollY * 0.22}px, 0)`
      },
      cardB: {
        transform: `translate3d(${mouse.x * 0.46}px, ${mouse.y * 0.46 - scrollY * 0.3}px, 0)`
      }
    }),
    [mouse, scrollY]
  );

  return (
    <section className="fade-in bg-[#fcfbf8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[45%_55%] md:items-center">
        <div className="space-y-7">
          <p className="text-[11px] uppercase tracking-[0.34em] text-caramel">UI/UX Designer · Visual Storyteller</p>
          <h1 className="font-serif text-6xl leading-[0.92] md:text-8xl">
            Hanni Lu<span className="text-gold">.</span>
          </h1>
          <p className="max-w-xl text-[1.05rem] leading-8 text-warm-700">
            Premium editorial digital experiences with calm visual rhythm and refined storytelling.
          </p>
          <div className="flex flex-wrap items-center gap-4 whitespace-nowrap">
            <Button href="/projects">View Projects 查看作品</Button>
            <Button href="/contact" variant="ghost">Contact Me 聯絡我</Button>
          </div>
        </div>

        <div className="relative h-[620px] overflow-hidden rounded-[36px] md:h-[680px]">
          <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.95),transparent_45%),radial-gradient(circle_at_80%_84%,rgba(216,199,178,0.45),transparent_50%)] blur-[1px]" />

          <div
            style={layer.main}
            className="absolute left-[9%] top-[14%] w-[82%] rounded-[28px] border border-[#e7ddd0] bg-white/70 p-3 shadow-[0_30px_64px_rgba(32,24,18,0.2)] backdrop-blur-[1px]"
          >
            <div className="relative h-[390px] overflow-hidden rounded-[20px] md:h-[430px]">
              <Image src={MAIN_VISUAL} alt="" fill className="object-cover" />
            </div>
          </div>

          <div
            style={layer.cardA}
            className="float-soft absolute right-[9%] top-[12%] w-[180px] rounded-2xl border border-[#eadfce] bg-white/88 p-4 shadow-soft"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-caramel">System</p>
            <p className="mt-2 font-serif text-xl text-warm-900">Brand System</p>
          </div>

          <div
            style={layer.cardB}
            className="float-soft-delay absolute bottom-[12%] left-[7%] w-[170px] rounded-2xl border border-[#eadfce] bg-white/88 p-4 shadow-soft"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-caramel">Interface</p>
            <p className="mt-2 font-serif text-xl text-warm-900">UI Detail</p>
          </div>
        </div>
      </div>
    </div></section>
  );
}
