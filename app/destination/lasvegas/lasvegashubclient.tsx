// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const attractions = [
  { name: "The Bellagio Fountains", blurb: "Free to watch. Shows every 30 min by day, every 15 min at night. Best viewed from the sidewalk opposite the hotel.", href: "/destination/lasvegas/bookings?tab=activities" },
  { name: "High Roller Observation Wheel", blurb: "550-ft wheel on the LINQ promenade. Best at sunset. Happy hour cabin available — open bar during your 30-min rotation.", href: "/destination/lasvegas/bookings?tab=activities" },
  { name: "Fremont Street Experience", blurb: "Downtown's covered LED canopy with free live music nightly. A grittier, older Vegas vibe worth a half-evening.", href: "/destination/lasvegas/bookings?tab=activities" },
  { name: "Hoover Dam", blurb: "30-min drive from the Strip. Self-guided or guided tours. Combine with a stop at Lake Mead for a full day out.", href: "/destination/lasvegas/bookings?tab=activities" },
  { name: "Grand Canyon West Rim", blurb: "2.5-hr drive — the closest canyon rim to Las Vegas. The Skywalk glass bridge is the key attraction. Book in advance.", href: "/destination/lasvegas/bookings?tab=activities" },
  { name: "The Mob Museum", blurb: "Downtown. Genuinely excellent museum on organized crime in America. Allow 2–3 hours. Skip-the-line tickets available.", href: "/destination/lasvegas/bookings?tab=activities" },
];

const neighborhoods = [
  { name: "The Strip (Center)", vibe: "Most hotels, casinos, shows and restaurants within walking distance. Loud and busy 24/7.", bestFor: "First-time visitors, nightlife" },
  { name: "The Strip (North)", vibe: "Quieter end near the Stratosphere. Budget hotel options. Less walking distance to mid-Strip landmarks.", bestFor: "Budget stays, longer trips" },
  { name: "Downtown / Fremont", vibe: "Older, grittier, more local. Lower hotel prices. Fremont Street Experience is the centrepiece.", bestFor: "Budget travelers, repeat visitors" },
  { name: "Henderson", vibe: "Residential suburb, 20 min from the Strip. Quieter, family-friendly. Lake Las Vegas nearby.", bestFor: "Families, outdoor activities" },
  { name: "Summerlin", vibe: "Upscale western suburb. Red Rock Canyon access. Peaceful, away from the casino energy.", bestFor: "Hiking, nature, quieter stays" },
];

const experiences = [
  { title: "Shows & Entertainment", blurb: "Cirque du Soleil, residency concerts, comedy clubs, magic shows — book early. Prices range from $30 to $200+." },
  { title: "Day Trips", blurb: "Hoover Dam (30 min), Valley of Fire (1 hr), Grand Canyon West (2.5 hr), Zion National Park (2.5 hr)." },
  { title: "Dining & Nightlife", blurb: "Every major chef has a restaurant on the Strip. Gordon Ramsay, Guy Fieri, Wolfgang Puck. Buffets still exist but are no longer budget options." },
  { title: "Casinos & Gaming", blurb: "Table minimums vary widely. Downtown casinos have lower minimums than Strip properties. Set a budget before you arrive." },
];

const whereToStay = [
  { title: "Mid-Strip Hotels", description: "Closest to the majority of attractions, dining and shows. Most expensive but saves on taxis. Best for first-timers.", href: "/destination/lasvegas/bookings?tab=hotels" },
  { title: "Downtown Las Vegas Hotels", description: "Lower nightly rates, Fremont Street access, more local atmosphere. 15 min from the Strip by car.", href: "/destination/lasvegas/bookings?tab=hotels" },
];

const itineraries = [
  { title: "3-Day Las Vegas Itinerary", description: "Day 1: Strip walk + Bellagio + shows. Day 2: Day trip to Hoover Dam or Valley of Fire. Day 3: Fremont Street + Museum + late night.", href: "/destination/lasvegas/bookings" },
  { title: "Las Vegas on a Budget", description: "Free attractions (fountains, hotel lobbies, Fremont canopy), cheap eats, off-Strip casinos, and when to find the best room rates.", href: "/destination/lasvegas/bookings?tab=flights" },
];

