import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import cityWhyTrustData from "@/content/destination/lasvegas/neighborhood-guide/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import cityFaqData from "@/content/destination/lasvegas/neighborhood-guide/faq/faqsection.json";
import styles from "@/app/destination/city-hub.module.css";

const neighborhoods = [
  { name: "Mid-Strip", vibe: "The centre of everything — Bellagio, Cosmopolitan, Aria, Vdara, Park MGM, and the T-Mobile Arena all sit here. Walking distance to the majority of shows, restaurants, and free attractions. Most expensive but zero logistics: you never need a car.", bestFor: "First-timers, short trips, anyone who wants maximum convenience" },
  { name: "South Strip", vibe: "Mandalay Bay, Luxor, Excalibur, MGM Grand. Cheaper than mid-Strip by $30–$60/night. A 15–20 min walk north to the Bellagio, or a $10 Uber. Good balance of access and price. The T-Mobile Arena events draw crowds on this end.", bestFor: "Budget-conscious travelers, groups, families" },
  { name: "North Strip", vibe: "Stratosphere (now renamed Strat), Circus Circus, Resorts World. Furthest from the action — 25-min walk or short cab to mid-Strip. Cheapest Strip rooms, often under $50/night on weekdays. The Strat tower and thrill rides are unique to this end.", bestFor: "Very budget stays, travelers who Uber everywhere" },
  { name: "Downtown / Fremont Street", vibe: "Old Vegas. The Fremont Street Experience LED canopy covers four blocks with free nightly light shows. Hotels like the Golden Nugget are $40–$80 cheaper than Strip equivalents. Grittier and more local. 15 min by car from mid-Strip.", bestFor: "Repeat visitors, budget travelers, those who want the vintage Vegas vibe" },
  { name: "Summerlin", vibe: "Upscale west-side suburb. Red Rock Canyon is 15 min away. Downtown Summerlin outdoor mall, quiet residential streets, and family-oriented. Requires a car for everything. None of the casino energy.", bestFor: "Families, hikers, week-long stays away from the Strip" },
  { name: "Henderson", vibe: "Suburb 20 min southeast. Lake Las Vegas resort area, quieter casinos (Green Valley Ranch, Sunset Station), and residential calm. A car is essential. Airport proximity makes it convenient for early flights.", bestFor: "Longer stays, families, travelers mixing Vegas with outdoor recreation" },
  { name: "Arts District (18b)", vibe: "Small creative cluster just west of DTLA Vegas. Independent galleries, coffee shops, food trucks, and the First Friday monthly art walk. Boutique hotels are emerging here. Very walkable within its few blocks, but isolated from Strip action.", bestFor: "Creative travelers, repeat visitors, those who want local character" },
];

export default function LasVegasNeighborhoodGuideClient() {
  return (
    <main>
      <Header links={[
        { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
        { href: "/destination/lasvegas/safety-guide", label: "Las Vegas Safety" },
        { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <BookingCTA
        variant="slim"
        text="Find hotels in your preferred Las Vegas area →"
        href="/destination/lasvegas/bookings?tab=hotels"
        label="Browse hotels"
      />
      <section className={styles.hero}>
        <h1>Las Vegas Neighborhood Guide</h1>
        <p>Las Vegas is more than the Strip — but where you stay shapes your entire trip. Mid-Strip is the default for a reason; Downtown is worth understanding; the suburbs exist for everyone else. Here is the full breakdown.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/best-areas-to-stay" className={styles.primaryCta}>Best areas to stay</Link>
          <Link href="/destination/lasvegas/safety-guide" className={styles.secondaryCta}>Las Vegas safety guide</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="neighborhoods-lv">
        <h2 id="neighborhoods-lv" className={styles.sectionTitle}>Las Vegas Areas Explained</h2>
        <p className={styles.sectionIntro}>Seven areas covering the full range of where visitors stay — and what each is actually like.</p>
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
      <WhyTrustThisGuide data={cityWhyTrustData} />
      <FAQAccordion faqs={cityFaqData} />
      <BookingCTA
        variant="full"
        headline="Book hotels in the right Las Vegas area"
        text="Compare Strip, Downtown, and off-Strip hotels — live prices and real reviews."
        href="/destination/lasvegas/bookings?tab=hotels"
        label="Browse Las Vegas hotels"
      />
      <Footer />
    </main>
  );
}
