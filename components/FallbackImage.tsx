"use client";

import Image, { ImageProps } from "next/image";
import { useMemo, useState } from "react";

type FallbackImageProps = ImageProps & {
  fallbackSrc?: string;
};

export default function FallbackImage({ fallbackSrc = "/images/hero/homepage-hero-banner.jpg", src, alt, ...props }: FallbackImageProps) {
  const initialSrc = useMemo(() => src, [src]);
  const [currentSrc, setCurrentSrc] = useState(initialSrc);
  const [errored, setErrored] = useState(false);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={errored ? "" : alt}
      onError={() => {
        if (!errored) {
          setCurrentSrc(fallbackSrc);
          setErrored(true);
        }
      }}
    />
  );
}
