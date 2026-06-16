"use client";
import Image, { StaticImageData } from "next/image";
import "@/app/components/Header/header.css";

export type HeroBannerVariant = "default" | "wide";

export type HeroBannerProps = {
  image: string | StaticImageData;
  bannerText?: string;
  variant?: HeroBannerVariant;
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  image,
  bannerText,
  variant = "default",
}) => {
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
};

export default HeroBanner;
