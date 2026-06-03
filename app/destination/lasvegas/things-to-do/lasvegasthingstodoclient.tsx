// Server Component — no hooks used.
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const categories = [
  { title: "The Strip & Casino Resorts", blurb: "Walk the 4-mile boulevard from Mandalay Bay to the Stratosphere. Free attractions: Bellagio fountains (every 15 min at night), Mirage volcano, Caesar's Forum shops. Allow a full day for a proper end-to-end walk.", href: "/destination/lasvegas/bookings?tab=activities" },
  { title: "Shows & Entertainment", blurb: "Cirque du Soleil (O at Bellagio is the best), residency concerts at T-Mobile Arena, comedy clubs, magic shows. Book at least 2–3 days ahead. Prices from $30 to $200+.", href: "/destination/lasvegas/bookings?tab=activities" },
  { title: "Fremont Street Experience", blurb: "Downtown's covered LED canopy with free live music every night from 6pm. SlotZilla zip line runs overhead. A grittier, older Vegas — worth one evening.", href: "/destination/lasvegas/bookings?tab=activities" },
  { title: "Museums & Culture", blurb: "The Mob Museum (Downtown, $30, allow 2–3 hrs), Natural History Museum, Neon Museum (outdoor boneyard of old casino signs, $25, best at night), AREA15 immersive art campus.", href: "/destination/lasvegas/bookings?tab=activities" },
  { title: "Day Trips", blurb: "Hoover Dam 30 min away. Valley of Fire 1 hr — stunning red rock formations. Grand Canyon West Rim 2.5 hr with the Skywalk. Zion National Park 2.5 hr for serious hikers.", href: "/destination/lasvegas/bookings?tab=activities" },
  { title: "Outdoor Activities", blurb: "Red Rock Canyon (30 min, free scenic drive or 13+ hiking trails). Lake Mead for kayaking and paddleboarding. Spring Mountains for cooler air and pine forests in summer.", href: "/destination/lasvegas/bookings?tab=activities" },
];

export default function LasVegasThingsToDoClient() {
  return (
    <main>
      <Header image="/data/majorcities/lasvegas/assets/lasvegas.webp" bannerText="Things to Do in Las Vegas" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Book skip-the-line tickets, show seats and activity tours →</span>
        <Link href="/destination/lasvegas/bookings?tab=activities" className={styles.slimCtaBtn}>See tickets & tours</Link>
      </div>
      <section className={styles.hero}>
        <h1>Things to Do in Las Vegas</h1>
        <p>Las Vegas is more than casinos. This guide covers what to prioritize across six categories — from free Strip walks to Grand Canyon day trips — with realistic time estimates and the practical tips that actually matter.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/bookings?tab=activities" className={styles.primaryCta}>Book tickets & tours</Link>
          <Link href="/destination/lasvegas/itinerary" className={styles.secondaryCta}>See 3-day itinerary</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="categories-lv">
        <h2 id="categories-lv" className={styles.sectionTitle}>What to Do in Las Vegas</h2>
        <p className={styles.sectionIntro}>Six categories that cover the full range of what Vegas offers — prioritize by what matters most to you.</p>
        <div className={styles.grid}>
          {categories.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Ready to book Las Vegas activities?</h2>
        <p>Skip-the-line tickets, show seats, and guided tours — compare prices and book in advance.</p>
        <Link href="/destination/lasvegas/bookings?tab=activities" className={styles.bookingBtn}>Browse activities</Link>
      </div>
      <Footer />
    </main>
  );
}
