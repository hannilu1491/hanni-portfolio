import Image from 'next/image';
export default function MockupSection({ images }: { images: string[] }) { return <div className="grid gap-5 md:grid-cols-2">{images.map((src, i) => <div key={i} className="relative h-80 overflow-hidden rounded-2xl shadow-soft"><Image src={src} alt="mockup" fill className="object-cover"/></div>)}</div>; }
