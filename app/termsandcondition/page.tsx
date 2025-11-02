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
          <img className={styles.imagebanner} src="data\terms-and-condition.png" alt="privacy"></img>

        </div>

        
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