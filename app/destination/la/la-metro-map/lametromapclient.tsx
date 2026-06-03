import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import laWhyTrustData from "@/content/destination/la/la-metro-map/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import laFaqData from "@/content/destination/la/la-metro-map/faq/faqsection.json";
import styles from "@/app/destination/city-hub.module.css";

const lines = [
  { title: "A Line (Blue) — DTLA to Long Beach", blurb: "Runs from 7th Street/Metro Center in DTLA south to Long Beach. Useful for visiting Long Beach (Aquarium of the Pacific, Pike Outlets). Takes about 60 min end to end. Runs 4:30am–12:30am daily." },
  { title: "B Line (Red) — Hollywood & Universal Studios", blurb: "The most useful line for tourists. Runs from Union Station through DTLA, up to Hollywood/Highland (Walk of Fame, TCL Theatre), Hollywood/Vine, and Universal City (Universal Studios). Single fare $1.75. Takes 25 min from DTLA to Hollywood." },
  { title: "D Line (Purple) — DTLA & Koreatown", blurb: "Runs parallel to the B Line underground from Union Station through DTLA and west to Koreatown. Extension to Westwood/UCLA opened 2025. Single fare $1.75. Useful for reaching Koreatown and Wilshire corridor." },
  { title: "E Line (Expo) — DTLA to Santa Monica", blurb: "The single most tourist-useful Metro line. Runs from 7th Street/Metro Center in DTLA to Santa Monica (Downtown Santa Monica station, 3 blocks from the pier). Takes about 45 min. Runs frequently. $1.75 each way — far cheaper than parking." },
  { title: "Fares & TAP Card", blurb: "Single fare: $1.75. Day pass: $7 (unlimited rides). TAP card (reloadable transit card): $2 one-time fee, available at any Metro station vending machine. Download the TAP app for your phone. Always tap in and out — fare inspectors do board trains and issue $75–$250 fines." },
  { title: "When Metro Is Worth It vs. Uber", blurb: "Use Metro for: DTLA to Santa Monica (E Line), DTLA to Hollywood (B Line), avoiding parking costs at Universal Studios. Use Uber for: anything not on these corridors, nights (trains get emptier after 9pm), or if you're carrying bags. Metro cannot replace a car for most of LA's tourist sights." },
];

const apps = [
  { title: "TAP App", blurb: "Official LA Metro app for loading fares and tapping your phone at turnstiles. Download before arriving." },
  { title: "Google Maps", blurb: "Integrates Metro routes — use transit mode to find the right line and departure time." },
  { title: "Transit App", blurb: "Real-time arrivals for all LA Metro lines. More reliable than Metro's own arrivals board." },
];

export default function LAMetroMapClient() {
  return (
    <main className={styles.container}>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <section className={styles.hero}>
        <h1>LA Metro Map & Guide</h1>
        <p>LA has a Metro system — and it is more useful for tourists than most people expect, but far more limited than NYC or Chicago. This guide explains exactly what it does, what it does not do, and when to use it.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/metro-safety-guide" className={styles.primaryCta}>Metro safety guide</Link>
          <Link href="/destination/la/itinerary" className={styles.secondaryCta}>See LA itinerary</Link>
        </div>
      </section>
      <section aria-labelledby="metro-lines-la">
        <h2 id="metro-lines-la">LA Metro Lines for Tourists</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>The lines that actually matter for visitors — with honest time estimates and practical tips.</p>
        <div className={styles.grid}>
          {lines.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="metro-apps-la">
        <h2 id="metro-apps-la">Apps & Resources</h2>
        <div className={styles.grid}>
          {apps.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <WhyTrustThisGuide data={laWhyTrustData} />
      <FAQAccordion faqs={laFaqData} />
      
      <BookingCTA
        variant="full"
        headline="Book your LA trip"
        text="Hotels near Metro stations — skip the parking costs and get around LA by rail."
        href="/destination/la/bookings?tab=hotels&from=metro-map"
        label="Browse LA hotels"
      />
      
      <BookingCTA
        variant="full"
        headline="Book your LA trip"
        text="Hotels near Metro stations — skip the parking costs and get around LA by rail."
        href="/destination/la/bookings?tab=hotels&from=metro-map"
        label="Browse LA hotels"
      />
      <Footer />
    </main>
  );
}
