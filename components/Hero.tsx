"use client";

import FallbackImage from "./FallbackImage";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroCloudBg = "/images/hero/hero-cloud-bg.png";
const heroIsland = "/images/hero/hero-floating-island.png";
const fallbackHeroImage = "/images/hero/homepage-hero-banner.jpg";

export default function Hero() {
  const [bgSrc, setBgSrc] = useState(heroCloudBg);
  const [islandSrc, setIslandSrc] = useState(heroIsland);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="hero-luxury fade-in bg-[#f8f5f1]">
      <style jsx>{`
        .hero-reveal {
          transition-property: opacity, transform, filter;
          transition-duration: 900ms;
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hero-dust {
          animation: dustFloat 13s ease-in-out infinite;
        }
        .hero-dust-delay {
          animation: dustFloat 16s ease-in-out infinite reverse;
        }
        @keyframes dustFloat {
          0% { transform: translate3d(0, 0, 0); opacity: 0.35; }
          50% { transform: translate3d(-14px, -18px, 0); opacity: 0.5; }
          100% { transform: translate3d(10px, -32px, 0); opacity: 0.25; }
        }
      `}</style>
      <div
        className={`relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 overflow-hidden px-6 pb-14 pt-10 transition-all duration-700 ease-out md:grid-cols-[38%_62%] md:pb-20 md:pt-16 ${
          ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute -left-24 top-16 h-[320px] w-[320px] rounded-full bg-[#efe3d3]/65 blur-[86px]" />
        <div className="pointer-events-none absolute bottom-[-100px] right-[-90px] h-[360px] w-[360px] rounded-full bg-[#e8dccb]/50 blur-[96px]" />
        <div className="hero-dust pointer-events-none absolute left-[46%] top-[12%] h-2 w-2 rounded-full bg-[#d8c29d]/50 blur-[1px]" />
        <div className="hero-dust-delay pointer-events-none absolute right-[12%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#cab08a]/45 blur-[1px]" />
        <div className="hero-dust pointer-events-none absolute right-[24%] top-[68%] h-2 w-2 rounded-full bg-[#d8c29d]/40 blur-[1px]" />

        <div className="space-y-8 md:pr-6">
          <p
            className={`hero-reveal text-[11px] uppercase tracking-[0.34em] text-[#c9a46a] ${
              ready ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
            }`}
            style={{ transitionDelay: "0s" }}
          >
            UI/UX DESIGNER · VISUAL STORYTELLER
          </p>

          <h1
            className={`hero-reveal font-serif text-[62px] font-normal leading-[0.9] tracking-[-0.038em] text-[#111111] md:text-[96px] lg:text-[114px] ${
              ready ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
            }`}
            style={{ transitionDelay: "0.12s" }}
          >
            Hanni Lu<span className="text-[#c8a46a]">.</span>
          </h1>

          <p
            className={`hero-reveal max-w-sm text-[17px] leading-[1.8] text-[#3f3f3d] md:text-[18px] ${
              ready ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
            }`}
            style={{ transitionDelay: "0.24s" }}
          >
            Premium digital experiences with calm rhythm,
            intuitive flow, and purposeful storytelling.
          </p>

          <div
            className={`hero-reveal flex flex-wrap gap-4 ${
              ready ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
            }`}
            style={{ transitionDelay: "0.36s" }}
          >
            <Link
              href="/projects"
              className="whitespace-nowrap rounded-full bg-[#111111] px-7 py-3 text-sm text-white shadow-[0_16px_34px_rgba(17,17,17,0.2)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(17,17,17,0.24)]"
            >
              View Projects 查看作品
            </Link>
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full border border-white/45 bg-white/46 px-7 py-3 text-sm text-[#232321] shadow-[0_12px_28px_rgba(40,32,22,0.08)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:bg-white/60"
            >
              Contact Me 聯絡我
            </Link>
          </div>
        </div>

        <div
          className={`hero-reveal relative h-[720px] overflow-visible transition-all duration-[900ms] md:h-[720px] ${
            ready ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-7 scale-[0.98] opacity-0 blur-sm"
          }`}
          style={{ transitionDelay: "0.42s" }}
        >
          <div className="pointer-events-none absolute -left-8 top-[18%] h-[200px] w-[200px] rounded-full bg-[#f1e6d6]/65 blur-[64px]" />
          <div className="pointer-events-none absolute -right-14 bottom-[7%] h-[240px] w-[240px] rounded-full bg-[#e5d7c3]/60 blur-[72px]" />
          <div className="relative h-full w-full overflow-visible md:-right-[4vw] md:w-[calc(100%+4vw)]">
            <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_64%_44%,rgba(255,255,255,0.76),rgba(244,235,224,0.6)_42%,rgba(232,221,205,0.42)_72%,rgba(220,205,186,0.32)_100%)]" />
            <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_30%_70%,rgba(205,190,167,0.24),transparent_62%)] blur-lg" />

            <FallbackImage
              src={bgSrc}
              alt=""
              width={1400}
              height={720}
              priority
              className="absolute inset-0 h-full w-full rounded-[40px] object-cover opacity-90"
              onError={() => {
                if (bgSrc !== fallbackHeroImage) {
                  setBgSrc(fallbackHeroImage);
                }
              }}
            />

            <FallbackImage
              src={islandSrc}
              alt=""
              width={920}
              height={860}
              priority
              className="island-float absolute right-0 top-[8%] z-[2] h-auto w-[100%] object-contain md:right-[-4vw] md:w-[88%] md:max-w-[920px]"
              style={{ filter: "drop-shadow(0 48px 80px rgba(40, 30, 20, 0.22))" }}
              onError={() => {
                if (islandSrc !== fallbackHeroImage) {
                  setIslandSrc(fallbackHeroImage);
                }
              }}
            />

            <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#efe3d1] via-transparent to-[#e7d8c5] opacity-10" />
            <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_68%_38%,rgba(255,255,255,0.32),transparent_56%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-[40px] shadow-[inset_0_-100px_130px_rgba(24,20,16,0.11)]" />
            <div className="hero-motion-layer pointer-events-none absolute inset-0" />

            <div className="glass-float-card absolute right-2 top-[12%] z-[3] w-[160px] rounded-[22px] p-4 text-[#2b2a28] transition duration-500 hover:-translate-y-1 md:right-[-2vw] md:w-[170px]">
              <p className="text-base">Branding</p>
              <p className="mt-2 text-sm leading-6 text-[#4b4a47]">Emotional and refined brand experiences.</p>
            </div>

            <div className="glass-float-card absolute bottom-[10%] right-3 z-[3] w-[180px] rounded-[22px] p-4 text-[#2b2a28] transition duration-500 hover:-translate-y-1 md:right-[-1.5vw] md:w-[190px]">
              <p className="text-base">UI/UX Design</p>
              <p className="mt-2 text-sm leading-6 text-[#4b4a47]">Intuitive digital journeys with calm luxury aesthetics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
