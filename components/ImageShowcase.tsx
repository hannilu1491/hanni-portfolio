import ZoomableGallery from './ZoomableGallery';

export default function ImageShowcase({ src }: { src: string; alt: string }) {
  return <div className="reveal mx-auto my-8 max-w-6xl px-6"><ZoomableGallery images={[src]} /></div>;
}
