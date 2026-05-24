import Image from 'next/image';
import { Project } from '@/types/project';

export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section>
      <div className="relative h-[62vh] min-h-[420px] overflow-hidden">
        <Image src={project.heroImage} alt={`${project.title} hero banner`} fill className="object-cover" priority />
      </div>
    </section>
  );
}
