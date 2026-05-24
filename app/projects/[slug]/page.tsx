import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import CaseStudyHero from '@/components/CaseStudyHero';
import QuoteSection from '@/components/QuoteSection';
import PremiumShowcaseSlider from '@/components/PremiumShowcaseSlider';
import ZoomableGallery from '@/components/ZoomableGallery';

export default function Detail({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const gallery = p.galleryImages.length ? p.galleryImages : [p.heroImage];
  const mainSlides = gallery.slice(0, 5);

  return (
    <main className="bg-[#fcfbf8] pb-20">
      <CaseStudyHero project={p} />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl leading-tight">{p.title}</h2>
            <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-caramel">{p.category} · {p.year}</p>
            <p className="mt-6 text-[1.02rem] leading-8 text-warm-800">{p.overview}</p>
          </div>
          <div className="space-y-4 text-warm-800">
            <p><b>Role</b> · {p.role}</p><p><b>Tools</b> · {p.tools.join(', ')}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-2">
        <p className="text-[11px] uppercase tracking-[0.28em] text-caramel">Design Concept</p>
        <p className="mt-4 text-lg leading-9 text-warm-800">{p.concept || p.strategy}</p>
      </section>

      <section className="mt-14">
        <PremiumShowcaseSlider images={mainSlides} />
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1400px] space-y-8 px-4 md:px-8">
        <div className="relative block h-[60vw] max-h-[760px] min-h-[300px] w-full overflow-hidden">
          <Image src={gallery[0]} alt={`${p.title} visual showcase 1`} fill className="object-contain" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-[52vw] max-h-[640px] min-h-[260px] overflow-hidden"><Image src={gallery[1] || gallery[0]} alt={`${p.title} visual showcase 2`} fill className="object-contain" /></div>
          <div className="relative h-[52vw] max-h-[640px] min-h-[260px] overflow-hidden"><Image src={gallery[2] || gallery[0]} alt={`${p.title} visual showcase 3`} fill className="object-contain" /></div>
        </div>

        <div className="relative h-[60vw] max-h-[760px] min-h-[300px] overflow-hidden"><Image src={gallery[3] || gallery[0]} alt={`${p.title} visual showcase 4`} fill className="object-contain" /></div>

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="relative h-[56vw] max-h-[700px] min-h-[280px] overflow-hidden"><Image src={gallery[4] || gallery[0]} alt={`${p.title} visual showcase 5`} fill className="object-contain" /></div>
          <div className="relative h-[42vw] max-h-[520px] min-h-[220px] overflow-hidden md:mt-14"><Image src={gallery[5] || gallery[1] || gallery[0]} alt={`${p.title} visual showcase 6`} fill className="object-contain" /></div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[1400px] px-4 md:px-8">
        <ZoomableGallery images={gallery} />
      </section>

      <section className="mx-auto mt-14 max-w-5xl px-6"><QuoteSection quote={p.strategy} /></section>
    </main>
  );
}
