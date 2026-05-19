import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import DesignApproach from '@/components/DesignApproach';
import DesignSystemSection from '@/components/DesignSystemSection';
import { projects } from '@/data/projects';

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <main id="top" className="bg-warm-50 text-warm-900">
      <Hero />
      <FeaturedProjects projects={featured} />
      <DesignApproach />
      <DesignSystemSection />
    </main>
  );
}
