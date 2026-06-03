"use client";
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const neighborhoods = [
  { name: "Santa Monica", vibe: "LA's most walkable neighborhood. Beach, pier, Third Street Promenade for shopping, and a strong café culture. Expensive to stay, but you save on transport. Safe day and night.", bestFor: "First-timers, beach travelers, families" },
  { name: "Venice", vibe: "Beach boardwalk, Abbot Kinney Blvd boutiques, street art, and a laid-back creative scene. Gentrified but still eclectic. The canal district is beautiful and quiet. Some rough edges on the boardwalk at night.", bestFor: "Creatives, younger travelers, food and boutique shopping" },
  { name: "West Hollywood (WeHo)", vibe: "Sunset Strip, rooftop bars, excellent restaurants, LGBTQ+ epicenter. Very social. Melrose Ave is good for vintage and independent shops. Mostly safe and well-lit at night.", bestFor: "Nightlife, dining, LGBTQ+ travelers" },
  { name: "Silver Lake / Los Feliz", vibe: "Hipster coffee culture, independent restaurants, the Silver Lake Reservoir walk. No beach access, no metro. Feels like a small city neighborhood inside a car city. Excellent food scene.", bestFor: "Foodies, digital nomads, repeat visitors" },
  { name: "Downtown LA (DTLA)", vibe: "Grand Central Market, The Broad, Staples Center, Arts District galleries, Angel's Flight. Best value accommodation in central LA. Some areas still rough — the gentrification is uneven.", bestFor: "Budget travelers, arts and food focus, events" },
  { name: "Koreatown", vibe: "One of the densest, most walkable areas in LA with 24-hour Korean restaurants, karaoke bars, and a serious food scene. No tourist sights, but excellent for eating and nightlife. Mostly safe in the main commercial strips.", bestFor: "Food travelers, nightlife, budget stays" },
  { name: "Beverly Hills", vibe: "Rodeo Drive, Greystone Mansion, luxury hotels, and the safest streets in LA. Very car-dependent — nothing is walkable to anywhere else. Expensive but impeccable.", bestFor: "Luxury travel, special occasions, business trips" },
  { name: "Hollywood Hills / Mulholland Drive", vibe: "Panoramic views, winding residential roads, and quiet luxury. No amenities nearby — you need a car for everything. Best experienced by driving Mulholland at sunset.", bestFor: "Scenic drives, photography, high-end Airbnb stays" },
];

export default function LANeighborhoodGuideClient() {
  return (
    <main>
      <Header image="/data/majorcities/losangeles/assets/losangeles.jpeg" bannerText="Los Angeles Neighborhood Guide" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Find hotels in your preferred LA neighborhood →</span>
        <Link href="/destination/la/bookings?tab=hotels" className={styles.slimCtaBtn}>Browse hotels</Link>
      </div>
      <section className={styles.hero}>
        <h1>Los Angeles Neighborhood Guide</h1>
        <p>LA is not one city — it is dozens of distinct neighborhoods spread across 500 square miles. This guide explains what each major area is actually like, who it suits, and what it costs.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/best-areas-to-stay" className={styles.primaryCta}>Where to stay</Link>
          <Link href="/destination/la/safety-guide" className={styles.secondaryCta}>LA safety guide</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="neighborhoods-la">
        <h2 id="neighborhoods-la" className={styles.sectionTitle}>LA Neighborhoods Explained</h2>
        <p className={styles.sectionIntro}>Eight neighborhoods that cover the full range of what LA offers visitors.</p>
        <div className={styles.grid}>
          {neighborhoods.map(({ name, vibe, bestFor }) => (
            <article key={name} className={styles.card}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardBody}>{vibe}</p>
              <p className={styles.cardMeta}>Best for: {bestFor}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Book hotels in the right LA neighborhood</h2>
        <p>Compare neighborhoods by price, location and guest ratings.</p>
        <Link href="/destination/la/bookings?tab=hotels" className={styles.bookingBtn}>Browse LA hotels</Link>
      </div>
      <Footer />
    </main>
  );
}
