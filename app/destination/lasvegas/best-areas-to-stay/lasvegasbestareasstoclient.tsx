"use client"
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./lasvegasbestareas.module.css";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import Banner from "./components/Banner/Banner";
import SoloTripIntro from "./components/SoloTripIntro/SoloTripIntro";
import SectionSafestNeighborhoods from "./components/SectionSafestNeighborhoods/SectionSafestNeighborhoods";
import NeighborhoodRankingCards, { Neighborhood } from "./components/NeighborhoodRankingCards/NeighborhoodRankingCards";
import faqData from "@/content/destination/lasvegas/bestplacetostay/faqsection.json";

const lasvegasNeighborhoods: Neighborhood[] = [
  {
    id: "mid-strip",
    rank: "#1 Best Overall",
    name: "Mid-Strip",
    why: "Walking distance to the Bellagio, Cosmopolitan, and Aria — the heart of Las Vegas with zero logistics.",
    image: "/data/majorcities/losangeles/assets/bestareas/midstrip.jpg",
    color: "var(--tint-blue)",
    safety: "🟢 Very Safe — busy and well-lit",
    vibe: "Central, high-energy, walkable",
    transit: "Walk to everything; Deuce bus, Tram",
    bestFor: ["First-timers", "Short trips", "Maximum convenience"],
    pros: ["Walk to top shows and restaurants", "No transport needed", "Best hotel selection"],
    cons: ["Most expensive ($150–$400/night)", "Can feel overwhelming"],
  },
  {
    id: "south-strip",
    rank: "#2 Best Mid-Budget",
    name: "South Strip",
    why: "Mandalay Bay, Luxor, and MGM Grand — cheaper than mid-Strip with easy tram access.",
    image: "/data/majorcities/losangeles/assets/bestareas/southstrip.jpg",
    color: "var(--tint-green)",
    safety: "🟢 Safe",
    vibe: "Budget-friendly, slightly removed",
    transit: "Strip Tram, 15-min walk or $10 Uber to mid-Strip",
    bestFor: ["Budget travelers", "Groups", "Families"],
    pros: ["Cheaper than mid-Strip ($90–$220)", "Good hotel quality", "Still on the Strip"],
    cons: ["Long walk to mid-Strip in summer heat", "Less walkable to top venues"],
  },
  {
    id: "downtown-fremont",
    rank: "#3 Best Alternative",
    name: "Downtown / Fremont Street",
    why: "Save $40–$80/night versus the Strip and experience a grittier, more local Old Vegas.",
    image: "/data/majorcities/losangeles/assets/bestareas/fermont_street.jpg",
    color: "var(--tint-purple)",
    safety: "🟡 Generally safe — stay aware off the canopy",
    vibe: "Old Vegas, local, atmospheric",
    transit: "Deuce bus or 15-min drive to Strip",
    bestFor: ["Repeat visitors", "Budget travelers", "A different Vegas vibe"],
    pros: ["$40–$80 cheaper per night", "Fremont Street Experience", "Less crowded"],
    cons: ["15 min from the Strip", "Grittier surrounding blocks"],
  },
  {
    id: "north-strip",
    rank: "#4 Lowest Cost on Strip",
    name: "North Strip",
    why: "Cheapest Strip hotels — a solid base if you plan to Uber or tram everywhere.",
    image: "/data/majorcities/losangeles/assets/bestareas/northstrip.jpg",
    color: "var(--tint-yellow)",
    safety: "🟢 Safe",
    vibe: "Quiet, budget-focused, in transition",
    transit: "25-min walk or short cab to mid-Strip",
    bestFor: ["Very budget stays", "Travelers who Uber everywhere"],
    pros: ["Lowest Strip room rates ($70–$150)", "Still technically on the Strip", "Less crowded"],
    cons: ["Far from the action", "Long walk in heat"],
  },
];

const areas = [
  {
    name: "Mid-Strip",
    label: "Best overall",
    price: "$150-$400/night",
    summary: "Closest to the core shows, restaurants, Bellagio fountains, Aria, Cosmo, and Park MGM.",
    tradeoff: "Highest hotel rates, lowest logistics.",
    bestFor: "First-timers, short trips, maximum convenience",
  },
  {
    name: "South Strip",
    label: "Best value on Strip",
    price: "$90-$220/night",
    summary: "Mandalay Bay, Luxor, Excalibur, and MGM Grand with easier prices than mid-Strip.",
    tradeoff: "A longer walk or tram ride to the center action.",
    bestFor: "Budget travelers, groups, families",
  },
  {
    name: "North Strip",
    label: "Cheapest Strip base",
    price: "$70-$150/night",
    summary: "Resorts World, SAHARA, and the Strat. Quieter, cheaper, and still technically Strip.",
    tradeoff: "Far from the main action; plan on cabs or rideshare.",
    bestFor: "Very budget stays, Uber-heavy trips",
  },
  {
    name: "Downtown / Fremont",
    label: "Best alternate Vegas",
    price: "$40-$80 less than Strip",
    summary: "Older, louder, more local, and centered around the Fremont Street Experience canopy.",
    tradeoff: "Grittier edges; stay near the canopy at night.",
    bestFor: "Repeat visitors, nightlife, budget trips",
  },
  {
    name: "Henderson",
    label: "Best quiet base",
    price: "Usually lower than Strip",
    summary: "Residential, family-friendly, and close to Lake Las Vegas with calmer evenings.",
    tradeoff: "A car is basically required.",
    bestFor: "Families, outdoor time, week-long stays",
  },
  {
    name: "Summerlin",
    label: "Best nature access",
    price: "Varies by resort",
    summary: "Upscale west-side base near Red Rock Canyon, Downtown Summerlin, and Red Rock Resort.",
    tradeoff: "Peaceful, but far from classic Strip energy.",
    bestFor: "Hiking, quieter upscale stays",
  },
];

