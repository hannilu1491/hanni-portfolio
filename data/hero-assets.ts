export type HeroAssetItem = {
  id: string;
  kind: 'background' | 'browser-frame' | 'ui-main' | 'ui-secondary' | 'floating-card' | 'nature' | 'foreground';
  src: string;
  fallback?: string;
  alt: string;
};

export const heroAssets: HeroAssetItem[] = [
  { id: 'bg', kind: 'background', src: '/images/hero/parallax/hero-bg-nature.jpg', fallback: '/images/projects/uiux-multimedia/uiux-pet-hotel-showcase.avif', alt: 'Nature background' },
  { id: 'frame', kind: 'browser-frame', src: '/images/hero/parallax/hero-browser-frame.svg', fallback: '/images/projects/uiux-multimedia/uiux-pet-hotel-official-website.avif', alt: 'Browser frame' },
  { id: 'ui-1', kind: 'ui-main', src: '/images/hero/parallax/hero-ui-screen-01.jpg', fallback: '/images/projects/uiux-multimedia/uiux-pet-hotel-official-website.avif', alt: 'Main UI screen' },
  { id: 'ui-2', kind: 'ui-secondary', src: '/images/hero/parallax/hero-ui-screen-02.jpg', fallback: '/images/projects/ecommerce-social/ecommerce-gift-edm-design.avif', alt: 'Secondary UI screen' },
  { id: 'float-card', kind: 'floating-card', src: '/images/hero/parallax/floating-paper-card.png', fallback: '/images/projects/logo-business-card/logo-business-card-grey-gold-deer.avif', alt: 'Floating paper card' },
  { id: 'float-palette', kind: 'floating-card', src: '/images/hero/parallax/floating-color-palette.png', fallback: '/images/projects/brand-identity/brand-identity-corner-98-real-estate.avif', alt: 'Floating color palette' },
  { id: 'nature-1', kind: 'nature', src: '/images/hero/parallax/floating-leaf-01.png', fallback: '/images/projects/illustration/illustration-collage.avif', alt: 'Leaf element' },
  { id: 'nature-2', kind: 'nature', src: '/images/hero/parallax/floating-flower-01.png', fallback: '/images/projects/illustration/illustration-framed-art.avif', alt: 'Flower element' },
  { id: 'foreground', kind: 'foreground', src: '/images/hero/parallax/foreground-plant-shadow.png', fallback: '/images/projects/illustration/illustration-dr-romantic.avif', alt: 'Foreground plant shadow' }
];
