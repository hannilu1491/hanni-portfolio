import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-72 overflow-hidden bg-warm-100">
        <Image src={project.coverImage} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className="space-y-3 p-6">
        <p className="text-[11px] uppercase tracking-[0.26em] text-caramel">{project.category} · {project.year}</p>
        <h3 className="font-serif text-3xl leading-tight text-warm-900">{project.title}</h3>
        <p className="text-sm leading-relaxed text-warm-700">{project.description}</p>
        <p className="pt-2 text-xs uppercase tracking-[0.24em] text-warm-900">View Case Study →</p>
      </div>
    </Link>
  );
}
