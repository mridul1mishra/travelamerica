"use client"
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import "./header.css"; // keep your CSS

type HeroProps = {
  image: string | StaticImageData; // accept Next.js image imports
  bannerText: string;
};

const Header: React.FC<HeroProps> = ({ image, bannerText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Preload tags were previously emitted via <Head> from next/head, which is a no-op
  // in the App Router. The logo image already renders below with priority/fetchPriority
  // set, which is the supported App Router pattern.
  return (
    <>
    <section className="hero">
        <div style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "1295 / 832", marginTop: "130px" }}>
          <Image src={typeof image === "string" ? image : image.src} alt={bannerText} fill priority fetchPriority="high" decoding="async" style={{ objectFit: "cover", objectPosition: "bottom" }}/>
        </div>
      <header className={`overlay-header scrolled`}>
        <div className="brand-logo">
          <a href="/">
              <Image src="/Travels-Americas-logo-horizontal-v3.png" alt="Travels Americas Logo" fill style={{ objectFit: "contain" }} fetchPriority="high"/>
          </a>
        </div>
        <nav className="main-nav">
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
     ☰
          </button>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li className="close-btn">
              <button onClick={closeMenu} aria-label="Close menu">✕</button>
            </li>
           <li style={{ cursor: "pointer" }}><a href="/destination/nyc">New York</a></li>
           <li style={{ cursor: "pointer" }}><a href="/destination/la">Los Angeles</a></li>
           <li style={{ cursor: "pointer" }}><a href="/destination/lasvegas">Las Vegas</a></li>
           <li style={{ cursor: "pointer" }}><a href="/destination/orlando">Orlando</a></li>
          </ul>
        </nav>
      </header>

      <div className="hero-text">
        {
        pathname.includes("about") || pathname.includes("privacy") || pathname.includes("termsandcondition") ?
        <h1>{bannerText}</h1> : ""
        }
      </div>
    </section>
    </>
  );
};

export default Header;
