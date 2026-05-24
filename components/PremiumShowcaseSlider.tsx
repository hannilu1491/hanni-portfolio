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
    const t = setInterval(() => setIndex((v) => (v + 1) % safe.length), 5600);
    return () => clearInterval(t);
  }, [paused, safe.length]);

  const go = (n: number) => setIndex((n + safe.length) % safe.length);

  return (
    <section className="mx-auto my-20 w-full max-w-[1100px] px-4 md:px-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div
        className="relative overflow-hidden rounded-[24px] border border-[#E8DED2] bg-[#fcfbf8] p-4 shadow-[0_18px_40px_rgba(35,25,15,0.08)]"
        onTouchStart={(e) => (touchX.current = e.changedTouches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const diff = e.changedTouches[0].clientX - touchX.current;
          if (diff > 35) go(index - 1);
          if (diff < -35) go(index + 1);
          touchX.current = null;
        }}
      >
        <div className="relative h-[58vw] max-h-[620px] min-h-[260px] overflow-hidden rounded-[18px] bg-[#f7f2ea]">
          {safe.map((src, i) => (
            <Image
              key={src + i}
              src={src}
              alt={`Main showcase ${i + 1}`}
              fill
              className={`object-contain transition-all duration-700 ${i === index ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-4 opacity-0'}`}
            />
          ))}
        </div>

        <button aria-label="Previous slide" className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-[#E8DED2] bg-white/90 px-3 py-2 text-warm-800 shadow-sm" onClick={() => go(index - 1)}>‹</button>
        <button aria-label="Next slide" className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-[#E8DED2] bg-white/90 px-3 py-2 text-warm-800 shadow-sm" onClick={() => go(index + 1)}>›</button>

        <div className="mt-4 flex items-center justify-center gap-2">
          {safe.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-caramel' : 'w-2 bg-[#d8c7b3]'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
