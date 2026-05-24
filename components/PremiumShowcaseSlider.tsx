'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function PremiumShowcaseSlider({ images }: { images: string[] }) {
  const safe = images.length ? images.slice(0, 5) : ['/images/projects/uiux-multimedia/uiux-pet-hotel-official-website.avif'];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((v) => (v + 1) % safe.length), 5200);
    return () => clearInterval(t);
  }, [paused, safe.length]);

  const go = (n: number) => setIndex((n + safe.length) % safe.length);

  return (
    <section className="mx-auto w-full max-w-6xl px-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div
        className="relative overflow-hidden rounded-[2rem] border border-warm-300 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-3 pb-10"
        onTouchStart={(e) => (touchX.current = e.changedTouches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const diff = e.changedTouches[0].clientX - touchX.current;
          if (diff > 35) go(index - 1);
          if (diff < -35) go(index + 1);
          touchX.current = null;
        }}
      >
        <div className="mb-3 flex items-center gap-2 px-2"><span className="h-2 w-2 rounded-full bg-[#ff5f56]" /><span className="h-2 w-2 rounded-full bg-[#ffbd2e]" /><span className="h-2 w-2 rounded-full bg-[#27c93f]" /></div>
        <div className="relative h-[56vw] max-h-[520px] min-h-[280px] overflow-hidden rounded-xl bg-[#101010]">
          {safe.map((src, i) => (
            <Image key={src + i} src={src} alt={`Main showcase ${i + 1}`} fill className={`object-contain transition-all duration-700 ${i === index ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-4 opacity-0'}`} />
          ))}
        </div>

        <button aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/35 px-3 py-2 text-white" onClick={() => go(index - 1)}>‹</button>
        <button aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/35 px-3 py-2 text-white" onClick={() => go(index + 1)}>›</button>

        <div className="mt-4 flex items-center justify-center gap-2">
          {safe.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-2.5 rounded-full transition-all ${i === index ? 'w-7 bg-caramel' : 'w-2.5 bg-white/45'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
