"use client"
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
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
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className="hero"
       style={{ backgroundImage: `url(${typeof image === 'string' ? image : image.src})` }}
    >
      <header className={`overlay-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="brand-logo">
          <a href="/"><img src={isScrolled ? "/data/logo.png" : "/data/logo3.png"} /></a>
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
        <h1>{bannerText}</h1>
      </div>
    </section>
  );
};

export default Header;
