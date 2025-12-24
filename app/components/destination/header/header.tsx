import styles from "./header.module.css";
import Image from "next/image";
import { useState } from "react";

export default function header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => setIsMenuOpen((prev) => !prev);
      const closeMenu = () => setIsMenuOpen(false);
    return(
        <>
        <section className={`${styles.overlayheader} ${styles.scrolled}`}>
        <div className={styles.brandlogo}>          
            <a href="/">                   
                <Image src="/data/logo.webp" alt="Travel Americas Logo" width={150} height={150}  sizes="(max-width: 768px) 100px, 150px" fetchPriority="high"/>
            </a>
        </div>
        <nav className={styles.mainnav}>
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
     ☰
          </button>
          <ul className={`${styles.navlinks} ${isMenuOpen ? styles.active : ""}`}>
            <li className={styles.closebtn}>
              <button onClick={closeMenu} aria-label="Close menu">✕</button>
            </li>
           <li style={{ cursor: "pointer" }}><a href="/majorcities/newyork">New York</a></li>
           <li style={{ cursor: "pointer" }}><a href="/majorcities/losangeles">Los Angeles</a></li>
           <li style={{ cursor: "pointer" }}><a href="/majorcities/lasvegas">Las Vegas</a></li>
           <li style={{ cursor: "pointer" }}><a href="/majorcities/orlando">Orlando</a></li> 
          </ul>
        </nav>
        </section>
        
        </>
    );
}