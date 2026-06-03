import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import cityWhyTrustData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import cityFaqData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/faq/faqsection.json";
import styles from "@/app/destination/city-hub.module.css";

const topics = [
  { title: "Is Vegas Good for Solo Travel?", blurb: "Yes — Las Vegas is exceptionally well-suited to solo travel. The Strip is self-contained and walkable. Single tickets for shows, tours, and activities are easy to secure. Casino floors are social by nature. You set your own pace: no waiting for a group, no compromises on shows or restaurants. Many people visit Vegas solo every year." },
  { title: "Best Time to Visit Solo", blurb: "March–May and September–November are the sweet spots — comfortable temperatures (65–85°F), lower hotel rates, and smaller crowds than summer. Avoid major holidays (New Year's, Memorial Day, Labor Day) when prices triple and the Strip becomes congested. Weekdays are 30–50% cheaper than weekends year-round." },
  { title: "Where to Stay Solo", blurb: "Mid-Strip is the best base for solo travelers — Cosmopolitan, Aria, and Vdara have excellent solo amenities and bar seating. The Bellagio is worth the price for solo trips where you'll spend time in the property. Budget solo option: Excalibur or Luxor on the South Strip offer clean rooms under $60/night on weekdays. Avoid the Strat area at night on your first visit." },
  { title: "Getting Around Solo", blurb: "You do not need a car for anything on the Strip. The Las Vegas Monorail runs along the east side of the Strip ($5/ride, $15 day pass). Uber and Lyft are reliable for off-Strip trips. The Deuce bus ($6 day pass) runs 24 hours along the Strip — useful for budget travelers. Rental cars make sense only for Hoover Dam or Red Rock Canyon day trips." },
  { title: "Solo-Friendly Activities", blurb: "Shows: single seats are available at most venues — book the cheapest single ticket for Cirque du Soleil or a residency concert. The Mob Museum and Neon Museum are excellent solo museum experiences. The High Roller observation wheel puts you in a pod with other visitors — naturally social. Poker tables are communal by design; blackjack is easier solo than in a group." },
  { title: "Meeting People Solo", blurb: "Vegas is unusually easy for meeting people solo. Casino bar stools are built for strangers talking. The High Roller shared pods. Pool decks at mid-Strip hotels fill with social groups. Pub crawl tours ($30–$50) are run specifically for solo travelers. Reddit's r/vegas community posts weekly meetup threads if you want to plan ahead." },
];

export default function SoloTripToLasVegasClient() {
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
        text="Book your solo Las Vegas trip — flights, hotels and activities →"
        href="/destination/lasvegas/bookings"
        label="Book your trip"
      />
      <section className={styles.hero}>
        <h1>Solo Trip to Las Vegas: Complete Guide</h1>
        <p>Las Vegas is one of the best cities in America for solo travel. It is built for individual visitors — 24-hour entertainment, single-ticket shows, self-paced attractions, and a city that never closes. Here is everything you need to know.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/solo-itinerary" className={styles.primaryCta}>See solo itinerary</Link>
          <Link href="/destination/lasvegas/safety-guide" className={styles.secondaryCta}>Safety guide</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="solo-lv">
        <h2 id="solo-lv" className={styles.sectionTitle}>Solo Travel in Las Vegas</h2>
        <p className={styles.sectionIntro}>Six things every first-time solo traveler to Las Vegas needs to know.</p>
        <div className={styles.grid}>
          {topics.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <WhyTrustThisGuide data={cityWhyTrustData} />
      <FAQAccordion faqs={cityFaqData} />
      <BookingCTA
        variant="full"
        headline="Book your solo Las Vegas trip"
        text="Flights to LAS, Strip hotels, and solo activity tickets — compare and book."
        href="/destination/lasvegas/bookings"
        label="Plan & book your Las Vegas trip"
      />
      <Footer />
    </main>
  );
}
