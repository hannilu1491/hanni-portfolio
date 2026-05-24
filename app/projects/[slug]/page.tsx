import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import CaseStudyHero from '@/components/CaseStudyHero';
import QuoteSection from '@/components/QuoteSection';
import PremiumShowcaseSlider from '@/components/PremiumShowcaseSlider';
import ZoomableGallery from '@/components/ZoomableGallery';

export default function Detail({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const gallery = p.galleryImages.length ? p.galleryImages : [p.heroImage];
  const desktop = gallery.slice(0, Math.max(2, Math.ceil(gallery.length / 2)));
  const mobile = [...gallery].reverse().slice(0, Math.max(2, Math.floor(gallery.length / 2)));

  return (
    <main className="bg-[#fcfbf8] pb-20">
      <CaseStudyHero project={p} />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-caramel">Project Overview</p>
            <p className="mt-5 text-[1.02rem] leading-8 text-warm-800">{p.overview}</p>
          </div>
          <div className="space-y-4 text-warm-800">
            <p><b>Role</b> · {p.role}</p><p><b>Goal</b> · {p.goal}</p><p><b>Tools</b> · {p.tools.join(', ')}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8">
        <p className="text-[11px] uppercase tracking-[0.28em] text-caramel">Design Concept</p>
        <p className="mt-4 text-lg leading-9 text-warm-800">{p.concept || p.strategy}</p>
      </section>

      <section className="mx-auto mt-10 w-full max-w-[1500px] px-3 md:px-8">
        <ZoomableGallery images={gallery} />
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1500px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <PremiumShowcaseSlider images={desktop} frame="macbook" />
          <PremiumShowcaseSlider images={gallery} frame="browser" />
          <PremiumShowcaseSlider images={mobile} frame="mobile" />
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1500px] px-3 md:px-8">
        <ZoomableGallery images={gallery.concat(gallery)} masonry />
      </section>

      <section className="mx-auto mt-14 max-w-5xl px-6">
        <QuoteSection quote={p.strategy} />
      </section>
    </main>
  );
}
