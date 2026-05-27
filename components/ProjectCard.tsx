'use client';

import Link from 'next/link';
import FallbackImage from './FallbackImage';
import { Project } from '@/types/project';
import { useState } from 'react';

const fallbackImage = '/images/hero/homepage-hero-banner.jpg';

export default function ProjectCard({ project }: { project: Project }) {
  const [src, setSrc] = useState(project.coverImage || fallbackImage);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-warm-200/85 bg-white shadow-[0_10px_24px_rgba(25,20,16,0.07)] transition duration-700 hover:-translate-y-1.5 hover:shadow-[0_30px_58px_rgba(20,18,15,0.16)] reveal"
    >
      <div className="relative h-[320px] overflow-hidden bg-[#e8dfd1]">
        <FallbackImage
          src={src}
          alt={`${project.title} cover image`}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.055]"
          onError={() => setSrc(fallbackImage)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-white/10 opacity-75 transition duration-700 group-hover:opacity-60" />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-[11px] uppercase tracking-[0.26em] text-caramel">{project.category} · {project.year}</p>
        <h3 className="mt-3 min-h-[4.8rem] font-serif text-[30px] leading-tight tracking-[-0.015em] text-warm-900 transition duration-500 group-hover:text-[#6f4a2f]">{project.title}</h3>
        <p className="mt-3 flex-grow text-sm leading-7 text-warm-700">{project.description}</p>
        <p className="mt-auto pt-4 text-xs tracking-[0.18em] text-warm-900"><span className="inline-block transition duration-500 group-hover:translate-x-1.5">View Case Study 查看案例 →</span></p>
      </div>
    </Link>
  );
}
