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
import faqData from "@/content/destination/orlando/bestplacetostay/faqsection.json";
import EmailSignup from "@/app/components/destination/EmailSignup/EmailSignup";

const orlandoNeighborhoods: Neighborhood[] = [
  {
    id: "disney-on-site",
    rank: "#1 Best for Disney",
    name: "Disney On-Site Resorts",
    why: "30-min Early Park Entry every day — the most valuable perk in Orlando for serious Disney visitors.",
    image: "/data/majorcities/losangeles/assets/bestareas/disney.jpg",
    color: "var(--tint-blue)",
    safety: "🟢 Very Safe",
    vibe: "Family-friendly, immersive, convenient",
    transit: "Free Skyliner, buses, monorail",
    bestFor: ["Disney-focused trips", "Families", "Guests maximizing park time"],
    pros: ["30-min Early Park Entry daily", "Free transport to all Disney parks", "Full Disney experience"],
    cons: ["Most expensive option ($200–$600+/night)", "Further from Universal"],
  },
  {
    id: "lake-buena-vista",
    rank: "#2 Best Value Near Disney",
    name: "Lake Buena Vista / Hotel Plaza",
    why: "30–50% cheaper than Disney resorts with free Disney shuttle — the smart value play.",
    image: "/data/majorcities/losangeles/assets/bestareas/lakebuena.jpg",
    color: "var(--tint-green)",
    safety: "🟢 Safe",
    vibe: "Convenient, budget-friendly, family-focused",
    transit: "Free Disney shuttle, 10-min drive",
    bestFor: ["Budget-conscious Disney visitors", "Families", "Value seekers"],
    pros: ["30–50% cheaper than Disney resorts", "Free Disney shuttle", "Good hotel selection"],
    cons: ["No Early Park Entry perk", "Requires shuttle or car for Universal"],
  },
  {
    id: "universal-on-site",
    rank: "#3 Best for Universal",
    name: "Universal On-Site Hotels",
    why: "1-hour Early Park Admission to Harry Potter areas — genuinely valuable on busy days.",
    image: "/data/majorcities/losangeles/assets/bestareas/howgart.jpg",
    color: "var(--tint-purple)",
    safety: "🟢 Very Safe",
    vibe: "Themed, fun, walkable to parks",
    transit: "Walk to Universal parks",
    bestFor: ["Universal-focused trips", "Harry Potter fans", "Couples"],
    pros: ["1-hour Early Park Admission", "Walk to Universal's parks", "Great themed hotels"],
    cons: ["Pricey", "Far from Disney (20+ min)"],
  },
  {
    id: "international-drive",
    rank: "#4 Best Budget / Flexible",
    name: "International Drive (I-Drive)",
    why: "Central location between parks with the best budget hotel density in Orlando.",
    image: "/data/majorcities/losangeles/assets/bestareas/universal.jpg",
    color: "var(--tint-yellow)",
    safety: "🟢 Safe",
    vibe: "Touristy, central, walkable to dining",
    transit: "Free shuttle options to both parks",
    bestFor: ["Budget trips", "Flexible itineraries", "Visitors splitting time across parks"],
    pros: ["Budget to mid-range hotels", "10 min to Universal, 20 min to Disney", "Walkable to ICON Park and dining"],
    cons: ["Can feel touristy", "Requires car or shuttle for parks"],
  },
];

const areas = [
  { name: "On-Site Disney Resorts (Best for Disney-Only Trips)", vibe: "Disney's Value ($120–$180/night), Moderate ($200–$280), and Deluxe ($350–$600+) resorts. All get 30-min Early Park Entry every day — at Disney's scale this is genuinely valuable. Free Skyliner, buses, and monorail to all parks.", bestFor: "Disney-focused trips, families, guests wanting to maximize park time" },
  { name: "Hotel Plaza Blvd / Lake Buena Vista (Best Value Near Disney)", vibe: "8 hotels directly on Disney property (Hilton, Marriott, etc.) but not Disney-owned. Free Disney shuttle. 10-min drive to parks. 30–50% cheaper than Disney resorts. No Early Entry perk.", bestFor: "Budget-conscious Disney visitors, families wanting good value" },
  { name: "Universal On-Site Hotels (Best for Universal Trips)", vibe: "Loews Hard Rock, Portofino Bay, Royal Pacific. All get 1-hour Early Park Admission to Harry Potter and other select attractions — this is highly valuable on busy days. Walk to Universal's parks.", bestFor: "Universal-focused trips, Harry Potter fans, couples" },
  { name: "International Drive (I-Drive)", vibe: "Dense hotel corridor with restaurants, mini-golf, Icon Park. 10 min by car to Universal, 20 min to Disney. Budget to mid-range options. Walkable to dining and ICON Park. Can feel touristy.", bestFor: "Budget trips, flexible itineraries, visitors splitting time across parks" },
  { name: "Kissimmee", vibe: "South of Disney — vacation homes and budget hotels. Perfect for large groups or families renting a house with a pool. Requires a car. 15 min to Disney World gates.", bestFor: "Large families, groups, budget vacation rentals" },
  { name: "Downtown Orlando", vibe: "30 min from Disney, 25 min from Universal. Local restaurants, Lake Eola park, craft bars. No theme park convenience but authentic city character.", bestFor: "Repeat visitors, longer trips, guests spending time beyond the parks" },
];

