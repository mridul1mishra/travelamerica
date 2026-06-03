"use client"
import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import Banner from "@/app/components/destination/bestareatostay/Banner/Banner";
import SoloTripIntro from "@/app/components/destination/bestareatostay/solotripintro/solotripintro";
import SectionSafestNeighborhoods from "@/app/components/destination/bestareatostay/safestneighborhood/safestneighborhood";
import NeighborhoodRankingCards, { Neighborhood } from "@/app/components/destination/neighborhoodrankingcard/neighborhoodrankingcard";
import faqData from "@/content/destination/la/bestplacetostay/faqsection.json";

const laNeighborhoods: Neighborhood[] = [
  {
    id: "santa-monica",
    rank: "#1 Best Overall",
    name: "Santa Monica",
    why: "LA's most walkable base — beach access, safe streets, and no car needed within the neighborhood.",
    image: "/data/majorcities/losangeles/assets/bestareas/santamonica.jpg",
    color: "var(--tint-green)",
    safety: "🟢 Very Safe",
    vibe: "Beach, walkable, family-friendly",
    transit: "Big Blue Bus, Expo Line",
    bestFor: ["First-timers", "Couples", "Beach lovers"],
    pros: ["Walkable grid", "Beach and pier access", "Safe and well-lit at night"],
    cons: ["Most expensive area ($200–$400/night)", "Far from Hollywood attractions"],
  },
  {
    id: "west-hollywood",
    rank: "#2 Best Nightlife",
    name: "West Hollywood",
    why: "Sunset Strip, top restaurants, and the best walkable nightlife scene in LA.",
    image: "/data/majorcities/losangeles/assets/bestareas/west_hollywood.jpg",
    color: "var(--tint-purple)",
    safety: "🟢 Safe",
    vibe: "Lively, social, LGBTQ+ friendly",
    transit: "West Hollywood CityLine",
    bestFor: ["Nightlife", "LGBTQ+ travelers", "Dining"],
    pros: ["Walkable bar and restaurant strip", "Central location", "Great hotel options"],
    cons: ["Noisy at night", "Mid–high pricing ($150–$300)"],
  },
  {
    id: "hollywood",
    rank: "#3 Best for Sightseeing",
    name: "Hollywood",
    why: "Walk of Fame, TCL Chinese Theatre, and central access at budget-friendly rates.",
    image: "/data/majorcities/losangeles/assets/bestareas/hollywood.jpg",
    color: "var(--tint-blue)",
    safety: "🟡 Mixed — varies by block",
    vibe: "Touristy, central, busy",
    transit: "Metro Red Line",
    bestFor: ["Sightseeing-focused trips", "Budget travelers", "First-timers"],
    pros: ["Budget to mid-range hotels ($100–$200)", "Near major attractions", "Good transit access"],
    cons: ["Very touristy", "Quality varies block by block"],
  },
  {
    id: "downtown-la",
    rank: "#4 Best Budget",
    name: "Downtown LA (DTLA)",
    why: "Best hotel value in LA with easy access to arts, food, and sports events.",
    image: "/data/majorcities/losangeles/assets/bestareas/downtownla.jpg",
    color: "var(--tint-yellow)",
    safety: "🟡 Improving — stay near Arts District",
    vibe: "Urban, arts-forward, food-rich",
    transit: "Metro Blue, Red, Gold lines",
    bestFor: ["Budget travelers", "Arts and food focus", "Concert-goers"],
    pros: ["Best hotel value ($120–$180)", "Excellent food and arts scene", "Good transit hub"],
    cons: ["Some blocks still rough", "Requires awareness of surroundings"],
  },
];

const areas = [
  { name: "Santa Monica (Best Overall for First-Timers)", vibe: "Beach access, walkable Third Street Promenade, the famous pier, and a safe, well-lit grid. Closest LA gets to a walkable city. Expensive ($200–$400/night for hotels), but you trade car dependency for convenience.", bestFor: "First-timers, couples, anyone wanting beach + walkability" },
  { name: "West Hollywood (WeHo)", vibe: "Sunset Strip, lively nightlife, excellent restaurants, walkable between bars and clubs. LGBTQ+ friendly and very social. Mid-range to expensive hotels ($150–$300). Quieter during the day, buzzing at night.", bestFor: "Nightlife, dining, LGBTQ+ travelers, social trips" },
  { name: "Hollywood", vibe: "Walk of Fame, TCL Chinese Theatre, Griffith Observatory access. Central location. Very touristy and congested. Quality varies wildly by block — stick to hotels on Hollywood Blvd or above. Budget to mid-range ($100–$200).", bestFor: "Sightseeing-focused trips, budget travelers wanting central access" },
  { name: "Silver Lake / Los Feliz", vibe: "Hip, local neighborhood with excellent coffee shops, independent restaurants, and a reservoir walk. No beach access. Requires a car or Uber for most attractions. Airbnbs dominate — hotels are scarce.", bestFor: "Repeat visitors, digital nomads, food and culture travelers" },
  { name: "Downtown LA (DTLA)", vibe: "Grand Central Market, The Broad, Staples Center events, Arts District galleries. Rapidly gentrified with excellent hotel value ($120–$180). Some blocks still rough — stay near Grand Ave or the Arts District, not Skid Row adjacent.", bestFor: "Budget travelers, arts and food focus, concert-goers" },
  { name: "Beverly Hills / Bel Air", vibe: "Rodeo Drive, Mulholland Drive views, ultra-luxury hotels. The safest and most manicured area in LA. Very expensive ($350–$700+/night). Nothing is walkable — you need a car for everything for everything.", bestFor: "Luxury travel, business travel, special occasions" },
];

