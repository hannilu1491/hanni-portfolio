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
      <style jsx>{`
        .hero-banner-float {
          animation: slowFloat 8s ease-in-out infinite alternate;
        }
        @keyframes slowFloat {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -8px, 0); }
        }
      `}</style>
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-12 transition-all duration-700 ease-out md:grid-cols-[38%_62%] md:pb-20 md:pt-16 ${
          ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="space-y-8 md:pr-6">
          <p
            className={`text-[11px] uppercase tracking-[0.34em] text-[#c8a46a] transition-all duration-700 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "0s" }}
          >
            UI/UX DESIGNER · VISUAL STORYTELLER
          </p>

          <h1
            className={`font-serif text-[56px] leading-[0.92] tracking-[-0.034em] text-[#151515] transition-all duration-700 md:text-[94px] lg:text-[108px] ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "0.12s" }}
          >
            Hanni Lu<span className="text-[#c8a46a]">.</span>
          </h1>

          <p
            className={`max-w-md text-[15px] leading-8 text-[#4d4d4d] transition-all duration-700 md:text-base ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "0.24s" }}
          >
            Premium digital experiences crafted with refined visual rhythm and editorial storytelling.
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "0.36s" }}
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
          className={`hero-banner-float relative h-[620px] transition-all duration-[900ms] ${
            ready ? "translate-y-0 scale-100 opacity-100" : "translate-y-7 scale-[0.98] opacity-0"
          }`}
          style={{ transitionDelay: "0.42s" }}
        >
          <div
            className="relative -right-[4vw] h-full w-[calc(100%+4vw)] overflow-hidden rounded-[40px] bg-[#f5efe7] shadow-[0_44px_110px_rgba(30,24,18,0.16),0_0_70px_rgba(230,214,193,0.45)]"
          >
            <FallbackImage
              src={imageSrc}
              alt=""
              width={1500}
              height={1240}
              priority
              className="h-full w-full object-cover transition duration-[900ms] hover:scale-[1.025]"
              onError={() => {
                if (imageSrc !== fallbackHeroImage) {
                  setImageSrc(fallbackHeroImage);
                }
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#efe3d1] via-transparent to-[#e7d8c5] opacity-10" />
            <div className="hero-motion-layer pointer-events-none absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
