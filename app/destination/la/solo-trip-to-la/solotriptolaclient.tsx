import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import laWhyTrustData from "@/content/destination/la/solo-trip-to-la/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import laFaqData from "@/content/destination/la/solo-trip-to-la/faq/faqsection.json";
import styles from "@/app/destination/city-hub.module.css";

const topics = [
  { title: "Is LA Good for Solo Travel?", blurb: "Yes — with caveats. LA lacks the spontaneous social scene of cities like NYC or Barcelona, but it rewards solo travelers who plan ahead. The car-dependent layout means you have more freedom than groups. Museums, hiking, and food are all excellent solo activities. You may feel isolated without a car." },
  { title: "Best Time to Visit Solo", blurb: "March–May and September–November are the ideal windows — comfortable temperatures (65–80°F), fewer crowds than summer, and lower hotel rates. Avoid December–February for outdoor activities (overcast, cool). Summer (June–August) is peak season with higher prices and more people, but beach weather is reliable." },
  { title: "Where to Stay as a Solo Traveler", blurb: "Santa Monica for walkability and safety. Silver Lake for the independent café and restaurant scene. West Hollywood if you want nightlife access. DTLA for budget value — stick to the Grand Ave and Arts District corridors. Hostels are available in Hollywood and Venice ($35–$60/night) if you want to meet people." },
  { title: "Getting Around Without a Group", blurb: "A rental car gives you the most freedom ($40–$80/day). Uber and Lyft are reliable and safe throughout the city. The Metro Expo Line connects DTLA to Santa Monica for $1.75 — useful for one specific corridor. Cycling works along the coast. Avoid relying on buses for tourist routes — they are slow and infrequent." },
  { title: "Solo-Friendly Activities", blurb: "Griffith Observatory (self-paced, great solo hiking). The Getty (free, excellent solo museum experience). Farmers markets (social without requiring a group). Comedy clubs on the Sunset Strip have walk-in solo seating at the bar. Free walking tours of DTLA run on weekends and are a good way to meet other travelers." },
  { title: "Meeting People as a Solo Traveler", blurb: "LA is not naturally social for visitors. Best options: free walking tours, hostel common areas, day hikes via Meetup groups, surf lessons in Santa Monica, and rooftop bars in WeHo where solo visitors are common. Dating apps have high usage in LA and are used for social connections as well as dates." },
];

export default function SoloTripToLAClient() {
  return (
    <main className={styles.container}>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <section className={styles.hero}>
        <h1>Solo Trip to Los Angeles: Complete Guide</h1>
        <p>LA is one of the best cities in America for solo travel — if you understand how it works. Car-dependent, spread out, and socially different from east-coast cities, it rewards those who plan ahead and lean into what it does best.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/la/solo-itinerary" className={styles.primaryCta}>See solo itinerary</Link>
          <Link href="/destination/la/safety-guide" className={styles.secondaryCta}>Safety guide</Link>
        </div>
      </section>
      <BookingCTA
        variant="slim"
        text="Book your solo LA trip — flights, hotels and activities →"
        href="/destination/la/bookings"
        label="Book your trip"
      />
      <section aria-labelledby="solo-la">
        <h2 id="solo-la">Solo Travel in Los Angeles</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>Six things every first-time solo traveler to LA needs to know.</p>
        <div className={styles.grid}>
          {topics.map(({ title, blurb }) => (
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
        headline="Book your solo LA trip"
        text="Flights, solo-friendly hotels, and activity tickets for Los Angeles."
        href="/destination/la/bookings"
        label="Plan & book your LA trip"
      />
      <Footer />
    </main>
  );
}
