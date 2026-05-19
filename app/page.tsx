import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ProjectGrid from '@/components/ProjectGrid';
import DesignApproach from '@/components/DesignApproach';
import { projects } from '@/data/projects';

export default function Home(){const featured=projects.slice(0,3);return <main id="top"><Hero/><section className="mx-auto max-w-6xl px-6 py-14"><SectionTitle eyebrow="Selected Works" title="Featured Projects" desc="High-impact case studies balancing UX logic and emotional design."/><ProjectGrid projects={featured}/></section><section className="mx-auto max-w-6xl px-6 py-14"><SectionTitle eyebrow="Method" title="Design Approach"/><DesignApproach/></section><section className="mx-auto max-w-6xl px-6 py-14"><SectionTitle eyebrow="About" title="From Visual Communication to Product Experience" desc="I’m a visual communication designer transitioning into UI/UX design, combining brand aesthetics, user thinking, and digital experience design."/></section></main>}
