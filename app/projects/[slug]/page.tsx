import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import CaseStudyHero from '@/components/CaseStudyHero';
import CaseStudySection from '@/components/CaseStudySection';
import EditorialGallery from '@/components/EditorialGallery';
import QuoteSection from '@/components/QuoteSection';
import MockupSection from '@/components/MockupSection';
import VisualSystemSection from '@/components/VisualSystemSection';

export default function Detail({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <main className="bg-[#fcfbf8] pb-16">
      <CaseStudyHero project={p} />
      <CaseStudySection title="Project Overview 專案概覽"><div className="grid gap-8 md:grid-cols-2"><p className="leading-relaxed text-warm-800">{p.overview}</p><div><p><b>Role</b>: {p.role}</p><p className="mt-2"><b>Goal</b>: {p.goal}</p><p className="mt-2"><b>Tools</b>: {p.tools.join(', ')}</p></div></div></CaseStudySection>
      <CaseStudySection title="Design Concept 設計概念"><p className="leading-relaxed text-warm-800">{p.concept || p.strategy}</p></CaseStudySection>
      <CaseStudySection title="Visual System 視覺系統"><VisualSystemSection text={p.visualSystem || ''} /><div className="mt-8"><EditorialGallery images={p.galleryImages} /></div></CaseStudySection>
      <section className="mx-auto mt-14 w-full max-w-[1400px] px-5 md:px-10"><MockupSection images={p.galleryImages} /></section>
      <CaseStudySection title="Quote"><QuoteSection quote={p.strategy} /></CaseStudySection>
    </main>
  );
}
