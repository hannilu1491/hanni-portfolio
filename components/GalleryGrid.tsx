import FallbackImage from './FallbackImage';
export default function GalleryGrid({images}:{images:string[]}){return <div className="reveal mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-2">{images.map((src,i)=><div key={src+i} className="relative h-64 overflow-hidden rounded-xl"><FallbackImage src={src} alt="gallery" fill className="object-cover"/></div>)}</div>}
