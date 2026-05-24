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
    <main className="bg-[#fcfbf8] pb-24">
      <CaseStudyHero project={p} />

      <section className="mx-auto w-full max-w-[1100px] px-6 py-20">
        <p className="text-[11px] uppercase tracking-[0.32em] text-caramel">{p.category} · {p.year}</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.02] md:text-7xl">{p.title}</h1>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="inline-flex rounded-full border border-[#E8DED2] bg-[#f9f5ef] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-warm-800">Role · {p.role}</span>
          <span className="inline-flex rounded-full border border-[#E8DED2] bg-[#f9f5ef] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-warm-800">Tools · {p.tools.join(', ')}</span>
        </div>

        <p className="mt-8 max-w-3xl text-[1.03rem] leading-[1.85] text-warm-800">{p.overview}</p>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-6 pb-6">
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">Design Concept</h2>
        <p className="mt-5 max-w-3xl text-lg leading-[1.85] text-warm-800">{p.concept || p.strategy}</p>
      </section>

      <PremiumShowcaseSlider images={mainSlides} />

      <section className="mx-auto w-full max-w-[1100px] space-y-20 px-6">
        {gallery.map((src, i) => (
          <div key={src + i} className="relative block h-[62vw] max-h-[820px] min-h-[280px] w-full overflow-hidden">
            <Image src={src} alt={`${p.title} visual showcase ${i + 1}`} fill className="object-contain" />
          </div>
        ))}
      </section>

      <section className="mx-auto mt-14 w-full max-w-[1100px] px-6">
        <ZoomableGallery images={gallery} />
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1100px] px-6"><QuoteSection quote={p.strategy} /></section>
    </main>
  );
}
