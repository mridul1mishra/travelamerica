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
import faqData from "@/content/destination/lasvegas/bestplacetostay/faqsection.json";

const lasvegasNeighborhoods: Neighborhood[] = [
  {
    id: "mid-strip",
    rank: "#1 Best Overall",
    name: "Mid-Strip",
    why: "Walking distance to the Bellagio, Cosmopolitan, Aria — the heart of Las Vegas with zero logistics.",
    image: "/data/majorcities/losangeles/assets/bestareas/midstrip.jpg",
    color: "var(--tint-blue)",
    safety: "🟢 Safe (busy and well-lit)",
    vibe: "Central, vibrant, high-energy",
    transit: "Walk to everything",
    bestFor: ["First-timers", "Short trips", "Maximum convenience"],
    pros: ["Walk to top shows and restaurants", "No transport needed", "Best hotel selection"],
    cons: ["Most expensive", "Can feel overwhelming"],
  },
  {
    id: "south-strip",
    rank: "#2 Best Mid-Budget",
    name: "South Strip",
    why: "Mandalay Bay, Luxor, MGM Grand — cheaper than mid-Strip with easy access.",
    image: "/data/majorcities/losangeles/assets/bestareas/southstrip.jpg",
    color: "var(--tint-green)",
    safety: "🟢 Safe",
    vibe: "Budget-friendly, slightly removed",
    transit: "15-min walk or $10 Uber to mid-Strip",
    bestFor: ["Budget travelers", "Groups", "Families"],
    pros: ["Cheaper than mid-Strip", "Good hotel quality", "Still on the Strip"],
    cons: ["Walk to mid-Strip is long in summer heat", "Less walkable to top venues"],
  },
  {
    id: "downtown-fremont",
    rank: "#3 Best Alternative",
    name: "Downtown / Fremont Street",
    why: "Save $40–$80/night versus the Strip and experience a grittier, more local Vegas.",
    image: "/data/majorcities/losangeles/assets/bestareas/fermont_street.jpg",
    color: "var(--tint-purple)",
    safety: "🟡 Generally safe — stay aware",
    vibe: "Old Vegas, local, atmospheric",
    transit: "15-min drive to Strip",
    bestFor: ["Repeat visitors", "Budget travelers", "Different Vegas vibe"],
    pros: ["$40–$80 cheaper per night", "Fremont Street Experience", "Less crowded"],
    cons: ["15 min from the Strip", "Grittier environment"],
  },
  {
    id: "north-strip",
    rank: "#4 Lowest Cost on Strip",
    name: "North Strip",
    why: "Cheapest Strip hotels — good if you plan to Uber everywhere.",
    image: "/data/majorcities/losangeles/assets/bestareas/northstrip.jpg",
    color: "var(--tint-yellow)",
    safety: "🟢 Safe",
    vibe: "Quiet, budget-focused",
    transit: "25-min walk or short cab to mid-Strip",
    bestFor: ["Very budget stays", "Travelers who Uber everywhere"],
    pros: ["Lowest Strip room rates", "Still technically on the Strip", "Less crowded"],
    cons: ["Far from the action", "Long walk in heat"],
  },
];

const areas = [
  { name: "Mid-Strip (Best Overall)", vibe: "Cosmopolitan, Aria, Bellagio, Park MGM. Walking distance to the majority of shows, restaurants, and the Bellagio fountains. Most expensive but zero logistics.", bestFor: "First-timers, short trips, anyone wanting maximum convenience" },
  { name: "South Strip", vibe: "Mandalay Bay, Luxor, MGM Grand. Cheaper than mid-Strip. 15-min walk to center action or $10 Uber. Good for budget-conscious travelers who don't mind the walk.", bestFor: "Budget travelers, groups, families" },
  { name: "North Strip", vibe: "Stratosphere, Circus Circus area. Quietest and cheapest part of the Strip. Further from the action — a 25-min walk or short cab to mid-Strip.", bestFor: "Very budget stays, travelers who plan to Uber everywhere" },
  { name: "Downtown / Fremont Street", vibe: "Low nightly rates ($40–$80 cheaper than Strip equivalents). Fremont Street Experience is the centrepiece. Older, grittier, more local. 15 min by car from the Strip.", bestFor: "Repeat visitors, budget travelers, those who want a different Vegas vibe" },
  { name: "Henderson", vibe: "Suburb 20 min from the Strip. Residential, family-friendly, Lake Las Vegas nearby. Requires a car. Much quieter.", bestFor: "Families, outdoor activities, week-long stays" },
  { name: "Summerlin (West Las Vegas)", vibe: "Upscale suburb. Red Rock Canyon access. Peaceful, away from casino energy. Downtown Summerlin outdoor mall is nearby.", bestFor: "Hiking, nature, quieter stays" },
];

