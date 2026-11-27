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
    safety: "See our Las Vegas safety guide for current advice",
    vibe: "Central, high-energy, walkable",
    transit: "Walkable to nearby resorts; Deuce bus and Monorail also serve the Strip",
    bestFor: ["First-timers", "Short trips", "Maximum convenience"],
    pros: ["Walk to top shows and restaurants", "No transport needed", "Best hotel selection"],
    cons: ["Rates are often higher than elsewhere on the Strip", "Can feel overwhelming"],
  },
  {
    id: "south-strip",
    rank: "#2 Best Mid-Budget",
    name: "South Strip",
    why: "Mandalay Bay, Luxor, Excalibur and MGM Grand — often lower-priced than mid-Strip, with a tram linking Mandalay Bay, Luxor and Excalibur.",
    image: "/data/majorcities/losangeles/assets/bestareas/southstrip.jpg",
    color: "var(--tint-green)",
    safety: "See our Las Vegas safety guide for current advice",
    vibe: "Budget-friendly, slightly removed",
    transit: "Tram between Mandalay Bay, Luxor and Excalibur; Monorail from MGM Grand; Deuce bus",
    bestFor: ["Budget travelers", "Groups", "Families"],
    pros: ["Often lower-priced than mid-Strip", "Wide range of hotels", "Still on the Strip"],
    cons: ["A longer trip to mid-Strip venues", "Less walkable to some top venues"],
  },
  {
    id: "downtown-fremont",
    rank: "#3 Best Alternative",
    name: "Downtown / Fremont Street",
    why: "A different base from the Strip, centered on Fremont Street and the Downtown Loop, with an older-Vegas feel.",
    image: "/data/majorcities/losangeles/assets/bestareas/fermont_street.jpg",
    color: "var(--tint-purple)",
    safety: "See our Las Vegas safety guide for current advice",
    vibe: "Old Vegas, local, atmospheric",
    transit: "Deuce bus to the Strip; free Downtown Loop shuttle within Downtown",
    bestFor: ["Repeat visitors", "Budget travelers", "A different Vegas vibe"],
    pros: ["Fremont Street Experience", "Free Downtown Loop shuttle", "Often lower hotel rates than the Strip"],
    cons: ["Not on the Strip, so you need the bus or a ride to get there", "Surroundings vary block to block"],
  },
  {
    id: "north-strip",
    rank: "#4 Lowest Cost on Strip",
    name: "North Strip",
    why: "Resorts World, SAHARA and The STRAT — a base if you plan to use rideshare or the bus for the rest of the Strip.",
    image: "/data/majorcities/losangeles/assets/bestareas/northstrip.jpg",
    color: "var(--tint-yellow)",
    safety: "See our Las Vegas safety guide for current advice",
    vibe: "Quiet, budget-focused, in transition",
    transit: "Monorail (SAHARA station), Deuce bus or rideshare to mid-Strip",
    bestFor: ["Very budget stays", "Travelers who Uber everywhere"],
    pros: ["Often lower-priced than mid-Strip", "Still on the Strip", "Monorail station at SAHARA"],
    cons: ["Farther from the mid-Strip resorts", "Long walk to mid-Strip, especially in summer"],
  },
];

