"use client"
import Footer from "../components/Header/Footer/footer";
import Header from "../components/Header/header";
import banner from "../../public/data/termsandcondition.jpeg";
import styles from "./privacy.module.css";

export default function TermsPage() {
return (
<>
<Header image="" bannerText="" />
 <main className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      

      <section className={styles.banner} aria-hidden="true">
        <div className={styles.bannerInner}>
          {/* Accessible hidden heading for screen readers */}
          <h2 style={{ position: 'absolute', left: '-9999px', top: 'auto' }}>Travel site banner</h2>
          <img className={styles.imagebanner} src="data\majorcities\orlando\assets\privacybolicybanner.png" alt="privacy"></img>


        </div>

        
      </section>

      {/* Terms content (example first sections). Replace with your final terms. */}
      <article className={`prose ${styles.prose}`} aria-label="Terms and conditions">
        <div className={styles.list}>
        <h2>1. Information we collect</h2>
        <p>We do not ask users to create accounts or submit personal information directly. However, we may collect</p>
        <ul>
            <li>Information automatically collected
            <ul>
                <li>IP address, browser type, device type</li>
                <li>Pages visited, time spent, referring URL</li>
                <li>Cookies and analytics data</li>
            </ul></li>
            <li>Information from third-party services
            <ul>
                <li>Affiliate networks (e.g., Booking.com, Expedia, airlines)</li>
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Advertising platforms (e.g., Google Ads)</li>
            </ul></li>
        </ul>
        </div>
        <div className={styles.list}>
            <h2>2. Use of information</h2>
            <p>We use collected information to:</p>
            <ul>
                <li>Provide and improve content and Site functionality</li>
                <li>Measure engagement and traffic patterns</li>
                <li>Monitor and prevent fraud or abuse</li>
                <li>Track conversions for affiliate partnerships</li>
            </ul>
            <p>We do not sell or rent personal information.</p>
        </div>
        <div className={styles.list}>
            <h2>3. Cookies and Tracking technologies</h2>
            <p>We use cookies, pixels, and similar technologies to:</p>
            <ul>
                <li>Remember user preferences</li>
                <li>Track affiliate referrals</li>
                <li>Analyze usage through analytics tools</li>
            </ul>
            <p>You may disable cookies through your browser settings, but some features may not function properly.</p>
        </div>
        <div>
            <h2>4. Third Party links</h2>
            <p>This Site contains links to third-party travel providers. We are not responsible for their content, security, or privacy practices. You should review each provider’s own privacy policy before submitting information.</p>
        </div>
        <div>
            <h2>5. Data Security</h2>
            <p>We use commercially reasonable safeguards to protect collected data. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        </div>
        <div>
            <h2>6. Children’s Privacy (COPPA)</h2>
            <p>This Site is not directed to children under 13, and we do not knowingly collect data from children under 13. If you believe a child has submitted information, contact us to request deletion.</p>
        </div>
        <div>
            <h2>7. U.S. Governing Law & Jurisdiction</h2>
            <p>This Policy is governed by the laws of the United States. This Site is intended for U.S. users only. If you access from outside the U.S., you do so at your own risk.</p>
        </div>
        <div>
            <h2>8. Policy Updates</h2>
            <p>We may update this Policy from time to time. The “Effective Date” at the top indicates the most recent revision.</p>
        </div>
        <div>
            <h2>9. Contact Us</h2>
            <p>info@travelamerica.work</p>
        </div>

      </article>
    </main>
<Footer />
</>
)
}