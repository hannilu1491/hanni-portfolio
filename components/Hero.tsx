"use client";

export default function Hero() {
  return (
    <section className="fade-in bg-[#fcfbf8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[45%_55%] md:items-center">
        <div className="space-y-7">
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#b88657]">
            UI/UX Designer · Visual Storyteller
          </p>

          <h1 className="font-serif text-[72px] leading-[0.95] tracking-[-0.04em] text-[#151515] md:text-[96px]">
            Hanni Lu<span className="text-[#c8a46a]">.</span>
          </h1>

          <p className="max-w-md text-base leading-8 text-[#6f6258]">
            Premium editorial digital experiences with natural atmosphere and refined visual storytelling.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-full bg-[#151515] px-7 py-3 text-sm text-white shadow-sm transition hover:-translate-y-0.5"
            >
              View Projects 查看作品
            </a>

            <a
              href="/contact"
              className="rounded-full border border-stone-300 bg-white px-7 py-3 text-sm text-[#151515] shadow-sm transition hover:-translate-y-0.5"
            >
              Contact Me 聯絡我
            </a>
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute inset-8 rounded-[48px] bg-[#efe6da] opacity-70 blur-3xl" />

          <div className="absolute left-[8%] top-[6%] w-[78%] overflow-hidden rounded-[36px] bg-white shadow-[0_35px_70px_rgba(0,0,0,0.16)]">
            <img
              src="/images/projects/uiux-multimedia/uiux-pet-hotel-showcase.avif"
              alt="Hanni Lu portfolio showcase"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="absolute right-[4%] top-[18%] rounded-3xl border border-stone-200 bg-white/90 p-5 shadow-[0_24px_45px_rgba(0,0,0,0.12)]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b88657]">
              Brand System
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <span className="h-12 w-16 rounded-xl bg-[#111111]" />
              <span className="h-12 w-16 rounded-xl bg-[#c8a46a]" />
              <span className="h-12 w-16 rounded-xl bg-[#eadbc8]" />
            </div>
          </div>

          <div className="absolute bottom-[8%] left-[2%] rounded-3xl border border-stone-200 bg-white/90 p-5 shadow-[0_24px_45px_rgba(0,0,0,0.12)]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b88657]">
              UI Detail
            </p>
            <p className="mt-2 font-serif text-2xl text-[#151515]">
              Editorial Grid
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