const quickTips = [
  "LA has no reliable public transit for most tourist attractions. Budget $15-$30/day for Uber or a rental car on top of hotel costs.",
  "Parking in Santa Monica and Beverly Hills can be $25-$40/day. Factor this into hotel cost comparisons.",
  "Weekday rates are typically 20-30% cheaper. Avoid arriving during major awards season (Jan-Mar) when prices spike.",
  "Resort fees are less common than Vegas but do exist - check the full nightly total, not just the base rate.",
];

export default function LABestAreasClient() {
  return (
    <main className={styles.container}>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <BookingCTA
        variant="slim"
        text="Compare live hotel prices across LA neighborhoods"
        href="/destination/la/bookings?tab=hotels&from=best-areas-to-stay"
        label="Browse LA hotels"
      />
      <Banner
        cityName="Los Angeles"
        cityHref="/destination/la"
        description="A neighborhood-by-neighborhood breakdown of LA - where to stay based on your budget, travel style, and what matters most to you."
        guideBullets={[
          "The safest and most convenient neighborhoods",
          "Where to stay for beach access, nightlife, or budget",
          "Areas to avoid and why",
          "How to choose without a car",
          "Local tips most tourists miss",
        ]}
      />
      <SoloTripIntro
        cityName="Los Angeles"
        description="LA's neighborhoods feel like separate cities. Your base determines your transport costs, safety, and overall experience. These guides help you choose wisely."
        bullets={[
          "Safest and most convenient neighborhoods",
          "How to get around without a car",
          "When to book and what to avoid",
        ]}
      />
      <SectionSafestNeighborhoods
        title="Safest Neighborhoods in LA"
        paragraphs={[
          "Santa Monica consistently ranks as LA's safest area for tourists - a walkable grid, well-lit streets, and a strong local presence make it the most comfortable base for first-time visitors and solo travelers.",
          "You'll find beach-goers, locals at the farmers market, and steady foot traffic day and night - the kind of everyday normalcy that keeps a neighborhood feeling safe and alive.",
          "Beverly Hills and West Hollywood also score well on safety. Crime rates in these areas skew significantly lower than LA's city average for violent incidents.",
        ]}
        tip="Stick to the westside neighborhoods at night - Santa Monica, West Hollywood, and Beverly Hills have the most consistent foot traffic and lighting."
        warning="Avoid walking alone in parts of Hollywood east of Vine, areas adjacent to Skid Row in DTLA, or unfamiliar side streets after dark."
      />
      <NeighborhoodRankingCards cityName="Los Angeles" neighborhoods={laNeighborhoods} />
      <section aria-labelledby="areas-la">
        <h2 id="areas-la">All Los Angeles Areas Compared</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>Six distinct neighborhoods - what each is actually like and who it suits.</p>
        <div className={styles.grid}>
          {areas.map(({ name, vibe, bestFor }) => (
            <article key={name} className={styles.card}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{name}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: "0 0 0.5rem" }}>{vibe}</p>
              <p style={{ color: "#333", fontSize: "0.85rem", margin: 0 }}><strong>Best for:</strong> {bestFor}</p>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="tips-la">
        <h2 id="tips-la">Hotel Booking Tips for Los Angeles</h2>
        <div className={styles.grid}>
          {quickTips.map((tip, i) => (
            <article key={i} className={styles.card}>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{tip}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.section}>
        <FAQAccordion faqs={faqData} />
      </div>
      <BookingCTA
        variant="full"
        headline="Find the right Los Angeles hotel"
        text="Compare Santa Monica, Hollywood, WeHo, and DTLA hotels - live prices and real reviews."
        href="/destination/la/bookings?tab=hotels&from=best-areas-to-stay"
        label="Browse Los Angeles hotels"
      />
      <Footer />
    </main>
  );
}
