"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BG_IMAGE = "/images/hero/hero-cloud-bg.png";
const ISLAND_IMAGE = "/images/hero/hero-floating-island.png";
const FALLBACK_IMAGE = "/images/hero/homepage-hero-banner.jpg";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [bgSrc, setBgSrc] = useState(BG_IMAGE);
  const [islandSrc, setIslandSrc] = useState(ISLAND_IMAGE);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f5f1]">
      <Image
        src={bgSrc}
        alt=""
        fill
        priority
        className="object-cover opacity-95"
        onError={() => {
          if (bgSrc !== FALLBACK_IMAGE) setBgSrc(FALLBACK_IMAGE);
        }}
      />

      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#efe3d3]/60 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 bottom-[-80px] h-80 w-80 rounded-full bg-[#e7d9c8]/55 blur-[100px]" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-start px-6 pb-16 pt-28 md:grid-cols-[38%_62%] md:pt-36">
        <div
          className={`max-w-[520px] space-y-8 transition-all duration-700 ${
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#c9a46a]">UI/UX DESIGNER · VISUAL STORYTELLER</p>
          <h1 className="font-serif text-[62px] leading-[0.9] tracking-[-0.038em] text-[#111111] md:text-[96px]">
            Hanni Lu<span className="text-[#c8a46a]">.</span>
          </h1>
          <p className="max-w-sm text-[17px] leading-[1.8] text-[#3f3f3d] md:text-[18px]">
            Premium digital experiences with calm rhythm, intuitive flow, and purposeful storytelling.
          </p>

          <div className="flex flex-wrap gap-4">
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
          <div className="pointer-events-none absolute right-[-4vw] top-[24%] z-[2] island-float">
            <Image
              src={islandSrc}
              alt=""
              width={1200}
              height={960}
              priority
              className="h-auto w-[clamp(760px,62vw,1120px)] object-contain"
              style={{ filter: "drop-shadow(0 48px 80px rgba(40, 30, 20, 0.22))" }}
              onError={() => {
                if (islandSrc !== FALLBACK_IMAGE) setIslandSrc(FALLBACK_IMAGE);
              }}
            />
          </div>

          <div
            className="absolute right-[13vw] top-[28%] z-[6] w-[190px] rounded-[22px] p-[18px] text-[#2d2b28]"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.28)",
              boxShadow: "0 18px 50px rgba(30, 24, 18, 0.08)",
              opacity: 0.82,
            }}
          >
            <p className="text-[15px]">Branding</p>
            <p className="mt-1 text-[13px] leading-[1.5] text-[#4a4844]">Emotional visual identity.</p>
          </div>

          <div
            className="absolute right-[9vw] top-[45%] z-[6] w-[190px] rounded-[22px] p-[18px] text-[#2d2b28]"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.28)",
              boxShadow: "0 18px 50px rgba(30, 24, 18, 0.08)",
              opacity: 0.82,
            }}
          >
            <p className="text-[15px]">UI/UX Design</p>
            <p className="mt-1 text-[13px] leading-[1.5] text-[#4a4844]">Intuitive digital experiences.</p>
          </div>
        </div>

        <div className="col-span-full mt-10 md:hidden">
          <Image
            src={islandSrc}
            alt=""
            width={980}
            height={920}
            priority
            className="h-auto w-full object-contain"
            onError={() => {
              if (islandSrc !== FALLBACK_IMAGE) setIslandSrc(FALLBACK_IMAGE);
            }}
          />
        </div>
      </div>
    </section>
  );
}