const areas = [
  {
    name: "Mid-Strip",
    label: "Best overall",
    price: "Rates vary widely",
    summary: "Closest to the core shows, restaurants, Bellagio fountains, Aria, Cosmo, and Park MGM.",
    tradeoff: "Highest hotel rates, lowest logistics.",
    bestFor: "First-timers, short trips, maximum convenience",
  },
  {
    name: "South Strip",
    label: "Best value on Strip",
    price: "Rates vary widely",
    summary: "Mandalay Bay, Luxor, Excalibur and MGM Grand, where a tram links the first three.",
    tradeoff: "A longer walk or tram ride to the center action.",
    bestFor: "Budget travelers, groups, families",
  },
  {
    name: "North Strip",
    label: "Cheapest Strip base",
    price: "Rates vary widely",
    summary: "Resorts World, SAHARA and The STRAT at the northern end of the Strip.",
    tradeoff: "Farther from mid-Strip; plan on the Monorail, Deuce bus or rideshare.",
    bestFor: "Very budget stays, Uber-heavy trips",
  },
  {
    name: "Downtown / Fremont",
    label: "Best alternate Vegas",
    price: "Rates vary widely",
    summary: "Centered on the Fremont Street Experience, with a free Downtown Loop shuttle linking nearby attractions.",
    tradeoff: "Not on the Strip; check the area around your hotel before booking.",
    bestFor: "Repeat visitors, nightlife, budget trips",
  },
  {
    name: "Henderson",
    label: "Best quiet base",
    price: "Check live rates",
    summary: "A suburb southeast of the Strip, home to Green Valley Ranch and near Lake Las Vegas.",
    tradeoff: "Most visitors will want a car or rideshare for Strip trips.",
    bestFor: "Families, outdoor time, week-long stays",
  },
  {
    name: "Summerlin",
    label: "Best nature access",
    price: "Check live rates",
    summary: "A west-side suburb with Red Rock Resort and Downtown Summerlin; Red Rock Canyon is nearby.",
    tradeoff: "A longer trip to the Strip; plan on a car or rideshare.",
    bestFor: "Hiking, quieter upscale stays",
  },
];

