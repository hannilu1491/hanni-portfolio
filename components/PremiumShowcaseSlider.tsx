'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function PremiumShowcaseSlider({ images, frame = 'desktop' }: { images: string[]; frame?: 'desktop' | 'mobile' | 'browser' | 'macbook' }) {
  const safe = images.length ? images : ['/images/projects/uiux-multimedia/uiux-pet-hotel-official-website.avif'];
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const dragX = useRef<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => setIndex((v) => (v + 1) % safe.length), 3500);
    return () => clearInterval(t);
  }, [safe.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoom === null) return;
      if (e.key === 'Escape') setZoom(null);
      if (e.key === 'ArrowRight') setZoom((v) => (v === null ? 0 : (v + 1) % safe.length));
      if (e.key === 'ArrowLeft') setZoom((v) => (v === null ? 0 : (v - 1 + safe.length) % safe.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom, safe.length]);

  const boxClass = frame === 'mobile' ? 'mx-auto w-[280px] rounded-[2rem] border-8 border-black/90 bg-black p-2' : frame === 'browser' ? 'rounded-2xl border border-warm-300 bg-white p-2' : frame === 'macbook' ? 'rounded-[1.7rem] border border-warm-300 bg-[#111] p-3 pb-8' : 'rounded-2xl border border-warm-300 bg-[#111] p-3';

  return (
    <>
      <div
        className="group cursor-grab"
        onMouseDown={(e) => (dragX.current = e.clientX)}
        onMouseUp={(e) => {
          if (dragX.current === null) return;
          const diff = e.clientX - dragX.current;
          if (diff > 35) setIndex((v) => (v - 1 + safe.length) % safe.length);
          if (diff < -35) setIndex((v) => (v + 1) % safe.length);
          dragX.current = null;
        }}
        onTouchStart={(e) => (touchX.current = e.changedTouches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const diff = e.changedTouches[0].clientX - touchX.current;
          if (diff > 35) setIndex((v) => (v - 1 + safe.length) % safe.length);
          if (diff < -35) setIndex((v) => (v + 1) % safe.length);
          touchX.current = null;
        }}
      >
        <div className={boxClass}>
          <button className="relative block h-[420px] w-full overflow-hidden rounded-xl" onClick={() => setZoom(index)}>
            {safe.map((src, i) => (
              <Image
                key={src + i}
                src={src}
                alt={`${frame} mockup ${i + 1}`}
                fill
                className={`object-cover transition-all duration-700 ${i === index ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-5 opacity-0'}`}
              />
            ))}
          </button>
        </div>
      </div>

      {zoom !== null && (
        <div className="fixed inset-0 z-[120] bg-black/85" onClick={() => setZoom(null)}>
          <div className="relative mx-auto mt-[5vh] h-[90vh] w-[92vw] max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={safe[zoom]} alt="fullscreen" fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
