import Link from 'next/link';
import { Project } from '@/types/project';
import ProjectGrid from './ProjectGrid';

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 reveal">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.33em] text-caramel">Featured Projects 精選作品</p>
          <h2 className="font-serif text-4xl md:text-5xl">Selected Work 代表作品</h2>
        </div>
        <Link href="/projects" className="text-sm tracking-[0.14em] text-warm-900 transition hover:text-caramel">
          View All Projects 查看全部作品 →
        </Link>
      </div>
      <ProjectGrid projects={projects} />
    </section>
  );
}
