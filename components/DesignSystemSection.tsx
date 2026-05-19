export default function DesignSystemSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-3xl border border-warm-200 bg-white p-7 shadow-soft md:p-10">
        <p className="mb-3 text-[11px] uppercase tracking-[0.33em] text-caramel">Design System</p>
        <h2 className="font-serif text-4xl md:text-5xl">System & Standards</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {['#111111', '#333333', '#666666', '#999999', '#F7F7F7', '#EADBC8', '#C8A96A'].map((c) => (
            <div key={c} className="rounded-2xl border border-warm-200 bg-warm-50 p-4 text-center text-xs uppercase tracking-[0.16em]">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full border" style={{ backgroundColor: c }} />{c}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-warm-200 p-5"><p className="font-serif text-4xl">Heading 1</p><p className="mt-2 text-sm text-warm-700">Playfair Display / 64px</p></div>
          <div className="rounded-2xl border border-warm-200 p-5"><p className="font-serif text-2xl">Heading 2</p><p className="mt-2 text-sm text-warm-700">Playfair Display / 40px</p></div>
          <div className="rounded-2xl border border-warm-200 p-5"><p className="text-base">Body Regular</p><p className="mt-2 text-sm text-warm-700">Inter / 16px / 1.7</p></div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <button className="rounded-md bg-warm-900 px-4 py-3 text-xs uppercase tracking-[0.16em] text-white transition hover:bg-caramel">Primary</button>
          <button className="rounded-md border border-warm-300 px-4 py-3 text-xs uppercase tracking-[0.16em] transition hover:border-caramel">Secondary</button>
          <button className="text-xs uppercase tracking-[0.2em] underline underline-offset-4">Text Button →</button>
          <button className="h-10 w-10 rounded-full bg-warm-900 text-white transition hover:-translate-y-0.5">→</button>
          <button disabled className="rounded-md bg-warm-200 px-4 py-3 text-xs uppercase tracking-[0.16em] text-warm-700">Disabled</button>
          <button className="rounded-md bg-black px-4 py-3 text-xs uppercase tracking-[0.16em] text-white">Hover</button>
          <button className="rounded-md bg-[#473325] px-4 py-3 text-xs uppercase tracking-[0.16em] text-white">Active</button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-warm-200 p-5">
            <input className="w-full rounded-md border border-warm-300 px-3 py-2 focus:border-caramel focus:outline-none" placeholder="Input" />
            <textarea className="w-full rounded-md border border-warm-300 px-3 py-2 focus:border-caramel focus:outline-none" placeholder="Textarea" rows={3} />
            <select className="w-full rounded-md border border-warm-300 px-3 py-2 focus:border-caramel focus:outline-none"><option>Select</option></select>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox"/> Checkbox</label>
            <label className="flex items-center gap-2 text-sm"><input type="radio" name="r"/> Radio</label>
            <input className="w-full rounded-md border border-red-300 px-3 py-2 text-red-600" placeholder="Error state" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-warm-200 p-4 shadow-sm">Card</div>
            <div className="rounded-2xl border border-warm-200 p-4 shadow-soft">Shadow</div>
            <div className="rounded-xl border border-warm-200 p-4">Radius 12</div>
            <div className="rounded-3xl border border-warm-200 p-4">Radius 24</div>
          </div>
        </div>
      </div>
    </section>
  );
}
