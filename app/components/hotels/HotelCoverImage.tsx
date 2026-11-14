"use client";

import { useState } from "react";

type HotelCoverImageProps = {
  src: string;
  hotelName: string;
  className?: string;
  width?: number;
  height?: number;
};

export default function HotelCoverImage({ src, hotelName, ...props }: HotelCoverImageProps) {
  const [failedSource, setFailedSource] = useState<string>();
  const unavailable = !src.trim() || failedSource === src;

  return (
    // Keep provider photos direct and use a local placeholder if they fail.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={unavailable ? "/destination/nyc-neighborhoods.png" : src}
      alt={unavailable ? `Photo unavailable for ${hotelName}` : hotelName}
      onError={unavailable ? undefined : () => setFailedSource(src)}
    />
  );
}