const quickTips = [
  "Resort fees ($35–$50/night) are charged on top of advertised room rates at virtually every Strip hotel. Always calculate the full nightly cost, not just the base rate.",
  "Most Strip hotels now charge $15–$25/day for self-parking. A few still waive it for loyalty members — call ahead to confirm.",
  "Weekday rates are 30–50% cheaper than weekends. Monday–Thursday is the sweet spot. Avoid major conventions like CES (January) when prices spike citywide.",
  "Booking directly through hotel sites often beats OTAs — better odds of upgrades, fee waivers, and loyalty points on Strip properties.",
];

export default function LasVegasBestAreasClient() {
  return (
    <>
      <Header links={[
        { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
        { href: "/destination/lasvegas/safety-guide", label: "Las Vegas Safety" },
        { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />

      <Banner
        cityName="Las Vegas"
        cityHref="/destination/lasvegas"
        description="A neighborhood-by-neighborhood breakdown of Las Vegas - where to stay based on your budget, travel style, and what matters most to you."
        guideBullets={[
          "Mid-Strip vs. South Strip vs. Downtown compared",
          "Where to stay for nightlife, budget, or luxury",
          "Areas to avoid and why",
          "How to decode resort fees and true nightly cost",
          "Local tips most first-timers miss",
        ]}
      />
      <BookingCTA
        variant="slim"
        text="Compare live hotel prices across the Strip and Downtown"
        href="/destination/lasvegas/bookings?tab=hotels&from=best-areas-to-stay"
        label="Browse Las Vegas hotels"
      />
      <SoloTripIntro
        cityName="Las Vegas"
        description="Vegas rewards travelers who understand how it works. Resort fees, weekend rate spikes, and Strip logistics can eat your budget fast. These guides help you choose your base wisely."
        bullets={[
          "Strip vs. Downtown - what no one tells you",
          "How to calculate the real cost of a hotel",
          "Best times to visit and book",
        ]}
      />
      <SectionSafestNeighborhoods
        title="Safest Areas in Las Vegas"
        paragraphs={[
          "The Las Vegas Strip - particularly the mid and south sections - is among the most heavily policed and surveilled areas in the United States. Casino security, constant foot traffic, and bright lighting make it comfortable for solo travelers at any hour.",
          "Fremont Street is generally safe within the Experience canopy itself, though the surrounding blocks become rougher the further you walk from the main strip. Stay within the covered area at night.",
          "Henderson and Summerlin are quiet suburban areas with very low crime rates - ideal for families or travelers who want a peaceful base outside the casino energy.",
        ]}
        tip="The mid-Strip between the Bellagio and Park MGM has the densest foot traffic and most security presence - the safest and most comfortable walking area at any hour."
        warning="Avoid walking east of the Strip toward the industrial areas, or venturing off Fremont Street into the surrounding blocks late at night."
      />
      <NeighborhoodRankingCards cityName="Las Vegas" neighborhoods={lasvegasNeighborhoods} />
      <section aria-labelledby="areas-lv" className={styles.section}>
        <h2 id="areas-lv">All Las Vegas Areas Compared</h2>
        <p className={styles.sectionIntro}>Six distinct bases, compared by cost, convenience, and who should actually stay there.</p>
        <div className={styles.areaList}>
          {areas.map(({ name, label, price, summary, tradeoff, bestFor }) => (
            <article key={name} className={styles.areaItem}>
              <div className={styles.areaTopline}>
                <div>
                  <p className={styles.areaEyebrow}>{label}</p>
                  <h3>{name}</h3>
                </div>
                <span className={styles.pricePill}>{price}</span>
              </div>
              <p className={styles.areaSummary}>{summary}</p>
              <div className={styles.areaMeta}>
                <p><strong>Best for</strong>{bestFor}</p>
                <p><strong>Tradeoff</strong>{tradeoff}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="tips-lv" className={styles.section}>
        <h2 id="tips-lv">Hotel Booking Tips for Las Vegas</h2>
        <div className={styles.grid}>
          {quickTips.map((tip, i) => (
            <article key={i} className={styles.card}>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{tip}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.container}>
        <FAQAccordion faqs={faqData} />
      </div>
      <BookingCTA variant="full" text="Find the right hotel in Las Vegas for your stay" href="/destination/lasvegas/bookings?tab=hotels&from=best-areas-to-stay" label="Book your trip" />
    </>
  );
}
