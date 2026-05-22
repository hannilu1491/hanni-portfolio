'use client';
import { useRouter, useSearchParams } from 'next/navigation';

const labels: Record<string, string> = {
  All: 'All 全部',
  'UI/UX Design': 'UI/UX',
  Branding: 'Branding',
  Packaging: 'Packaging',
  Illustration: 'Illustration',
  'Web Design': 'Web Design'
};

export default function CategoryFilter({ categories }: { categories: readonly string[] }) {
  const r = useRouter();
  const s = useSearchParams();
  const active = s.get('category') || 'All';
  return (
    <div className="mb-12 flex flex-wrap gap-3">
      {categories.map((c) => (
        <button key={c} onClick={() => r.push(c === 'All' ? '/projects' : `/projects?category=${encodeURIComponent(c)}`)} className={`rounded-full px-4 py-2 text-sm transition ${active === c ? 'bg-warm-900 text-white' : 'border border-warm-300 hover:border-caramel hover:text-caramel'}`}>
          {labels[c] ?? c}
        </button>
      ))}
    </div>
  );
}
