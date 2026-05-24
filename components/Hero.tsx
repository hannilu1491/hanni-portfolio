"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const primaryHeroImage = "/images/projects/uiux-multimedia/uiux-pet-hotel-showcase.avif";
const fallbackHeroImage = "/images/placeholder.jpg";

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
        className={`mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-16 transition-all duration-700 ease-out md:grid-cols-[40%_60%] ${
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
            className={`font-serif text-[62px] leading-[0.94] tracking-[-0.03em] text-[#151515] transition-all duration-700 delay-100 md:text-[88px] lg:text-[100px] ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Hanni Lu<span className="text-[#c8a46a]">.</span>
          </h1>

          <p
            className={`max-w-md text-base leading-8 text-[#4d4d4d] transition-all duration-700 delay-150 ${
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
          className={`relative h-[520px] transition-all duration-700 delay-300 ${
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="absolute left-[8%] top-[9%] h-[76%] w-[82%] rounded-[42px] bg-[#e9dfd2]/60 blur-3xl" />

          <div className="absolute left-[7%] top-[5%] w-[84%] overflow-hidden rounded-[34px] border border-[#e9dfd2] bg-white shadow-[0_36px_80px_rgba(20,18,15,0.18)] transition duration-500 hover:scale-[1.01]">
            <Image
              src={imageSrc}
              alt="Hanni Lu portfolio showcase"
              width={1280}
              height={840}
              priority
              className="h-[430px] w-full object-cover"
              onError={() => {
                if (imageSrc !== fallbackHeroImage) {
                  setImageSrc(fallbackHeroImage);
                }
              }}
            />
          </div>

          <div className="absolute right-[3%] top-[16%] w-[220px] rounded-3xl border border-[#e9dfd2] bg-white px-5 py-4 shadow-[0_24px_48px_rgba(20,18,15,0.12)] transition duration-300 hover:-translate-y-1">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#c8a46a]">Brand System</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <span className="h-11 rounded-xl bg-[#151515]" />
              <span className="h-11 rounded-xl bg-[#c8a46a]" />
              <span className="h-11 rounded-xl bg-[#efe6da]" />
            </div>
            <p className="mt-3 text-xs leading-5 text-[#5f5b55]">Warm, natural, and trustworthy visual language.</p>
          </div>

          <div className="absolute bottom-[8%] left-[2%] w-[210px] rounded-3xl border border-[#e9dfd2] bg-white px-5 py-4 shadow-[0_24px_48px_rgba(20,18,15,0.12)] transition duration-300 hover:-translate-y-1">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#c8a46a]">UI Detail</p>
            <p className="mt-2 font-serif text-4xl leading-none text-[#151515]">Aa</p>
            <p className="mt-2 text-xs leading-5 text-[#5f5b55]">Editorial type scale with refined rhythm.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
