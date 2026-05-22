'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string>('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (res.ok) {
      setStatus('Message sent successfully. 訊息已送出。');
      form.reset();
    } else {
      const data = await res.json();
      setStatus(data.error || 'Failed to send.');
    }
  }

  return (
    <main className="bg-[#fcfbf8]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-[11px] uppercase tracking-[0.28em] text-caramel">Contact 聯絡我</p>
        <h1 className="mt-3 font-serif text-6xl">Let’s create something meaningful together.</h1>
        <p className="mt-3 text-lg text-warm-700">一起創造有意義的設計體驗。</p>
        <p className="mt-6 max-w-3xl text-warm-700">For UI/UX design, branding, portfolio collaboration, or digital experience projects, feel free to reach out.</p>
        <p className="mt-2 max-w-3xl text-warm-700">如果你有 UI/UX 設計、品牌識別、作品集網站或數位體驗相關合作，歡迎與我聯絡。</p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 rounded-3xl border border-warm-200 bg-white p-7 shadow-soft md:grid-cols-2">
          <input name="name" required placeholder="Name 姓名" className="rounded-xl border border-warm-200 px-4 py-3" />
          <input name="email" required type="email" placeholder="Email 電子信箱" className="rounded-xl border border-warm-200 px-4 py-3" />
          <input name="company" placeholder="Company / Brand 公司或品牌（選填）" className="rounded-xl border border-warm-200 px-4 py-3 md:col-span-2" />
          <select name="projectType" required className="rounded-xl border border-warm-200 px-4 py-3">
            <option value="">Project Type 專案類型</option><option>UI/UX Design</option><option>Website Design</option><option>Branding</option><option>Packaging</option><option>Illustration</option><option>Other</option>
          </select>
          <input name="budget" placeholder="Budget Range 預算範圍（選填）" className="rounded-xl border border-warm-200 px-4 py-3" />
          <textarea name="message" required rows={5} placeholder="Message 留言內容" className="rounded-xl border border-warm-200 px-4 py-3 md:col-span-2" />
          <button className="rounded-full bg-warm-900 px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-caramel md:col-span-2">Send Message 送出訊息</button>
          {status && <p className="text-sm text-warm-700 md:col-span-2">{status}</p>}
        </form>
      </section>
    </main>
  );
}
