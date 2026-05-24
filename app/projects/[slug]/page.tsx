import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import CaseStudyHero from '@/components/CaseStudyHero';
import CaseStudySection from '@/components/CaseStudySection';
import ImageShowcase from '@/components/ImageShowcase';
import EditorialGallery from '@/components/EditorialGallery';
import QuoteSection from '@/components/QuoteSection';
import MockupSection from '@/components/MockupSection';
import ProcessGrid from '@/components/ProcessGrid';
import VisualSystemSection from '@/components/VisualSystemSection';
import ReflectionSection from '@/components/ReflectionSection';

export default function Detail({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <main className="bg-[#fcfbf8] pb-16">
      <CaseStudyHero project={p} />
      <CaseStudySection title="Project Overview 專案概覽"><div className="grid gap-8 md:grid-cols-2"><p>{p.overview}</p><div><p><b>Role</b>: {p.role}</p><p className="mt-2"><b>Goal</b>: {p.goal}</p><p className="mt-2"><b>Tools</b>: {p.tools.join(', ')}</p></div></div></CaseStudySection>
      <CaseStudySection title="Challenge / Problem 挑戰"><p>{p.challenge || p.problem}</p></CaseStudySection>
      <CaseStudySection title="Design Concept 設計概念"><p>{p.concept || p.strategy}</p></CaseStudySection>
      <CaseStudySection title="Visual System 視覺系統"><VisualSystemSection text={p.visualSystem || ''} /><div className="mt-6"><EditorialGallery images={p.galleryImages} /></div></CaseStudySection>
      <CaseStudySection title="Process / Exploration 設計流程"><ProcessGrid process={p.process || ''} /><div className="mt-6"><MockupSection images={p.galleryImages} /></div></CaseStudySection>
      <CaseStudySection title="Final Design Showcase 最終設計"><MockupSection images={p.galleryImages} /><div className="mt-5"><ImageShowcase src={p.galleryImages[0]} alt={`${p.title} final showcase`} /></div></CaseStudySection>
      <CaseStudySection title="Responsive Design 響應式"><EditorialGallery images={p.galleryImages} /></CaseStudySection>
      <CaseStudySection title="Sub Project Showcase / 子作品展示">
        <div className="grid gap-6 md:grid-cols-2">
          {p.subProjects.map((sub, idx) => (
            <article key={`${sub.title}-${idx}`} className="overflow-hidden rounded-2xl border border-warm-200 bg-white">
              <div className="relative h-56 bg-[#eee4d7]">
                <Image src={sub.image} alt={`${sub.title} sub project image`} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-2xl">{sub.title}</h3>
                <p className="mt-2 text-sm text-warm-700">{sub.description}</p>
                <p className="mt-2 text-xs text-caramel">{sub.tags.join(' · ')}</p>
              </div>
            </article>
          ))}
        </div>
      </CaseStudySection>
      <CaseStudySection title="Quote"><QuoteSection quote={p.strategy} /></CaseStudySection>
      <CaseStudySection title="Outcome / Reflection 成果與反思"><ReflectionSection outcome={p.outcome} reflection={p.reflection} /></CaseStudySection>
    </main>
  );
}
