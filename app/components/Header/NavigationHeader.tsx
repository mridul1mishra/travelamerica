"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MemberNavigation from "../auth/MemberNavigation";
import memberStyles from "../auth/MemberNavigation.module.css";
import "./header.css";

export type HeaderLink = {
  href: string;
  label: string;
};

const defaultLinks: HeaderLink[] = [
  { href: "/destination/nyc", label: "New York" },
  { href: "/destination/la", label: "Los Angeles" },
  { href: "/destination/lasvegas", label: "Las Vegas" },
  { href: "/destination/orlando", label: "Orlando" },
];

type NavigationHeaderProps = {
  links?: HeaderLink[];
  prefetch?: boolean;
  memberReturnTo?: string;
  memberAction?: "rating" | "prices";
};

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  links = defaultLinks,
  prefetch,
  memberReturnTo,
  memberAction,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`overlay-header scrolled ${memberStyles.header}`}>
      <div className="brand-logo">
        <Link prefetch={prefetch} href="/" aria-label="Travels Americas home" onClick={closeMenu}>
          <Image
            src="/Travels-Americas-logo-horizontal-v3.png"
            alt="Travels Americas Logo"
            fill
            style={{ objectFit: "contain" }}
            fetchPriority="high"
          />
        </Link>
      </div>

      <nav className="main-nav" aria-label="Primary navigation">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span aria-hidden="true">&#9776;</span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li className="close-btn">
            <button onClick={closeMenu} aria-label="Close menu" type="button">
              <span aria-hidden="true">&#215;</span>
            </button>
          </li>
          {links.map((link) => (
            <li key={link.href}>
              <Link prefetch={prefetch} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
          <MemberNavigation onNavigate={closeMenu} returnTo={memberReturnTo} action={memberAction} />
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;
