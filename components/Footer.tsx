import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-[#11100f] text-[#e8e2d8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.33em] text-[#c5a774]">Let’s Work Together 合作洽談</p>
          <h3 className="mt-4 max-w-xl font-serif text-4xl leading-tight md:text-5xl">Let’s create something meaningful together.</h3>
          <p className="mt-3 text-sm text-[#c8c0b3]">一起創造有意義的設計體驗。</p>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-[#c8c0b3]">I’m open to UI/UX design, branding, and digital experience collaborations.</p>
          <p className="mt-2 text-sm text-[#c8c0b3]">歡迎與我討論 UI/UX 設計、品牌識別與數位體驗相關合作。</p>
          <Link href="/contact" className="mt-6 inline-block rounded-md bg-[#c5a774] px-7 py-3 text-sm font-medium text-[#151311] transition hover:bg-[#d1b788]">Contact Me 聯絡我 →</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs tracking-[0.12em] text-[#b3aa9a]">
          <p>© 2026 Hanni Lu</p>
          <div className="flex gap-6">
            <span>LinkedIn</span><span>Instagram</span><span>Behance</span><span>Email 信箱</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
