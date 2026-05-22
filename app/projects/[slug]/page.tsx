import { notFound } from 'next/navigation';
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
      <CaseStudySection title="Visual System 視覺系統"><VisualSystemSection text={p.visualSystem || 'Typography, color, and layout system tuned for editorial rhythm.'} /></CaseStudySection>
      <CaseStudySection title="Process / Exploration 設計流程"><ProcessGrid process={p.process || 'Sketch → Wireframe → Visual Direction → Iteration → Final UI'} /></CaseStudySection>
      <CaseStudySection title="Final Design Showcase 最終設計"><MockupSection images={p.galleryImages.slice(0, 2)} /><div className="mt-5"><ImageShowcase src={p.galleryImages[0]} alt={p.title} /></div></CaseStudySection>
      <CaseStudySection title="Responsive Design 響應式"><EditorialGallery images={p.galleryImages} /></CaseStudySection>
      <CaseStudySection title="Quote"><QuoteSection quote={p.strategy} /></CaseStudySection>
      <CaseStudySection title="Outcome / Reflection 成果與反思"><ReflectionSection outcome={p.outcome} reflection={p.reflection} /></CaseStudySection>
    </main>
  );
}
