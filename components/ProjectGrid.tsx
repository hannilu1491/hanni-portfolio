import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>;
}
