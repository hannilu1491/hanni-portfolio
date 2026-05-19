import Link from 'next/link';
import { Project } from '@/types/project';
import ProjectGrid from './ProjectGrid';

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 reveal">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.33em] text-caramel">Featured Projects</p>
          <h2 className="font-serif text-4xl md:text-5xl">Selected Work</h2>
        </div>
        <Link href="/projects" className="text-sm uppercase tracking-[0.22em] text-warm-900 transition hover:text-caramel">
          View All Projects →
        </Link>
      </div>
      <ProjectGrid projects={projects} />
    </section>
  );
}
