"use client";

import Image from "next/image";
import Link from "next/link";

const cloudBg = "/images/hero/hero-cloud-bg.png";
const island = "/images/hero/hero-floating-island.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f5f1]">
      <Image
        src={cloudBg}
        alt=""
        fill
        priority
        className="object-cover opacity-95"
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-24 md:grid-cols-[42%_58%]">
        <div className="max-w-xl">
          <p className="mb-7 text-[11px] uppercase tracking-[0.34em] text-[#c7a36a]">
            UI/UX Designer · Visual Storyteller
          </p>

          <h1 className="font-serif text-[76px] leading-none text-[#171412] md:text-[112px]">
            Hanni Lu<span className="text-[#caa86c]">.</span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-[#4a4844]">
            Premium digital experiences with calm rhythm, intuitive flow, and purposeful storytelling.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-[#14110f] px-7 py-3 text-sm text-white shadow-xl transition hover:-translate-y-1"
            >
              View Projects 查看作品
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/70 bg-white/20 px-7 py-3 text-sm text-[#2d2b28] backdrop-blur-xl transition hover:-translate-y-1"
            >
              Contact Me 聯絡我
            </Link>
          </div>
        </div>

        <div className="relative min-h-[520px] md:min-h-[720px]">
          <Image
            src={island}
            alt="Floating nature island"
            width={1100}
            height={900}
            priority
            className="absolute right-[-8vw] top-[18%] z-10 w-[clamp(720px,68vw,1180px)] max-w-none object-contain"
          />

          <div
            className="absolute right-[10vw] top-[28%] z-20 hidden w-[190px] rounded-[22px] p-[18px] text-[#2d2b28] md:block"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.28)",
              boxShadow: "0 18px 50px rgba(30,24,18,0.08)",
            }}
          >
            <p className="text-xl leading-none">↗</p>
            <p className="mt-4 text-[15px]">Branding</p>
            <p className="mt-2 text-[13px] leading-[1.5] text-[#4a4844]">
              Emotional visual identity.
            </p>
          </div>

          <div
            className="absolute right-[6vw] top-[48%] z-20 hidden w-[190px] rounded-[22px] p-[18px] text-[#2d2b28] md:block"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.28)",
              boxShadow: "0 18px 50px rgba(30,24,18,0.08)",
            }}
          >
            <p className="text-xl leading-none">↗</p>
            <p className="mt-4 text-[15px]">UI/UX Design</p>
            <p className="mt-2 text-[13px] leading-[1.5] text-[#4a4844]">
              Intuitive digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
