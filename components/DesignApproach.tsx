const steps = [
  { title: 'Research', desc: 'Understand users and uncover real needs.' },
  { title: 'Structure', desc: 'Shape clear information architecture and flow.' },
  { title: 'Visual System', desc: 'Craft editorial layouts with intentional hierarchy.' },
  { title: 'Interaction', desc: 'Design subtle moments that feel intuitive and refined.' },
  { title: 'Delivery', desc: 'Polish details and ship experiences with impact.' }
];

export default function DesignApproach() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-3xl border border-warm-200 bg-white px-6 py-10 shadow-soft md:px-10 md:py-12">
        <p className="mb-6 text-[11px] uppercase tracking-[0.33em] text-caramel">My Design Approach</p>
        <div className="grid gap-5 md:grid-cols-5">
          {steps.map((step, idx) => (
            <div key={step.title} className="rounded-2xl bg-warm-50 p-5">
              <p className="mb-3 text-[11px] tracking-[0.24em] text-warm-700">{String(idx + 1).padStart(2, '0')}</p>
              <h3 className="font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
