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
    <section className="relative min-h-screen overflow-hidden bg-[#f8f5f1]">
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
        .hero-island-size {
          width: clamp(760px, 62vw, 1120px);
          height: auto;
        }
        .glass-reveal {
          transition-property: opacity, transform, filter, background-color;
          transition-duration: 800ms;
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
      <FallbackImage
        src={bgSrc}
        alt=""
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-95"
        onError={() => {
          if (bgSrc !== fallbackHeroImage) setBgSrc(fallbackHeroImage);
        }}
      />


      <div className="relative z-[2] mx-auto w-full max-w-7xl px-6 pt-28 md:pt-36">
        <FallbackImage
          src={islandSrc}
          alt=""
          width={980}
          height={920}
          priority
          className="island-float relative mt-8 block h-auto w-[110%] object-contain md:hidden"
          style={{ filter: "drop-shadow(0 32px 64px rgba(40, 30, 20, 0.2))" }}
          onError={() => {
            if (islandSrc !== fallbackHeroImage) setIslandSrc(fallbackHeroImage);
          }}
        />
      </div>

      <div
        className={`relative z-[5] mx-auto grid min-h-screen max-w-7xl items-start px-6 pb-14 pt-28 transition-all duration-700 ease-out md:grid-cols-[38%_62%] md:pb-20 md:pt-36 ${
          ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute -left-24 top-16 h-[320px] w-[320px] rounded-full bg-[#efe3d3]/65 blur-[86px]" />
        <div className="pointer-events-none absolute bottom-[-100px] right-[-90px] h-[360px] w-[360px] rounded-full bg-[#e8dccb]/50 blur-[96px]" />
        <div className="hero-dust pointer-events-none absolute left-[46%] top-[12%] h-2 w-2 rounded-full bg-[#d8c29d]/50 blur-[1px]" />
        <div className="hero-dust-delay pointer-events-none absolute right-[12%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#cab08a]/45 blur-[1px]" />
        <div className="hero-dust pointer-events-none absolute right-[24%] top-[68%] h-2 w-2 rounded-full bg-[#d8c29d]/40 blur-[1px]" />

        <div className="relative max-w-[520px] space-y-8 md:-translate-y-5 md:pr-6">
          <p
            className={`hero-reveal text-[11px] uppercase tracking-[0.34em] text-[#c9a46a] ${
              ready ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
            }`}
            style={{ transitionDelay: "0s" }}
          >
            UI/UX DESIGNER · VISUAL STORYTELLER
          </p>

          <h1
            className={`hero-reveal font-serif text-[62px] font-normal leading-[0.9] tracking-[-0.038em] text-[#111111] md:text-[96px] lg:text-[96px] ${
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

        <div className="relative hidden md:block">
          <FallbackImage
            src={islandSrc}
            alt=""
            width={980}
            height={920}
            priority
            className="island-float pointer-events-none absolute right-[-4vw] top-[24%] z-[2] h-auto object-contain hero-island-size"
            style={{ filter: "drop-shadow(0 48px 80px rgba(40, 30, 20, 0.22))" }}
            onError={() => {
              if (islandSrc !== fallbackHeroImage) setIslandSrc(fallbackHeroImage);
            }}
          />

          <div
            className={`glass-reveal absolute right-[13vw] top-[28%] z-[6] w-[190px] rounded-[22px] p-[18px] text-[#2d2b28] ${
              ready ? "translate-y-0 opacity-100 blur-0" : "translate-y-5 opacity-0 blur-[8px]"
            }`}
            style={{
              transitionDelay: "0.58s",
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.28)",
              boxShadow: "0 18px 50px rgba(30, 24, 18, 0.08)",
              opacity: 0.82
            }}
          >
            <p className="text-[28px] leading-none">↗</p>
            <p className="mt-2 text-[15px]">Branding</p>
            <p className="mt-1 text-[13px] leading-[1.5] text-[#4a4844]">Emotional visual identity.</p>
          </div>

          <div
            className={`glass-reveal absolute right-[9vw] top-[45%] z-[6] w-[190px] rounded-[22px] p-[18px] text-[#2d2b28] ${
              ready ? "translate-y-0 opacity-100 blur-0" : "translate-y-5 opacity-0 blur-[8px]"
            }`}
            style={{
              transitionDelay: "0.7s",
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.28)",
              boxShadow: "0 18px 50px rgba(30, 24, 18, 0.08)",
              opacity: 0.82
            }}
          >
            <p className="text-[28px] leading-none">↗</p>
            <p className="mt-2 text-[15px]">UI/UX Design</p>
            <p className="mt-1 text-[13px] leading-[1.5] text-[#4a4844]">Intuitive digital experiences.</p>
          </div>

        </div>

        <div className="col-span-full mt-4 flex md:hidden">
          <div className="rounded-full px-4 py-2 text-xs text-[#2d2b28]" style={{ background: "rgba(255,255,255,0.22)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.35)", boxShadow: "0 24px 80px rgba(30, 24, 18, 0.10)" }}>
            UI/UX Design · Intuitive digital experiences.
          </div>
        </div>
      </div>
    </section>
  );
}