const quickTips = [
  "Resort fees ($35-$50/night) are charged on top of room rates at all Strip hotels. Always calculate the full nightly cost.",
  "On-Strip hotels can offer free parking - call ahead. Most now charge $15-$25/day.",
  "Weekday rates are 30-50% cheaper than weekends. Monday-Thursday is the sweet spot.",
  "Booking directly through hotel sites often beats OTAs, especially for upgrades and fee waivers.",
];

export default function LasVegasBestAreasClient() {
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
        text="Compare live hotel prices across the Strip and Downtown"
        href="/destination/lasvegas/bookings?tab=hotels&from=best-areas-to-stay"
        label="Browse Las Vegas hotels"
      />
      <Banner
        cityName="Las Vegas"
        cityHref="/destination/lasvegas"
        description="Where you stay in Vegas determines your entire experience. Mid-Strip maximizes convenience but costs more - here is the honest breakdown of every area."
        guideBullets={[
          "Mid-Strip vs. South Strip vs. Downtown compared",
          "Resort fees decoded - true nightly cost",
          "When to book and when rates drop",
          "Areas best for budget, nightlife, or luxury",
          "Local tips most first-timers miss",
        ]}
      />
      <SoloTripIntro
        cityName="Las Vegas"
        description="Vegas rewards people who understand how it works. Resort fees, room rate spikes, and Strip logistics can eat your budget fast. These guides help you navigate smartly."
        bullets={[
          "Strip vs. Downtown - what no one tells you",
          "How to calculate the real cost of a hotel",
          "Best times to visit and book",
        ]}
        cards={[
          { icon: "🎰", title: "For Nightlife", description: "Best Strip location for shows, clubs, and walking access.", cta: "Nightlife guide" },
          { icon: "💸", title: "On a Budget", description: "Downtown and off-Strip options that cut costs without cutting fun.", cta: "Budget guide" },
          { icon: "🥂", title: "For Luxury", description: "Mid-Strip properties worth the premium - and when to book direct.", cta: "Luxury guide" },
          { icon: "🛡️", title: "For Safety", description: "Which areas to avoid and how to stay aware on the Strip.", cta: "Safety guide" },
        ]}
      />
      <SectionSafestNeighborhoods
        title="Safest Areas in Las Vegas"
        paragraphs={[
          "The Las Vegas Strip - particularly the mid and south sections - is among the most heavily policed and surveilled areas in the United States. Casino security, foot traffic, and constant lighting make it safe for solo travelers at any hour.",
          "Fremont Street is generally safe within the experience area itself, though the surrounding blocks become rougher the further you walk from the main strip. Stay within the covered canopy area at night.",
          "Henderson and Summerlin are quiet suburban areas with very low crime rates - ideal for families or travelers who want a peaceful base outside the casino energy.",
        ]}
        tip="The mid-Strip between the Bellagio and Park MGM has the densest foot traffic and most security presence - the safest and most comfortable walking area at any hour."
        warning="Avoid walking east of the Strip toward the industrial areas, or venturing off Fremont Street into the surrounding blocks late at night."
      />
      <NeighborhoodRankingCards cityName="Las Vegas" neighborhoods={lasvegasNeighborhoods} />
      <section className={styles.section} aria-labelledby="areas-lv">
        <h2 id="areas-lv" className={styles.sectionTitle}>All Las Vegas Areas Compared</h2>
        <p className={styles.sectionIntro}>Six distinct areas - what each is actually like and who it suits.</p>
        <div className={styles.grid}>
          {areas.map(({ name, vibe, bestFor }) => (
            <article key={name} className={styles.card}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardBody}>{vibe}</p>
              <p className={styles.cardMeta}>Best for: {bestFor}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="tips-lv">
        <h2 id="tips-lv" className={styles.sectionTitle}>Hotel Booking Tips for Las Vegas</h2>
        <div className={styles.grid}>
          {quickTips.map((tip, i) => (
            <article key={i} className={styles.card}>
              <p className={styles.cardBody}>{tip}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.section}>
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
    </main>
  );
}
