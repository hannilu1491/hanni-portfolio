import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <section className="fade-in border-b border-warm-200/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-12 pt-10 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-10 md:pb-14 md:pt-14">
        <div className="space-y-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-caramel">UI/UX Designer · Visual Storyteller</p>
          <div className="space-y-2">
            <p className="text-xl text-warm-700">Hi, I’m</p>
            <h1 className="font-serif text-6xl leading-[0.9] text-warm-900 md:text-8xl">Hanni Lu<span className="text-gold">.</span></h1>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-warm-700">I craft premium digital experiences through editorial composition, clear structure, and tactile brand storytelling.</p>
          <div className="flex flex-wrap items-center gap-5 pt-1">
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" variant="ghost">Contact Me</Button>
          </div>
        </div>

        <div className="relative h-[540px] overflow-hidden rounded-[30px] border border-warm-200 bg-[#ebe2d4] p-5 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.9),transparent_38%),radial-gradient(circle_at_78%_78%,rgba(154,106,68,0.2),transparent_36%)]" />
          <div className="relative h-full">
            <div className="absolute -left-4 top-5 w-[56%] -rotate-6 rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_20px_45px_rgba(27,21,16,0.18)]">
              <Image src="/images/project-web.svg" alt="Website art direction mockup" width={530} height={360} className="h-44 w-full rounded-xl object-cover" priority />
            </div>
            <div className="absolute right-3 top-0 w-[54%] rotate-4 rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_20px_45px_rgba(27,21,16,0.2)]">
              <Image src="/images/project-brand.svg" alt="Brand board mockup" width={500} height={420} className="h-56 w-full rounded-xl object-cover" />
            </div>
            <div className="absolute left-[18%] top-[44%] z-20 w-[66%] rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_24px_50px_rgba(22,18,14,0.24)]">
              <Image src="/images/editorial-hero-board.svg" alt="Editorial portfolio composition" width={900} height={620} className="h-56 w-full rounded-xl object-cover" />
            </div>
            <div className="absolute -bottom-1 right-6 z-10 w-[40%] rotate-[7deg] rounded-2xl border border-[#d7c8b3] bg-[#faf6ef] p-2 shadow-[0_18px_38px_rgba(27,21,16,0.16)]">
              <Image src="/images/project-ui.svg" alt="UI design screens mockup" width={460} height={320} className="h-32 w-full rounded-xl object-cover" />
            </div>
          </div>
          <p className="absolute bottom-5 right-1 rotate-180 text-[10px] uppercase tracking-[0.33em] text-warm-700 [writing-mode:vertical-rl]">Scroll to Explore</p>
        </div>
      </div>
    </section>
  );
}
