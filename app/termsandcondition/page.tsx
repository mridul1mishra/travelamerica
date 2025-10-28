"use client"
import Footer from "../components/Header/Footer/footer";
import Header from "../components/Header/header";
import banner from "../../public/data/termsandcondition.jpeg";
import styles from "../termsandcondition/termsstyles.module.css";

export default function TermsPage() {
return (
<>
<Header image="" bannerText="" />
 <main className={styles.container}>
      <h1 className={styles.title}>Terms of Service — Travel Americas</h1>
      

      <section className={styles.banner} aria-hidden="true">
        <div className={styles.bannerInner}>
          {/* Accessible hidden heading for screen readers */}
          <h2 style={{ position: 'absolute', left: '-9999px', top: 'auto' }}>Travel site banner</h2>

          {/* Decorative SVG illustration — face free, animated shapes */}
          <svg
            className={styles.bannerSvg}
            viewBox="0 0 1200 360"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#7dd3fc" />
                <stop offset="1" stopColor="#60a5fa" />
              </linearGradient>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0" stopColor="#fde68a" />
                <stop offset="1" stopColor="#fb923c" />
              </linearGradient>
              <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="12" result="b" />
                <feBlend in="SourceGraphic" in2="b" />
              </filter>
            </defs>

            {/* Background soft shapes */}
            <rect width="1200" height="360" fill="#f8fafc" />

            {/* left panel - solo (backpack + hill) */}
            <g transform="translate(70,40)">
              <ellipse cx="160" cy="220" rx="165" ry="60" fill="#eff6ff" />
              <path className="shape--float shape--slow" d="M30 210 Q120 90 240 210 L30 210" fill="#e0f2fe" opacity="0.9" />
              {/* backpack icon (abstract) */}
              <g transform="translate(120,90) scale(0.9)">
                <rect x="-22" y="-14" width="44" height="56" rx="8" fill="#60a5fa" />
                <rect x="-10" y="-6" width="20" height="12" rx="4" fill="#ffffff" opacity="0.12" />
                <path d="M-22 18 q22 14 44 0" fill="#3b82f6" opacity="0.95" />
              </g>
            </g>

            {/* center panel - group (pin cluster + skyline) */}
            <g transform="translate(390,20)">
              <rect x="0" y="30" width="320" height="180" rx="20" fill="url(#g1)" opacity="0.12" />
              <g className="shape--float shape--fast" transform="translate(120,70) scale(1)">
                {/* cluster pins (abstract) */}
                <g transform="translate(-40,0)">
                  <circle cx="0" cy="0" r="16" fill="#fb923c" />
                  <path d="M0 12 L6 28 L-6 28 Z" fill="#fb923c" />
                </g>
                <g transform="translate(40,10)">
                  <circle cx="0" cy="0" r="12" fill="#fbbf24" />
                  <path d="M0 10 L4 22 L-4 22 Z" fill="#fbbf24" />
                </g>
                <g transform="translate(0,-8)">
                  <circle cx="0" cy="0" r="10" fill="#34d399" />
                </g>
              </g>
            </g>

            {/* right panel - couple (rings/heart + sea hint) */}
            <g transform="translate(820,50)">
              <rect x="0" y="24" width="300" height="200" rx="24" fill="url(#g2)" opacity="0.10" />
              <g className="shape--float shape--slow" transform="translate(180,120) scale(1)">
                {/* two rings overlapping (abstract couple symbol) */}
                <circle cx="-18" cy="0" r="30" stroke="#fb923c" strokeWidth="8" fill="none" opacity="0.98" />
                <circle cx="18" cy="0" r="30" stroke="#f97316" strokeWidth="8" fill="none" opacity="0.95" />
                {/* small wave lines to indicate sea */}
                <path d="M-60 42 q15 -8 30 0 q15 -8 30 0" stroke="#06b6d4" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.9"/>
              </g>
            </g>

            {/* gentle floating ornamental circles */}
            <g>
              <circle className="shape--float shape--slow" cx="50" cy="50" r="8" fill="#60a5fa" opacity="0.12" />
              <circle className="shape--float shape--fast" cx="1150" cy="70" r="10" fill="#fb923c" opacity="0.10" />
              <circle className="shape--float" cx="1050" cy="22" r="6" fill="#34d399" opacity="0.09" />
            </g>
          </svg>

        </div>

        <div className={styles.bannerText}>Travel Guides • Solo · Group · Couples</div>
      </section>

      {/* Terms content (example first sections). Replace with your final terms. */}
      <article className={`prose ${styles.prose}`} aria-label="Terms and conditions">
        <h2>1. Nature of Service</h2>
        <p>This Site provides travel-related information, guides, reviews, and affiliate recommendations for flights, hotels, transport, and attractions. We do not sell travel services directly and are not travel agency.</p>

        <h2>2. U.S. Jurisdiction & Intended Audience</h2>
        <p>This Site is intended for users located in the United States only. We make no claims that content is appropriate or lawful outside the U.S.</p>

        <h2>3. No Professional or Booking Advice</h2>
        <p>All content is provided for informational purposes only and should not be relied upon as professional, legal, financial, or booking advice. We do not guarantee accuracy or timeliness.</p>

        <h2>4. Third-Party Services</h2>
        <p>Any bookings, cancellations, disputes, or services obtained through third parties are governed by those providers’ terms. We are not responsible for delays, damages, losses, or refunds arising from third-party services.</p>
        <h2>5. User Conduct</h2>
        <p>You agree not to:</p>
            <ul>
                <li>Use the Site for any unlawful purpose</li>
                <li>Scrape, copy, or reproduce content without permission</li>
                <li>Interfere with Site functionality or security</li>
            </ul>
        <h2>6. Intellectual Property</h2>
        <p>All Site content is owned or licensed by us. You may not copy, reproduce, modify, or distribute without prior written consent.</p>
        <h2>7. Disclaimer of Warranties</h2>        
        <p>The Site is provided “AS IS” and “AS AVAILABLE” without any express or implied warranties, including fitness for a particular purpose or non-infringement.</p>
        <h2>8. Limitation of liability</h2>
        <p>To the fullest extent permitted under U.S. law, we are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site or reliance on any information.</p>
        <h2>9. Contact Us</h2>
        <p>info@travelamerica.work</p>

      </article>
    </main>
<Footer />
</>
)
}