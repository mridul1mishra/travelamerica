"use client"
import { useState, useEffect, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import "./header.css"; // keep your CSS
import Head from "next/head";

type HeroProps = {
  image: string | StaticImageData; // accept Next.js image imports
  bannerText: ReactNode;
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
  return (
    <>
    <Head>
        <link
          rel="preload"
          as="image"
          href="/data/logo.webp"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/data/logo3.webp"
          type="image/png"
        />
        <link
    rel="preload"
    as="image"
    href="/data/logo-300.webp"
    type="image/webp"
  />
  <link
    rel="preload"
    as="image"
    href="/data/logo3-150.webp"
    type="image/webp"
  />
  <link
    rel="preload"
    as="image"
    href="/data/logo3-300.webp"
    type="image/webp"
  />
      </Head>
    <section className="hero">
        <div style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "1295 / 832" }}>
  <Image
    src={typeof image === "string" ? image : image.src}
    alt="Travel Americas banner showing city skyline"
    fill
    priority
    fetchPriority="high"
    decoding="async"
    style={{ objectFit: "cover" }}
  />
</div>
      <header className={`overlay-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="brand-logo">          
          <a href="/">
    {isScrolled ? (
      <Image src="/data/logo.png" alt="Travel Americas Logo" width={150} height={150} sizes="(max-width: 768px) 100px, 150px" fetchPriority="high"/>
    ) : (
      <Image src="/data/logo3.png" alt="Travel Americas Logo" width={150} height={150}  sizes="(max-width: 768px) 100px, 150px" fetchPriority="high"/>
      
    )}
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
           <li style={{ cursor: "pointer" }}><a href="/majorcities/newyork">New York</a></li>
           <li style={{ cursor: "pointer" }}><a href="/majorcities/losangeles">Los Angeles</a></li>
           <li style={{ cursor: "pointer" }}><a href="/majorcities/lasvegas">Las Vegas</a></li>
           <li style={{ cursor: "pointer" }}><a href="/majorcities/orlando">Orlando</a></li> 
          </ul>
        </nav>
      </header>

      <div className="hero-text">
        {
        pathname.includes("companydetails") || pathname.includes("privacy") || pathname.includes("termsandcondition") ?
        <h1>{bannerText}</h1> : <h2></h2>
        }
      </div>
    </section>
    </>
  );
};

export default Header;
