import Footer from "../components/Header/Footer/footer";
import Header from "../components/Header/header";
import styles from "./company.module.css";

// AboutPage schema previously lived in companydetails/layout.tsx, which incorrectly
// rendered its own <html>/<body>. Moved here so the layout can be a plain child.
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Us - Travels Americas",
  "url": "https://www.travelsamericas.com/companydetails",
  "description":
    "Learn more about Travels Americas, our mission to provide curated itineraries, travel tips, and resources for solo, group, and couple travelers across major US cities.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Travels Americas",
    "url": "https://www.travelsamericas.com",
    "logo": "https://www.travelsamericas.com/_next/image?url=%2Fdata%2Flogo3.png&w=3840&q=75",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "info@travelsamericas.com",
    },
    "foundingDate": "2023",
    "founder": { "@type": "Person", "name": "Mridul" },
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "Travels Americas",
    "url": "https://www.travelsamericas.com",
  },
};

export default function CompanyDetailsPage() {
return (
<>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
<Header image="" bannerText="" />
 <main className={styles.container}>
      <h1 className={styles.title}>Travels Americas</h1>
      

      <section className={styles.banner} aria-hidden="true">
        <div className={styles.bannerInner}>
          {/* Accessible hidden heading for screen readers */}
          <h2 style={{ position: 'absolute', left: '-9999px', top: 'auto' }}>Comapany Name: </h2>
          <img className={styles.imagebanner} src="/data/aboutus.jpeg" alt="About Travels Americas"></img>


        </div>

        
      </section>

      {/* Terms content (example first sections). Replace with your final terms. */}
      <article className={`prose ${styles.prose}`} aria-label="Terms and conditions">
        <div className={styles.list}>
        
        <p>Travels Americas Travel Co. helps travelers discover the beauty, culture, and adventure of the United States. From New York City’s bustling streets to the scenic national parks of the West, we provide reliable, up‑to‑date travel information to make every journey smooth, memorable, and exciting.</p>
        </div>
        <div className={styles.list}>
            <h2>Our Mission</h2>
            <p>We inspire and guide travelers with accurate, user‑friendly information about destinations, attractions, accommodations, and experiences across the USA.</p>
        </div>
        <div className={styles.list}>
            <h2>Our Vision</h2>
            <p>To be the most trusted companion for anyone exploring the United States, offering insights that turn every trip into an unforgettable adventure.</p>
        </div>
        <div className={styles.list}>
            <h2>Services We Provide:</h2>
            <ul>
                <li>City and state travel guides</li>
                <li>Top attractions, parks, museums, and landmarks</li>
                <li>Transportation tips: flights, trains, buses, car rentals</li>
                <li>Family, solo, and adventure travel suggestions</li>
                <li>Seasonal highlights and events</li>
            </ul>
        </div>
        <div>
            <h2>Why Choose Us?</h2>
            <p>We combine accurate information, local insights, and a traveler‑first approach to make exploring the USA hassle‑free and enjoyable. Whether it’s your first trip or a return visit, ExploreUSA Travel Co. guides you every step of the way.</p>
        </div>
        <div>
            <h2>Contact Us</h2>
            <p>info@travelsamericas.com</p>
        </div>

      </article>
    </main>
<Footer />
</>
)
}