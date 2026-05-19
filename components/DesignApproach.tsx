import { Search, Grid2x2, Eye, Sparkles, Send } from 'lucide-react';

const steps = [
  { title: 'Research', desc: 'Understand users and uncover real needs.', icon: Search },
  { title: 'Structure', desc: 'Shape clear information architecture and flow.', icon: Grid2x2 },
  { title: 'Visual System', desc: 'Craft editorial layouts with intentional hierarchy.', icon: Eye },
  { title: 'Interaction', desc: 'Design subtle moments that feel intuitive and refined.', icon: Sparkles },
  { title: 'Delivery', desc: 'Polish details and ship experiences with impact.', icon: Send }
];

export default function DesignApproach() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-3xl border border-warm-200 bg-white px-6 py-10 shadow-soft md:px-10 md:py-12">
        <p className="mb-8 text-[11px] uppercase tracking-[0.33em] text-caramel">My Design Approach</p>
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative rounded-2xl border border-warm-200 bg-warm-50 p-5">
                {idx !== steps.length - 1 && <span className="absolute -right-2 top-8 hidden h-px w-4 bg-[#d7c8b2] md:block" />}
                <div className="mb-4 flex items-center justify-between">
                  <Icon size={17} className="text-[#85603d]" />
                  <p className="text-[11px] tracking-[0.24em] text-warm-700">{String(idx + 1).padStart(2, '0')}</p>
                </div>
                <h3 className="font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-700">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
