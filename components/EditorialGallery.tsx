import ZoomableGallery from './ZoomableGallery';

export default function EditorialGallery({ images }: { images: string[] }) {
  return <ZoomableGallery images={images} />;
}