const tips = [
  "Disney Early Park Entry (30 min) is included with all Disney resort stays - it allows you to ride headliner attractions before queues build. Worth the premium for 4+ day Disney trips.",
  "Universal's Express Pass (separate purchase, $80-$130/day) lets you skip main queues - it's cheaper than booking an on-site hotel just for Early Entry.",
  "I-Drive hotels often include free shuttles to both Disney and Universal. Confirm before booking.",
  "Kissimmee vacation homes average $60-$100/night per bedroom - significantly cheaper than hotels for groups of 4+.",
];

export default function OrlandoBestAreasClient() {
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
        text="Compare live hotel prices across all Orlando areas"
        href="/destination/orlando/bookings?tab=hotels&from=best-areas-to-stay"
        label="Browse Orlando hotels"
      />
      <Banner
        cityName="Orlando"
        cityHref="/destination/orlando"
        description="Where you stay in Orlando determines your entire logistics. On-site Disney and Universal hotels offer real perks - this guide explains when they are worth it."
        guideBullets={[
          "When Disney on-site perks are worth the premium",
          "Best value hotels near each park",
          "Universal Early Admission explained",
          "I-Drive vs. Kissimmee vs. on-site",
          "Tips to save 30-50% on accommodation",
        ]}
      />
      <SoloTripIntro
        cityName="Orlando"
        description="Orlando is a logistics puzzle - the right base saves you hours of transit time and real money. These guides cut through the noise so you can focus on enjoying the parks."
        bullets={[
          "On-site vs. off-site - honestly compared",
          "How to pick your base by park focus",
          "Budget strategies that actually work",
        ]}
        cards={[
          { icon: "🏰", title: "For Disney", description: "On-site perks, Early Entry, and the best resort tiers explained.", cta: "Disney guide" },
          { icon: "🧙", title: "For Universal", description: "Harry Potter Early Admission and on-site hotel value compared.", cta: "Universal guide" },
          { icon: "💸", title: "On a Budget", description: "I-Drive and Kissimmee options - real savings without sacrificing access.", cta: "Budget guide" },
          { icon: "👨‍👩‍👧", title: "For Families", description: "Which areas work best for kids - parks, pools, and early bedtimes.", cta: "Family guide" },
        ]}
      />
      <SectionSafestNeighborhoods
        title="Safest Areas in Orlando"
        paragraphs={[
          "Orlando's tourist areas - on-site Disney resorts, Universal's CityWalk corridor, and International Drive - are among the safest in Florida for visitors. Hotel security is robust and foot traffic is constant.",
          "On-site Disney and Universal properties are essentially controlled environments, making them the safest options for families and solo travelers alike.",
          "I-Drive is generally safe along the main strip, though standard urban awareness applies after dark. Kissimmee varies by specific area - stick to well-reviewed vacation rental communities.",
        ]}
        tip="On-site Disney and Universal hotels offer the most controlled, consistently safe environment - ideal for families or solo travelers who prioritize peace of mind."
        warning="Avoid unreviewed budget motels on the edges of I-Drive or US-192 in Kissimmee - these areas have higher incident rates than the main tourist corridors."
      />
      <NeighborhoodRankingCards cityName="Orlando" neighborhoods={orlandoNeighborhoods} />
      <section className={styles.section} aria-labelledby="areas-orl">
        <h2 id="areas-orl" className={styles.sectionTitle}>All Orlando Areas Compared</h2>
        <p className={styles.sectionIntro}>Six areas - on-site, near-park, and off-park options honestly compared.</p>
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
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="tips-orl">
        <h2 id="tips-orl" className={styles.sectionTitle}>Hotel Booking Tips for Orlando</h2>
        <div className={styles.grid}>
          {tips.map((tip, i) => (<article key={i} className={styles.card}><p className={styles.cardBody}>{tip}</p></article>))}
        </div>
      </section>
      <EmailSignup source="best-areas-to-stay" city="Orlando" />
      <div className={styles.section}>
        <FAQAccordion faqs={faqData} />
      </div>
      <BookingCTA
        variant="full"
        headline="Find the right Orlando hotel"
        text="On-site, near-park, and budget options - compare live prices."
        href="/destination/orlando/bookings?tab=hotels&from=best-areas-to-stay"
        label="Book your trip"
      />
    </main>
  );
}
