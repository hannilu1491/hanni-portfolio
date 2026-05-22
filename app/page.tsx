import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import DesignApproach from '@/components/DesignApproach';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <main id="top" className="bg-[#fcfbf8] text-warm-900">
      <Hero />
      <FeaturedProjects projects={featured} />
      <DesignApproach />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="slide-in rounded-3xl border border-warm-200 bg-white px-8 py-12 shadow-soft md:flex md:items-center md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-caramel">Available for Select Projects 精選合作開放中</p>
            <h3 className="mt-3 font-serif text-4xl">Let’s create your next premium digital story.</h3>
          </div>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-warm-900 px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-caramel md:mt-0">Start a Conversation 開始洽談 →</Link>
        </div>
      </section>
    </main>
  );
}
