import ZoomableGallery from './ZoomableGallery';

export default function MockupSection({ images }: { images: string[] }) {
  return <ZoomableGallery images={images} masonry />;
}
