export default function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return <div className="mb-10 reveal"><p className="mb-2 text-xs uppercase tracking-[0.2em] text-caramel">{eyebrow}</p><h2 className="font-serif text-4xl md:text-5xl">{title}</h2>{desc && <p className="mt-4 max-w-2xl text-warm-700">{desc}</p>}</div>;
}
