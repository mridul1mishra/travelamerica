"use client";

import Image, { StaticImageData } from "next/image";

type HeroBannerProps = {
  image: string | StaticImageData;
  bannerText?: string;
  variant?: "default" | "wide";
};

export default function HeroBanner({ image, bannerText, variant = "default" }: HeroBannerProps) {
  const imageSrc = typeof image === "string" ? image : image.src;
  const altText = bannerText || "Travel America destination banner";

  return (
    <section className={`hero ${variant === "wide" ? "hero--wide" : ""}`}>
      <div className="hero-image-wrapper">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          priority
          fetchPriority="high"
          decoding="async"
          style={{
            objectFit: "cover",
            objectPosition: variant === "wide" ? "center" : "bottom",
          }}
        />
      </div>
      {bannerText ? (
        <div className="hero-text">
          <h1 className="hero-heading">{bannerText}</h1>
        </div>
      ) : null}
    </section>
  );
}
