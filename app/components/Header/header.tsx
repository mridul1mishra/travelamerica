"use client";

import { StaticImageData } from "next/image";
import HeroBanner, { HeroBannerVariant } from "./HeroBanner";
import NavigationHeader, { HeaderLink } from "./NavigationHeader";
import "./header.css";

type HeaderProps = {
  image?: string | StaticImageData;
  bannerText?: string;
  variant?: HeroBannerVariant;
  links?: HeaderLink[];
};

const Header: React.FC<HeaderProps> = ({
  image,
  bannerText,
  variant = "default",
  links,
}) => {
  return (
    <>
      <NavigationHeader links={links} />
      {image ? (
        <HeroBanner image={image} bannerText={bannerText} variant={variant} />
      ) : null}
    </>
  );
};

export { HeroBanner, NavigationHeader };
export type { HeaderLink, HeaderProps };
export default Header;
