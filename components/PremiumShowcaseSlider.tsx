'use client';
import MacBookSlider from './MacBookSlider';

export default function PremiumShowcaseSlider({ images }: { images: string[] }) {
  return <MacBookSlider images={images} frameVariant="macbook" autoPlay interval={6200} />;
}
