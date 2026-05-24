'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import { useState } from 'react';

const fallbackImage = '/images/projects/uiux-multimedia/uiux-pet-hotel-official-website.avif';

export default function ProjectCard({ project }: { project: Project }) {
  const [src, setSrc] = useState(project.coverImage || fallbackImage);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-sm transition duration-[350ms] hover:-translate-y-2 hover:shadow-[0_28px_52px_rgba(20,18,15,0.18)] reveal"
    >
      <div className="relative h-72 overflow-hidden bg-[#e8dfd1]">
        <Image
          src={src}
          alt={`${project.title} cover image`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          onError={() => setSrc(fallbackImage)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10 opacity-70" />
      </div>
      <div className="space-y-3 p-6">
        <p className="text-[11px] uppercase tracking-[0.26em] text-caramel">{project.category} · {project.year}</p>
        <h3 className="font-serif text-3xl leading-tight text-warm-900 transition group-hover:text-[#6f4a2f]">{project.title}</h3>
        <p className="text-sm leading-relaxed text-warm-700">{project.description}</p>
        <p className="pt-2 text-xs tracking-[0.18em] text-warm-900"><span className="inline-block transition group-hover:translate-x-1">View Case Study 查看案例 →</span></p>
      </div>
    </Link>
  );
}