export default function LasVegasHubClient() {
  return (
    <main>
      <Header image="/data/majorcities/lasvegas/assets/lasvegas.webp" bannerText="Las Vegas Travel Guide" />

      {/* Slim booking CTA */}
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Ready to book? Compare cheap flights to LAS, hotels, and activities →</span>
        <Link href="/destination/lasvegas/bookings?tab=flights" className={styles.slimCtaBtn} aria-label="Book your Las Vegas trip">Book your trip</Link>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <h1>Las Vegas Travel Guide</h1>
        <p>For first-timers, solo travelers, and anyone who wants to skip the tourist traps. Real planning for a real Vegas trip — where to stay, what the Strip is actually like, and what to do beyond the casinos.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/bookings?tab=flights" className={styles.primaryCta}>Compare flights to LAS</Link>
          <Link href="#neighborhoods" className={styles.secondaryCta}>Where to stay in Vegas</Link>
        </div>
        <p className={styles.updated}>Updated for 2026</p>
      </section>

      {/* Why Las Vegas */}
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="why-lv">
        <h2 id="why-lv" className={styles.sectionTitle}>Why Las Vegas Works for So Many Trips</h2>
        <p className={styles.sectionIntro}>Vegas is one of the few cities that genuinely works for every type of traveler — you just have to plan for the version you actually want.</p>
        <div className={styles.whyGrid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Everything is Walkable from the Strip</h3>
            <p className={styles.cardBody}>The 4-mile Las Vegas Boulevard puts dozens of casino-resorts, restaurants, and entertainment venues within walking distance. Most visitors spend 80% of their trip in a 10-block radius.</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>World-Class Shows and Dining</h3>
            <p className={styles.cardBody}>Residency concerts, Cirque du Soleil, comedy, magic, and every major celebrity chef — Vegas has more live entertainment per square mile than almost anywhere else.</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Day Trips to Natural Wonders</h3>
            <p className={styles.cardBody}>Hoover Dam, Valley of Fire, Red Rock Canyon, and Grand Canyon West are all within 2.5 hours. Vegas is one of the best hubs for Southwest US road trips.</p>
          </article>
        </div>
      </section>

      {/* Top Attractions */}
      <section className={styles.section} aria-labelledby="attractions-lv">
        <h2 id="attractions-lv" className={styles.sectionTitle}>Top Attractions Worth Your Time</h2>
        <p className={styles.sectionIntro}>What to prioritize, what to skip, and how long each actually takes.</p>
        <div className={styles.grid}>
          {attractions.map(({ name, blurb, href }) => (
            <Link key={name} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </Link>
          ))}
        </div>
        <Link href="/destination/lasvegas/bookings?tab=activities" className={styles.seeAll}>See all things to do in Las Vegas →</Link>
      </section>

      {/* Neighborhoods */}
      <section id="neighborhoods" className={`${styles.section} ${styles.altBg}`} aria-labelledby="neighborhoods-lv">
        <h2 id="neighborhoods-lv" className={styles.sectionTitle}>Las Vegas Neighborhoods</h2>
        <p className={styles.sectionIntro}>Where you stay determines how you experience Vegas. The Strip and Downtown are very different trips.</p>
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

      {/* Experiences */}
      <section className={styles.section} aria-labelledby="experiences-lv">
        <h2 id="experiences-lv" className={styles.sectionTitle}>What to Do in Las Vegas</h2>
        <p className={styles.sectionIntro}>Vegas is much more than casinos. Here are the four categories that shape most trips.</p>
        <div className={styles.grid}>
          {experiences.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Where to Stay */}
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="wheretostay-lv">
        <h2 id="wheretostay-lv" className={styles.sectionTitle}>Where to Stay in Las Vegas</h2>
        <p className={styles.sectionIntro}>Hotel choice matters more in Vegas than most cities — proximity to the Strip determines your entire logistics.</p>
        <div className={styles.grid}>
          {whereToStay.map(({ title, description, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Itineraries */}
      <section className={styles.section} aria-labelledby="itineraries-lv">
        <h2 id="itineraries-lv" className={styles.sectionTitle}>Sample Itineraries</h2>
        <p className={styles.sectionIntro}>How to structure a Vegas trip so you actually see and do the things that matter.</p>
        <div className={styles.grid}>
          {itineraries.map(({ title, description, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Full booking CTA */}
      <div className={styles.bookingStrip}>
        <h2>Ready to book your Las Vegas trip?</h2>
        <p>Compare cheap flights to LAS, browse Strip hotels, and book tickets for shows and attractions.</p>
        <Link href="/destination/lasvegas/bookings?tab=flights" className={styles.bookingBtn} aria-label="Book Las Vegas trip">Compare flights, hotels &amp; tickets</Link>
      </div>

      <Foot