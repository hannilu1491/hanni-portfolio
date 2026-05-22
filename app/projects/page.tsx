import { categories, projects } from '@/data/projects';
import CategoryFilter from '@/components/CategoryFilter';
import ProjectGrid from '@/components/ProjectGrid';

export default function ProjectsPage({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams.category;
  const filtered = !category || category === 'All' ? projects : projects.filter((p) => p.category === category);
  return (
    <main className="mx-auto max-w-7xl bg-[#fcfbf8] px-6 py-16">
      <p className="text-[11px] uppercase tracking-[0.28em] text-caramel">Projects Showcase</p>
      <h1 className="mb-4 mt-3 font-serif text-6xl">Projects 作品</h1>
      <p className="mb-10 max-w-2xl text-warm-700">Curated case studies across UI/UX, branding, web design, and visual storytelling.</p>
      <CategoryFilter categories={categories} />
      <ProjectGrid projects={filtered} />
    </main>
  );
}
