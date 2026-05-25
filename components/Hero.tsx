"use client";

import FallbackImage from "./FallbackImage";
import Link from "next/link";
import { useEffect, useState } from "react";

const primaryHeroImage = "/images/projects/uiux-multimedia/uiux-multimedia-hero-banner.jpg";
const fallbackHeroImage = "/images/hero/homepage-hero-banner.jpg";

export default function Hero() {
  const [imageSrc, setImageSrc] = useState(primaryHeroImage);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="fade-in bg-[#fcfbf8]">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-12 transition-all duration-700 ease-out md:grid-cols-[40%_60%] md:pb-20 md:pt-16 ${
          ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="space-y-8 md:pr-6">
          <p
            className={`text-[11px] uppercase tracking-[0.34em] text-[#c8a46a] transition-all duration-700 delay-75 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            UI/UX DESIGNER · VISUAL STORYTELLER
          </p>

          <h1
            className={`font-serif text-[56px] leading-[0.94] tracking-[-0.032em] text-[#151515] transition-all duration-700 delay-100 md:text-[88px] lg:text-[100px] ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Hanni Lu<span className="text-[#c8a46a]">.</span>
          </h1>

          <p
            className={`max-w-md text-[15px] leading-8 text-[#4d4d4d] transition-all duration-700 delay-150 md:text-base ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Premium digital experiences crafted with refined visual rhythm and editorial storytelling.
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-200 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <Link
              href="/projects"
              className="whitespace-nowrap rounded-full bg-[#151515] px-7 py-3 text-sm text-white shadow-[0_16px_30px_rgba(21,21,21,0.16)] transition hover:-translate-y-0.5"
            >
              View Projects 查看作品
            </Link>
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full border border-[#e9dfd2] bg-white px-7 py-3 text-sm text-[#151515] shadow-sm transition hover:-translate-y-0.5"
            >
              Contact Me 聯絡我
            </Link>
          </div>
        </div>

        <div
          className={`relative h-[560px] transition-all duration-700 delay-300 ${
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div
            className={`relative h-full w-full overflow-hidden rounded-[36px] border border-[#efe5d9] bg-white shadow-[0_38px_90px_rgba(20,18,15,0.2)] transition-all duration-700 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <FallbackImage
              src={imageSrc}
              alt=""
              width={1280}
              height={1120}
              priority
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
              onError={() => {
                if (imageSrc !== fallbackHeroImage) {
                  setImageSrc(fallbackHeroImage);
                }
              }}
            />
            <div className="hero-motion-layer pointer-events-none absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
