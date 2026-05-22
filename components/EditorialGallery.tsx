import Image from 'next/image';
export default function EditorialGallery({ images }: { images: string[] }) {
  return <div className="grid gap-4 md:grid-cols-2">{images.map((src, i) => <div key={src + i} className="group relative h-72 overflow-hidden rounded-2xl shadow-sm"><Image src={src} alt="gallery" fill className="object-cover transition duration-500 group-hover:scale-[1.04]" /></div>)}</div>;
}
