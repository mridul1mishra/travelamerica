"use client"
import Footer from "../components/Header/Footer/footer";
import Header from "../components/Header/header";
import banner from "../../public/data/termsandcondition.jpeg";
import styles from "./company.module.css";

export default function TermsPage() {
return (
<>
<Header image="" bannerText="" />
 <main className={styles.container}>
      <h1 className={styles.title}>Travel Americas</h1>
      

      <section className={styles.banner} aria-hidden="true">
        <div className={styles.bannerInner}>
          {/* Accessible hidden heading for screen readers */}
          <h2 style={{ position: 'absolute', left: '-9999px', top: 'auto' }}>Comapany Name: </h2>
          <img className={styles.imagebanner} src="data\aboutus.jpeg" alt="privacy"></img>


        </div>

        
      </section>

      {/* Terms content (example first sections). Replace with your final terms. */}
      <article className={`prose ${styles.prose}`} aria-label="Terms and conditions">
        <div className={styles.list}>
        
        <p>Travel America Travel Co. is dedicated to helping travelers experience the beauty, culture, and adventure of the United States. From the bustling streets of New York City to the scenic national parks of the West, we provide reliable, up-to-date travel information to make your journey smooth, memorable, and exciting.</p>
        </div>
        <div className={styles.list}>
            <h2>Our Mission</h2>
            <p>To inspire and guide travelers with accurate, user-friendly information about destinations, attractions, accommodations, and experiences across the USA.</p>
        </div>
        <div className={styles.list}>
            <h2>Our Vision</h2>
            <p>To become the most trusted companion for anyone exploring the United States, offering insights that turn every trip into an unforgettable adventure.</p>
        </div>
        <div className={styles.list}>
            <h2>Services We Provide:</h2>
            <ul>
                <li>Detailed city and state guides</li>
                <li>Information on top attractions, parks, museums, and landmarks</li>
                <li>Transportation tips: flights, trains, buses, and car rentals</li>
                <li>Family-friendly, solo, and adventure travel suggestions</li>
                <li>Seasonal highlights and events</li>
            </ul>
        </div>
        <div>
            <h2>Why Choose Us?</h2>
            <p>We combine accurate information, local insights, and a traveler-first approach to make exploring the USA hassle-free and enjoyable. Whether you’re planning your first trip or revisiting your favorite cities, ExploreUSA Travel Co. is here to guide every step of your journey.</p>
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