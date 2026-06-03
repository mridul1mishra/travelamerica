"use client";
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const foodCategories = [
  { title: "Tacos (The Real Ones)", blurb: "Tacos 1986 in WeHo has a perpetual line for $5 birria tacos — it moves fast. Leo's Tacos Truck on La Brea Ave runs 24 hours. Guisados in Echo Park has braised taco fillings unlike anywhere else. Avoid tourist-facing 'Mexican' restaurants near Hollywood Blvd.", href: "/destination/la/bookings?tab=restaurants" },
  { title: "Grand Central Market", blurb: "Downtown's 100-year-old covered market hall has 40+ stalls covering everything from Eggslut breakfast sandwiches to Sticky Rice Thai. Budget $10–$20 per person. Open daily 8am–9pm. Best visited on a weekday to avoid weekend crowds.", href: "/destination/la/bookings?tab=restaurants" },
  { title: "Koreatown", blurb: "The best Korean food outside Korea. Park's BBQ on Vermont Ave is the premium option. Kobawoo House for bossam. OB Bear for fried chicken and beer at midnight. Most places are open until 2–3am on weekends. Parking is difficult — Uber recommended.", href: "/destination/la/bookings?tab=restaurants" },
  { title: "Ramen & Japanese", blurb: "Tsujita LA in Sawtelle Japantown has the best tsukemen (cold dipping ramen) in the city — expect a 30–45 min wait. Sawtelle Blvd itself is a Japanese food corridor with 20+ restaurants in two blocks. Also worth it: Marugame Udon in Little Tokyo.", href: "/destination/la/bookings?tab=restaurants" },
  { title: "Farmers Markets", blurb: "Hollywood Farmers Market (Sunday, 8am–1pm on Ivar Ave) has 150+ vendors. Santa Monica Main Street (Wednesday 8am–1:30pm) and Santa Monica Pico (Saturday 8am–1pm) are the coastal options. All are free to browse and excellent for produce, pastries and prepared food.", href: "/destination/la/bookings?tab=restaurants" },
  { title: "Splurge Restaurants", blurb: "Bestia in the Arts District ($80–$120pp, book 3–4 weeks out) for Italian. Majordomo in Chinatown (David Chang, $100+) for Korean-American fusion. Nobu Malibu if you want ocean views with the bill. Gjelina on Abbot Kinney is mid-range but consistently excellent.", href: "/destination/la/bookings?tab=restaurants" },
];

export default function LAFoodClient() {
  return (
    <main>
      <Header image="/data/majorcities/losangeles/assets/losangeles.jpeg" bannerText="Best Food in Los Angeles" />
      <section className={styles.hero}>
        <h1>Best Food in Los Angeles</h1>
        <p>LA has one of the most diverse food cities in the world — but the best spots require knowing where to look. This guide cuts through the tourist traps and covers where locals actually eat.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/bookings?tab=restaurants" className={styles.primaryCta}>Book restaurant reservations</Link>
          <Link href="/destination/la/neighborhood-guide" className={styles.secondaryCta}>Explore neighborhoods</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="food-la">
        <h2 id="food-la" className={styles.sectionTitle}>Where to Eat in LA</h2>
        <p className={styles.sectionIntro}>Six categories covering the full range — from $5 street tacos to $100 tasting menus.</p>
        <div className={styles.grid}>
          {foodCategories.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Book LA restaurant reservations</h2>
        <p>Reserve tables at top LA restaurants — no more showing up to a two-hour wait.</p>
        <Link href="/destination/la/bookings?tab=restaurants" className={styles.bookingBtn}>Browse restaurants</Link>
      </div>
      <Footer />
    </main>
  );
}
