import { Project } from '@/types/project';import ProjectCard from './ProjectCard';
export default function ProjectGrid({projects}:{projects:Project[]}){return <div className="grid gap-8 md:grid-cols-2">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>}
