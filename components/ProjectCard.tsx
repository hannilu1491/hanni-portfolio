import Link from 'next/link';
import { Project } from '@/types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative h-72 overflow-hidden bg-[#e8dfd1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.55),transparent_35%),linear-gradient(140deg,#1d1a18_0%,#4f4335_35%,#dbc7a9_100%)] transition duration-700 group-hover:scale-105" />
        <div className="absolute left-5 top-6 h-36 w-28 -rotate-6 rounded-xl border border-white/40 bg-[#f7f3ed]/80 shadow-lg" />
        <div className="absolute right-8 top-12 h-44 w-36 rotate-3 rounded-xl border border-white/40 bg-[#f1e8db]/75 shadow-lg" />
        <div className="absolute bottom-5 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-lg border border-white/30 bg-black/15 backdrop-blur-[1px]" />
      </div>
      <div className="space-y-3 p-6">
        <p className="text-[11px] uppercase tracking-[0.26em] text-caramel">{project.category} · {project.year}</p>
        <h3 className="font-serif text-3xl leading-tight text-warm-900 transition group-hover:text-[#6f4a2f]">{project.title}</h3>
        <p className="text-sm leading-relaxed text-warm-700">{project.description}</p>
        <p className="pt-2 text-xs uppercase tracking-[0.24em] text-warm-900">View Case Study →</p>
      </div>
    </Link>
  );
}