const quickTips = [
  "Resort fees are charged on top of the advertised room rate at many Strip resorts. Compare the all-in nightly cost, including the fee and tax, not just the base rate.",
  "Parking can be an extra daily charge or can be included in a resort fee. Check your hotel's own parking page before you book, especially if you are renting a car.",
  "Room rates tend to move with weekends, conventions and big events. If your dates are flexible, compare several nights on the hotel page before you commit.",
  "Compare the hotel's own site with other booking sites for the same room type, and check what each rate includes and how it can be cancelled.",
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
          "Resort fees, parking and getting around from each base",
          "How to decode resort fees and true nightly cost",
          "Local tips most first-timers miss",
        ]}
      />
      <BookingCTA
        variant="slim"
        text="Compare live hotel prices across the Strip and Downtown"
        href="/destination/lasvegas/hotel?from=best-areas-to-stay"
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
        title="Staying safe in Las Vegas"
        paragraphs={[
          "Most Strip resorts have their own security staff, and the main sidewalks are busy for much of the day and night. Conditions still vary by block and time of day, so read our Las Vegas safety guide before you choose a base.",
          "Fremont Street Experience is a pedestrian attraction with its own security presence. Check the area around any Downtown hotel before booking, and plan how you will get back at night.",
          "Henderson and Summerlin are suburban areas away from the Strip. They suit travelers who want a calmer base and are happy to drive or use rideshare for Strip trips.",
        ]}
        tip="Wherever you stay, plan your late-night route back to the hotel before you go out."
        warning="Check recent local advice and your hotel's surroundings before booking, and avoid unfamiliar areas late at night."
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
      <section aria-labelledby="cost-lv" className={styles.section}>
        <h2 id="cost-lv">What a Las Vegas stay costs beyond the room rate</h2>
        <p className={styles.sectionIntro}>
          Resort fees and parking can change which base is cheaper. The figures below are the ones
          each operator publishes on its own site, as we checked them in November 2026. Fees are
          set by the resorts and can change, so confirm the total on your booking before you pay.
        </p>
        <div className={styles.areaList}>
          <article className={styles.areaItem}>
            <h3>Resort fees at some popular bases</h3>
            <p className={styles.areaSummary}>
              Wynn Las Vegas and Encore list a resort fee of $55 plus tax per night, and say it
              includes self-parking for up to two vehicles. The Venetian lists a resort fee of $55
              plus tax. Red Rock Resort (Summerlin) lists $62.15 and Green Valley Ranch (Henderson)
              lists $62.70, both shown as tax-inclusive on the Station Casinos fee page; both
              resorts describe it as a nightly fee. Station Casinos says
              its fee covers items such as Wi-Fi and fitness-center access.
            </p>
          </article>
          <article className={styles.areaItem}>
            <h3>Parking at some popular bases</h3>
            <p className={styles.areaSummary}>
              At the Venetian, registered guests pay $20 a day for self-parking and $40 a day for
              valet, and Sapphire Rewards members and above park free. MGM Resorts lists $20 a day
              for registered guests at MGM Grand, Mandalay Bay, Luxor and Excalibur, and says prices
              may be higher during special events. Golden Nugget
              Downtown lists free self-parking for registered guests, with a clearance of 6 ft 7 in
              in its garage, and guest valet at $20 per vehicle per day. Because the Wynn fee already
              includes parking, the same car can cost different amounts at different resorts. Add
              the fee and parking together when you compare.
            </p>
          </article>
        </div>
      </section>
      <section aria-labelledby="getting-around-lv" className={styles.section}>
        <h2 id="getting-around-lv">Getting around from each base</h2>
        <p className={styles.sectionIntro}>
          Where you stay decides how you reach the rest of the Strip. These are the public options
          the operators publish; check each operator&apos;s current schedule before you rely on one.
        </p>
        <div className={styles.areaList}>
          <article className={styles.areaItem}>
            <h3>Las Vegas Monorail</h3>
            <p className={styles.areaSummary}>
              The Monorail has seven stations along about 3.9 miles of track, and an end-to-end ride
              takes around 15 minutes. Check the{" "}
              <a href="https://www.lvmonorail.com/route-map/" target="_blank" rel="noopener noreferrer">
                station map
              </a>{" "}
              against your hotel before you choose a base, because not every resort has its own
              station.
            </p>
          </article>
          <article className={styles.areaItem}>
            <h3>The Deuce bus</h3>
            <p className={styles.areaSummary}>
              The RTC&apos;s Deuce runs 24 hours a day. Its published timetable lists service
              approximately every 10 to 15 minutes from 7 a.m. to 1 a.m. and approximately every 20
              minutes from 1 a.m. to 7 a.m. Frequencies, routes and stops can change, including
              temporarily for events and construction, so check{" "}
              <a href="https://www.rtcsnv.com/ways-to-travel/alerts-detours/" target="_blank" rel="noopener noreferrer">
                RTC&apos;s alerts and detours page
              </a>{" "}
              for notices on your dates.
            </p>
          </article>
          <article className={styles.areaItem}>
            <h3>The Mandalay Bay tram</h3>
            <p className={styles.areaSummary}>
              A tram connects Mandalay Bay, Luxor and Excalibur. The
              resorts&apos; own pages publish different hours, with Excalibur listing an earlier
              weekday opening than Mandalay Bay and Luxor, and they do not state one fare policy. Check
              the current hours with the resort before you plan a day around it.
            </p>
          </article>
          <article className={styles.areaItem}>
            <h3>Downtown Loop</h3>
            <p className={styles.areaSummary}>
              The Downtown Loop is a free shuttle, listed by the RTC as a City of Las Vegas program.
              Its hours, stops and routing can change,
              so check the current schedule on the{" "}
              <a href="https://www.rtcsnv.com/ways-to-travel/schedules-maps/" target="_blank" rel="noopener noreferrer">
                RTC schedules and maps page
              </a>{" "}
              before you rely on it.
            </p>
          </article>
          <article className={styles.areaItem}>
            <h3>From Harry Reid International Airport</h3>
            <p className={styles.areaSummary}>
              The airport lists RTC Route 108 and the Red Line, which replaced Route 109, at
              Terminal 1, Level Zero. Arrivals at Terminal 3 take the inter-terminal shuttle to reach
              that stop. RTC changed several routes in August 2026, so check its current map. We do
              not give a single airport-to-Strip distance because it depends on which resort you are
              going to. Ask your hotel about its own airport transfer options.
            </p>
          </article>
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
      <BookingCTA variant="full" text="Find the right hotel in Las Vegas for your stay" href="/destination/lasvegas/hotel?from=best-areas-to-stay" label="Book your trip" />
    </>
  );
}
