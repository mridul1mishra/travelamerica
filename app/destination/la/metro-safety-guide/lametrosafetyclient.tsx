import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import laWhyTrustData from "@/content/destination/la/metro-safety-guide/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import laFaqData from "@/content/destination/la/metro-safety-guide/faq/faqsection.json";
import styles from "@/app/destination/city-hub.module.css";

const safetyTopics = [
  { title: "Overall Safety Assessment", blurb: "The LA Metro is generally safe during the day and early evening for tourists using the main tourist-facing lines (B Line to Hollywood, E Line to Santa Monica). It is less safe late at night — trains get emptier, and some stations have a visible homeless presence. Most tourists have no issues; awareness matters more than avoidance." },
  { title: "Safest Lines & Times", blurb: "B Line (Red, to Hollywood) and E Line (Expo, to Santa Monica) are the safest and most tourist-relevant. Daytime and early evening (before 9pm) are the lowest-risk windows. The D Line (Purple) through Koreatown is also well-used and generally comfortable. Avoid riding alone on any line after midnight." },
  { title: "Station Safety", blurb: "7th Street/Metro Center (DTLA) and Union Station are busy, well-staffed hubs — safe at most hours. Hollywood/Highland is well-patrolled due to tourist volume. Some DTLA stations adjacent to Skid Row (Pershing Square, Civic Center/Grand Park) are less comfortable — pass through without lingering." },
  { title: "On the Train: What to Watch", blurb: "Keep your phone in your pocket rather than in your hand. Backpack in front of you during crowded periods. Sit near other passengers rather than in empty cars. If a car feels uncomfortable, move to another at the next station. LAPD and Metro security do patrol the lines — report issues to them directly." },
  { title: "Fare Enforcement", blurb: "LA Metro uses an honor system — tap your TAP card on the reader before boarding. Plain-clothes fare inspectors do check tickets and issue fines of $75–$250 for riding without paying. Tourists are not exempt. Buy a day pass ($7) if you plan to ride more than twice in a day." },
  { title: "When to Use Uber Instead", blurb: "After 9pm on any line. If you are alone and carrying luggage. If you are going anywhere off the main B and E Line corridors. If your destination is more than a 10-minute walk from a Metro station (most of LA). Uber and Lyft are safe, widely available, and often faster once you factor in walking time." },
];

const emergency = [
  { title: "Emergency", blurb: "911 — police, fire, ambulance" },
  { title: "Metro Transit Security", blurb: "(800) 371-5353 — Metro security non-emergency line" },
  { title: "In-Train Emergency", blurb: "Emergency intercom buttons are located at the ends of each train car — use to contact the operator" },
];

export default function LAMetroSafetyClient() {
  return (
    <main className={styles.container}>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <section className={styles.hero}>
        <h1>Is the LA Metro Safe? 2026 Guide for Tourists</h1>
        <p>The LA Metro is safer than its reputation — on the right lines, at the right times. This guide gives you an honest assessment so you can use it confidently when it makes sense and know when Uber is the better call.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/la-metro-map" className={styles.primaryCta}>LA Metro map & lines</Link>
          <Link href="/destination/la/safety-guide" className={styles.secondaryCta}>Full LA safety guide</Link>
        </div>
      </section>
      <section aria-labelledby="metro-safety-la">
        <h2 id="metro-safety-la">LA Metro Safety for Tourists</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>Six things you need to know before riding the LA Metro as a visitor.</p>
        <div className={styles.grid}>
          {safetyTopics.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="metro-emergency-la">
        <h2 id="metro-emergency-la">Emergency on the Metro</h2>
        <div className={styles.grid}>
          {emergency.map(({ title, blurb }) => (
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
        text="Hotels near the B and E Metro lines — the safest and most tourist-useful routes in LA."
        href="/destination/la/bookings?tab=hotels&from=metro-safety"
        label="Browse LA hotels"
      />
      
      <BookingCTA
        variant="full"
        headline="Book your LA trip"
        text="Hotels near the B and E Metro lines — the safest and most tourist-useful routes in LA."
        href="/destination/la/bookings?tab=hotels&from=metro-safety"
        label="Browse LA hotels"
      />
      <Footer />
    </main>
  );
}
