import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <section className="fade-in border-b border-warm-200/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-14 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-16 md:pb-20 md:pt-20">
        <div className="space-y-7">
          <p className="text-[11px] uppercase tracking-[0.35em] text-caramel">UI/UX Designer · Visual Storyteller</p>
          <div className="space-y-4">
            <p className="text-2xl text-warm-700">Hi, I’m</p>
            <h1 className="font-serif text-6xl leading-[0.92] text-warm-900 md:text-8xl">Hanni Lu<span className="text-gold">.</span></h1>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-warm-700">
            UI/UX Designer with a background in visual communication, branding, packaging, and illustration.
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" variant="ghost">Contact Me</Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-warm-200 bg-[#efebe4] p-5 shadow-soft md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.65),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(154,106,68,0.14),transparent_35%)]" />
          <div className="relative z-10 grid gap-4 md:grid-cols-[0.92fr_1fr]">
            <div className="space-y-4">
              <div className="rounded-2xl bg-[#f6f3ed] p-3 shadow-md">
                <Image src="/images/placeholder.svg" alt="Brand showcase" width={420} height={500} className="h-56 w-full rounded-xl object-cover" priority />
              </div>
              <div className="rounded-2xl bg-[#f6f3ed] p-3 shadow-md">
                <Image src="/images/placeholder.svg" alt="Packaging still life" width={420} height={340} className="h-36 w-full rounded-xl object-cover" />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-8 md:pt-16">
              <div className="rounded-2xl bg-[#f6f3ed] p-3 shadow-md">
                <Image src="/images/placeholder.svg" alt="Editorial portfolio spread" width={420} height={360} className="h-44 w-full rounded-xl object-cover" />
              </div>
              <div className="rounded-2xl bg-[#f6f3ed] p-3 shadow-md">
                <Image src="/images/placeholder.svg" alt="Art direction studies" width={420} height={420} className="h-56 w-full rounded-xl object-cover" />
              </div>
            </div>
          </div>
          <p className="absolute bottom-6 right-2 rotate-180 text-[10px] uppercase tracking-[0.33em] text-warm-700 [writing-mode:vertical-rl]">
            Scroll to Explore
          </p>
        </div>
      </div>
    </section>
  );
}
