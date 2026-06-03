import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import cityWhyTrustData from "@/content/destination/orlando/neighborhood-guide/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import cityFaqData from "@/content/destination/orlando/neighborhood-guide/faq/faqsection.json";
import styles from "@/app/destination/city-hub.module.css";

const neighborhoods = [
  { name: "Lake Buena Vista / Disney Springs Area", vibe: "The closest non-Disney accommodation to Walt Disney World. Dozens of hotel options at every price point within a 5–10 min drive of the park gates. Disney Springs (free admission shopping and dining complex) is walkable from many hotels here. Free Disney shuttle service is available from most Lake Buena Vista hotels.", bestFor: "Disney-focused trips, families, value-seekers who want Disney access without Disney hotel prices" },
  { name: "International Drive (I-Drive)", vibe: "Orlando's tourist corridor — a 10-mile stretch of hotels, restaurants, dinner shows, and attractions including the ICON Park wheel, SEA LIFE Aquarium, and Madame Tussauds. Walkable within the corridor, but requires a car or I-Ride Trolley ($2/ride) for parks. High density of mid-range hotels ($80–$180/night).", bestFor: "First-timers, Universal Studios visitors, anyone wanting a central tourist base" },
  { name: "Kissimmee", vibe: "South of Disney along US-192. The cheapest accommodation zone in greater Orlando — budget hotels, vacation rentals, and family resorts from $50/night. Very car-dependent. Somewhat dated strip-mall feel but excellent value for families spending most of the day in parks.", bestFor: "Budget families, large groups, extended stays" },
  { name: "Universal / Sand Lake Road", vibe: "The area immediately around Universal Studios has on-site hotels with park benefits (early entry, walking access) but at a premium. Sand Lake Road just south is Orlando's best independent restaurant row — known locally as 'Restaurant Row.' Mid-range to upscale hotels in this corridor.", bestFor: "Universal Studios fans, food-focused travelers, adults-only trips" },
  { name: "Downtown Orlando", vibe: "A real city — the Lake Eola neighbourhood has a farmers market, independent restaurants, and a walkable lakefront park. Orange Avenue is the nightlife and bar district. No theme parks nearby — requires a car for all major attractions. Boutique hotels and Airbnbs dominate.", bestFor: "Non-theme-park visitors, adults, digital nomads, arts and culture travelers" },
  { name: "Celebration", vibe: "Disney's planned town built in 1994 — a pristine, walkable town centre with a lake, restaurants, and independent shops. Almost unnervingly perfect. Quiet, safe, and family-friendly. 10 min from Disney. No nightlife.", bestFor: "Families who want a quiet, scenic base; longer stays; those who find I-Drive too chaotic" },
];

export default function OrlandoNeighborhoodGuideClient() {
  return (
    <main>
      <Header links={[
        { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
        { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
        { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <BookingCTA
        variant="slim"
        text="Find hotels in your preferred Orlando area →"
        href="/destination/orlando/bookings?tab=hotels"
        label="Browse hotels"
      />
      <section className={styles.hero}>
        <h1>Orlando Neighborhood Guide</h1>
        <p>Orlando is built around its theme parks — where you stay relative to Disney, Universal, or SeaWorld determines your transport costs, your morning commute, and your budget. Here is the honest breakdown of every major area.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/best-areas-to-stay" className={styles.primaryCta}>Best areas to stay</Link>
          <Link href="/destination/orlando/safety-guide" className={styles.secondaryCta}>Orlando safety guide</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="neighborhoods-or">
        <h2 id="neighborhoods-or" className={styles.sectionTitle}>Orlando Areas Explained</h2>
        <p className={styles.sectionIntro}>Six areas covering the full range of where visitors stay — and what each is actually like.</p>
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
        headline="Book hotels in the right Orlando area"
        text="Compare Lake Buena Vista, I-Drive, Kissimmee, and Universal hotels — live prices."
        href="/destination/orlando/bookings?tab=hotels"
        label="Browse Orlando hotels"
      />
      <Footer />
    </main>
  );
}
