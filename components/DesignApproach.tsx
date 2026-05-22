import { Search, Grid2x2, Eye, Sparkles, Send } from 'lucide-react';

const steps = [
  { title: 'Research 研究', desc: '理解使用者需求，找出真正的問題。', icon: Search },
  { title: 'Structure 結構', desc: '整理資訊架構，建立清楚的使用流程。', icon: Grid2x2 },
  { title: 'Visual System 視覺系統', desc: '建立一致的視覺語言與品牌感。', icon: Eye },
  { title: 'Interaction 互動', desc: '設計直覺、細緻且有溫度的體驗。', icon: Sparkles },
  { title: 'Delivery 交付', desc: '整理設計細節，讓成果能被理解與落地。', icon: Send }
];

export default function DesignApproach() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 reveal">
      <div className="rounded-3xl border border-warm-200 bg-white px-6 py-10 shadow-soft md:px-10 md:py-12">
        <p className="mb-8 text-[11px] uppercase tracking-[0.33em] text-caramel">My Design Approach 我的設計方法</p>
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative rounded-2xl border border-warm-200 bg-warm-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
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
