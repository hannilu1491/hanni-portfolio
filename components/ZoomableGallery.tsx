'use client';

import FallbackImage from './FallbackImage';
import { useEffect, useRef, useState } from 'react';

export default function ZoomableGallery({ images, masonry = false }: { images: string[]; masonry?: boolean }) {
  const [index, setIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);
  const next = () => setIndex((v) => (v === null ? 0 : (v + 1) % images.length));
  const prev = () => setIndex((v) => (v === null ? 0 : (v - 1 + images.length) % images.length));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, images.length]);

  return (
    <>
      <div className={masonry ? 'columns-1 gap-4 space-y-4 md:columns-2 xl:columns-3' : 'grid gap-4 md:grid-cols-2'}>
        {images.map((src, i) => (
          <button key={src + i} onClick={() => open(i)} className="group relative block w-full overflow-hidden rounded-2xl text-left">
            <div className={`relative ${masonry ? 'mb-4 h-auto min-h-[280px]' : 'h-[420px]'}`}>
              <FallbackImage src={src} alt={`Project image ${i + 1}`} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" />
            </div>
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 transition-opacity duration-300"
          onClick={close}
          onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const diff = e.changedTouches[0].clientX - touchStartX.current;
            if (diff > 40) prev();
            if (diff < -40) next();
            touchStartX.current = null;
          }}
        >
          <button className="absolute right-6 top-6 text-white/90" onClick={close}>✕</button>
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-white/80" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <div className="relative h-[82vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <FallbackImage src={images[index]} alt={`Fullscreen image ${index + 1}`} fill className="object-contain transition duration-300" />
          </div>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl text-white/80" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
        </div>
      )}
    </>
  );
}
