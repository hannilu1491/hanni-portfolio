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
    const t = setInterval(() => setIndex((v) => (v + 1) % safe.length), 6200);
    return () => clearInterval(t);
  }, [paused, safe.length]);

  const go = (n: number) => setIndex((n + safe.length) % safe.length);

  return (
    <section className="mx-auto my-20 w-full max-w-[1200px] px-4 md:px-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative rounded-[32px] bg-transparent p-2">
        <div className="mx-auto w-full max-w-[1080px] rounded-[30px] border border-[#d8cec3] bg-gradient-to-b from-[#a9adb4] to-[#8f949d] p-[10px] shadow-[0_26px_58px_rgba(41,33,25,0.18)]">
          <div className="rounded-[22px] border border-[#7f858f] bg-[#171a1f] p-[8px]">
            <div className="relative h-[56vw] max-h-[590px] min-h-[260px] overflow-hidden rounded-[14px] bg-[#f7f2ea]">
              {safe.map((src, i) => (
                <Image
                  key={src + i}
                  src={src}
                  alt={`MacBook showcase ${i + 1}`}
                  fill
                  className={`object-contain transition-all duration-700 ${i === index ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                />
              ))}
            </div>
          </div>
          <div className="mx-auto mt-2 h-[10px] w-[45%] rounded-b-[16px] bg-gradient-to-b from-[#8f949d] to-[#7b8088]" />
        </div>

        <button aria-label="Previous slide" className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full border border-[#E8DED2] bg-white/92 px-3 py-2 text-warm-800 shadow-sm md:left-5" onClick={() => go(index - 1)}>‹</button>
        <button aria-label="Next slide" className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full border border-[#E8DED2] bg-white/92 px-3 py-2 text-warm-800 shadow-sm md:right-5" onClick={() => go(index + 1)}>›</button>

        <div
          className="absolute inset-0"
          onTouchStart={(e) => (touchX.current = e.changedTouches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const diff = e.changedTouches[0].clientX - touchX.current;
            if (diff > 35) go(index - 1);
            if (diff < -35) go(index + 1);
            touchX.current = null;
          }}
        />

        <div className="mt-6 flex items-center justify-center gap-2">
          {safe.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-caramel' : 'w-1.5 bg-[#d8c7b3]'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
