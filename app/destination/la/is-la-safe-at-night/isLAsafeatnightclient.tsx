import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import laWhyTrustData from "@/content/destination/la/is-la-safe-at-night/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import laFaqData from "@/content/destination/la/is-la-safe-at-night/faq/faqsection.json";
import styles from "@/app/destination/city-hub.module.css";

const nightSafety = [
  { title: "Safe After Dark: Tourist Areas", blurb: "Santa Monica (Third Street Promenade and the pier area), West Hollywood (Sunset Strip), Beverly Hills, Hollywood Blvd (the well-lit tourist corridor), and the DTLA Arts District are all comfortable after dark with normal street awareness. These areas have foot traffic, open businesses, and security presence at night." },
  { title: "Use Rideshare After 10pm", blurb: "The single most effective safety measure in LA at night is using Uber or Lyft instead of walking to unfamiliar areas. LA's car culture means most locals drive or rideshare at night — pedestrians in residential areas after dark can attract unwanted attention. Rideshare from venue to hotel whenever in doubt." },
  { title: "Areas to Avoid at Night", blurb: "Skid Row (east of Main St between 3rd and 7th in DTLA). Parts of Hollywood east of Highland Ave. North of Sunset in parts of East Hollywood. South of the 10 freeway in many parts of South LA. Compton, Watts, and Inglewood at night unless you know them. None of these areas need to be visited by tourists." },
  { title: "Car Safety at Night", blurb: "Never leave anything in your car at night — not a bag, charger, or jacket. Use well-lit parking lots or attended valet rather than dark street parking. Lock your doors immediately when you get in. Carjackings at traffic lights are rare but occur — keep your phone off your lap at red lights in lower-traffic areas." },
  { title: "Parking Structure Safety", blurb: "Multi-story parking structures in DTLA and some parts of Hollywood can feel isolated late at night. Stick to the elevator rather than stairwells. Park near the elevator on higher floors. If anything feels wrong, go back to the venue and ask staff to walk with you. Trust your instincts." },
  { title: "Beach Areas at Night", blurb: "Venice Beach boardwalk is not recommended for solo walking after 10pm — the homeless population increases and lighting is poor in sections. Santa Monica Pier and Promenade are fine until closing time (varies). Malibu beaches are isolated at night — only visit with others and let someone know where you are." },
];

export default function IsLASafeAtNightClient() {
  return (
    <main className={styles.container}>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <section className={styles.hero}>
        <h1>Is LA Safe at Night? Honest 2026 Guide</h1>
        <p>LA is safe at night in the major tourist areas — and riskier in specific corridors that tourists have no reason to visit. This guide gives you the honest breakdown by neighborhood and situation.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/safety-guide" className={styles.primaryCta}>Full LA safety guide</Link>
          <Link href="/destination/la/best-areas-to-stay" className={styles.secondaryCta}>Best areas to stay</Link>
        </div>
      </section>
      <section aria-labelledby="night-safety-la">
        <h2 id="night-safety-la">LA Nighttime Safety: What to Know</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>Six topics that cover the specific nighttime risks in Los Angeles — and how to avoid them.</p>
        <div className={styles.grid}>
          {nightSafety.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="emergency-la-night">
        <h2 id="emergency-la-night">Emergency Numbers</h2>
        <div className={styles.grid}>
          <article className={styles.card}><h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>Emergency</h3><p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>911 — police, fire, ambulance</p></article>
          <article className={styles.card}><h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>Non-Emergency Police</h3><p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>(877) 275-5273 — LAPD non-emergency line</p></article>
          <article className={styles.card}><h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>Rideshare Safety</h3><p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>Both Uber and Lyft have in-app emergency buttons that share your location with 911 — use them if needed</p></article>
        </div>
      </section>
      <WhyTrustThisGuide data={laWhyTrustData} />
      <FAQAccordion faqs={laFaqData} />
      
      <BookingCTA
        variant="full"
        headline="Plan your safe LA trip"
        text="Book hotels in LA's safest neighborhoods — live prices and verified reviews."
        href="/destination/la/bookings?tab=hotels&from=is-la-safe-at-night"
        label="Browse LA hotels"
      />
      
      <BookingCTA
        variant="full"
        headline="Plan your safe LA trip"
        text="Book hotels in LA's safest neighborhoods — live prices and verified reviews."
        href="/destination/la/bookings?tab=hotels&from=is-la-safe-at-night"
        label="Browse LA hotels"
      />
      <Footer />
    </main>
  );
}
