import Image from 'next/image';
export default function ImageShowcase({src,alt}:{src:string;alt:string}){return <div className="reveal mx-auto my-8 max-w-5xl px-6"><div className="relative h-[460px] overflow-hidden rounded-2xl"><Image src={src} alt={alt} fill className="object-cover"/></div></div>}
