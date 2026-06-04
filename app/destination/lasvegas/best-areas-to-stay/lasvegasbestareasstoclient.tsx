"use client"
import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./lasvegasbestareas.module.css";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import Banner from "@/app/components/destination/bestareatostay/Banner/Banner";
import SoloTripIntro from "@/app/components/destination/bestareatostay/solotripintro/solotripintro";
import SectionSafestNeighborhoods from "@/app/components/destination/bestareatostay/safestneighborhood/safestneighborhood";
import NeighborhoodRankingCards, { Neighborhood } from "@/app/components/destination/neighborhoodrankingcard/neighborhoodrankingcard";
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
  { name: "Mid-Strip (Best Overall)", vibe: "Cosmopolitan, Aria, Bellagio, and Park MGM. Walking distance to the majority of shows, restaurants, and the Bellagio fountains. Most expensive ($150–$400/night) but zero logistics — you can leave the car behind.", bestFor: "First-timers, short trips, anyone wanting maximum convenience" },
  { name: "South Strip", vibe: "Mandalay Bay, Luxor, and MGM Grand. Cheaper than mid-Strip ($90–$220). A 15-min walk or short tram ride to the center action. Good for budget-conscious travelers who don't mind a little distance.", bestFor: "Budget travelers, groups, families" },
  { name: "North Strip", vibe: "Resorts World, the SAHARA, and the Strat. The quietest and cheapest stretch of the Strip ($70–$150). Further from the action — a 25-min walk or short cab to mid-Strip. Rapidly redeveloping.", bestFor: "Very budget stays, travelers who plan to Uber everywhere" },
  { name: "Downtown / Fremont Street", vibe: "Low nightly rates ($40–$80 cheaper than Strip equivalents). The Fremont Street Experience canopy is the centerpiece. Older, grittier, and more local. About 15 min by car from the Strip.", bestFor: "Repeat visitors, budget travelers, those wanting a different Vegas vibe" },
  { name: "Henderson", vibe: "A suburb roughly 20 min from the Strip. Residential, family-friendly, with Lake Las Vegas nearby. Requires a car. Much quieter, with green-felt-free evenings.", bestFor: "Families, outdoor activities, week-long stays" },
  { name: "Summerlin (West Las Vegas)", vibe: "Upscale master-planned suburb with Red Rock Canyon access. Peaceful, away from casino energy. The Downtown Summerlin outdoor mall and Red Rock Resort anchor the area. A car is essential.", bestFor: "Hiking, nature, quieter and more upscale stays" },
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
      <BookingCTA
        variant="slim"
        text="Compare live hotel prices across the Strip and Downtown"
        href="/destination/lasvegas/bookings?tab=hotels&from=best-areas-to-stay"
        label="Browse Las Vegas hotels"
      />
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
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>Six distinct areas - what each is actually like and who it suits.</p>
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
      <BookingCTA
        variant="full"
        headline="Find the right Las Vegas hotel"
        text="Compare Strip, Downtown, and off-Strip hotels - live prices and real reviews."
        href="/destination/lasvegas/bookings?tab=hotels&from=best-areas-to-stay"
        label="Browse Las Vegas hotels"
      />
      <Footer />
    </>
  );
}
