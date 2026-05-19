import DesignSystemSection from '@/components/DesignSystemSection';

export default function DesignSystemPage() {
  return (
    <main className="bg-[#fcfbf8] pt-8">
      <div className="mx-auto max-w-7xl px-6 pb-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-caramel">Internal Guide</p>
        <h1 className="mt-3 font-serif text-5xl">Design System</h1>
      </div>
      <DesignSystemSection />
    </main>
  );
}
