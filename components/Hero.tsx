import Button from './Button';

function MockFrame({ className }: { className: string }) {
  return (
    <div className={`rounded-2xl border border-[#d9cfbf] bg-[#f6f2eb] p-3 shadow-[0_18px_40px_rgba(30,25,20,0.14)] ${className}`}>
      <div className="h-full w-full rounded-xl bg-[linear-gradient(145deg,#1b1a18_0%,#3c342a_35%,#c7a068_100%)] p-4">
        <div className="h-full w-full rounded-lg border border-white/30 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.4),transparent_45%),linear-gradient(120deg,#d3c7b3_0%,#ece6dc_45%,#a57a4c_100%)]" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="fade-in border-b border-warm-200/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-12 pt-12 md:grid-cols-[1fr_1.08fr] md:items-center md:gap-12 md:pb-16 md:pt-16">
        <div className="space-y-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-caramel">UI/UX Designer · Visual Storyteller</p>
          <div className="space-y-3">
            <p className="text-xl text-warm-700">Hi, I’m</p>
            <h1 className="font-serif text-6xl leading-[0.9] text-warm-900 md:text-8xl">Hanni Lu<span className="text-gold">.</span></h1>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-warm-700">UI/UX Designer with a background in visual communication, branding, packaging, and illustration.</p>
          <div className="flex flex-wrap items-center gap-5 pt-1">
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" variant="ghost">Contact Me</Button>
          </div>
        </div>

        <div className="relative h-[490px] overflow-hidden rounded-[28px] border border-warm-200 bg-[#ece6dc] p-6 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.8),transparent_40%),radial-gradient(circle_at_78%_84%,rgba(154,106,68,0.18),transparent_34%)]" />
          <div className="relative h-full">
            <MockFrame className="absolute left-2 top-5 h-56 w-52 -rotate-6" />
            <MockFrame className="absolute right-5 top-12 h-64 w-64 rotate-3" />
            <MockFrame className="absolute bottom-10 left-20 h-52 w-56 -rotate-2" />
            <MockFrame className="absolute bottom-4 right-2 h-44 w-48 rotate-6" />
          </div>
          <p className="absolute bottom-5 right-1 rotate-180 text-[10px] uppercase tracking-[0.33em] text-warm-700 [writing-mode:vertical-rl]">Scroll to Explore</p>
        </div>
      </div>
    </section>
  );
}
