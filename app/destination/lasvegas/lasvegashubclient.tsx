// Server Component — no hooks used. Interactive bits (header, quiz) are client components.
import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import LasVegasPlanningQuiz from "./components/LasVegasPlanningQuiz";
import styles from "@/app/destination/city-hub.module.css";

const navLinks = [
  { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Vegas" },
  { href: "/destination/lasvegas/safety-guide", label: "Vegas Safety" },
  { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
];

const attractions = [
  { name: "The Bellagio Fountains", blurb: "Free to watch. Shows every 30 min by day, every 15 min at night. Best viewed from the sidewalk opposite the hotel.", href: "/destination/lasvegas/things-to-do" },
  { name: "High Roller Observation Wheel", blurb: "550-ft wheel on the LINQ promenade. Best at sunset. Happy hour cabin available — open bar during your 30-min rotation.", href: "/destination/lasvegas/things-to-do" },
  { name: "Fremont Street Experience", blurb: "Downtown's covered LED canopy with free live music nightly. A grittier, older Vegas vibe worth a half-evening.", href: "/destination/lasvegas/things-to-do" },
  { name: "Hoover Dam", blurb: "30-min drive from the Strip. Self-guided or guided tours. Combine with a stop at Lake Mead for a full day out.", href: "/destination/lasvegas/landmark" },
  { name: "Grand Canyon West Rim", blurb: "2.5-hr drive — the closest canyon rim to Las Vegas. The Skywalk glass bridge is the key attraction. Book in advance.", href: "/destination/lasvegas/landmark" },
  { name: "The Mob Museum", blurb: "Downtown. Genuinely excellent museum on organized crime in America. Allow 2–3 hours. Skip-the-line tickets available.", href: "/destination/lasvegas/landmark" },
];

const neighborhoods = [
  { name: "The Strip (Center)", vibe: "Most hotels, casinos, shows and restaurants within walking distance. Loud and busy 24/7.", bestFor: "First-time visitors, nightlife" },
  { name: "The Strip (North)", vibe: "Quieter end near the Stratosphere. Budget hotel options. Less walking distance to mid-Strip landmarks.", bestFor: "Budget stays, longer trips" },
  { name: "Downtown / Fremont", vibe: "Older, grittier, more local. Lower hotel prices. Fremont Street Experience is the centrepiece.", bestFor: "Budget travelers, repeat visitors" },
  { name: "Henderson", vibe: "Residential suburb, 20 min from the Strip. Quieter, family-friendly. Lake Las Vegas nearby.", bestFor: "Families, outdoor activities" },
  { name: "Summerlin", vibe: "Upscale western suburb. Red Rock Canyon access. Peaceful, away from the casino energy.", bestFor: "Hiking, nature, quieter stays" },
];

const experiences = [
  { title: "Shows & Entertainment", blurb: "Cirque du Soleil, residency concerts, comedy clubs, magic shows — book early. Prices range from $30 to $200+.", href: "/destination/lasvegas/things-to-do" },
  { title: "Day Trips", blurb: "Hoover Dam (30 min), Valley of Fire (1 hr), Grand Canyon West (2.5 hr), Zion National Park (2.5 hr).", href: "/destination/lasvegas/landmark" },
  { title: "Dining & Nightlife", blurb: "Every major chef has a restaurant on the Strip. Gordon Ramsay, Guy Fieri, Wolfgang Puck. Buffets still exist but are no longer budget options.", href: "/destination/lasvegas/food" },
  { title: "Casinos & Gaming", blurb: "Table minimums vary widely. Downtown casinos have lower minimums than Strip properties. Set a budget before you arrive.", href: "/destination/lasvegas/things-to-do" },
];

const whereToStay = [
  { title: "Best Areas to Stay in Las Vegas", description: "Strip zones and off-Strip options ranked by price, location, and trip type — with honest picks for first-timers, budget travelers, and those who want something quieter.", href: "/destination/lasvegas/best-areas-to-stay" },
  { title: "Las Vegas Neighborhood Guide", description: "A closer look at the Strip, Downtown Fremont, Henderson, and Summerlin — what each area is actually like and how far they put you from the action.", href: "/destination/lasvegas/neighborhood-guide" },
];

const itineraries = [
  { title: "3-Day Las Vegas Itinerary", description: "Day 1: Strip walk + Bellagio + shows. Day 2: Day trip to Hoover Dam or Valley of Fire. Day 3: Fremont Street + Museum + late night.", href: "/destination/lasvegas/itinerary" },
  { title: "Las Vegas on a Budget", description: "Free attractions (fountains, hotel lobbies, Fremont canopy), cheap eats, off-Strip casinos, and when to find the best room rates.", href: "/destination/lasvegas/solo-itinerary" },
];

const guides = [
  { title: "Las Vegas Safety Guide", href: "/destination/lasvegas/safety-guide" },
  { title: "Solo Trip to Las Vegas", href: "/destination/lasvegas/solo-trip-to-lasvegas" },
  { title: "Best Areas to Stay", href: "/destination/lasvegas/best-areas-to-stay" },
  { title: "Neighborhood Guide", href: "/destination/lasvegas/neighborhood-guide" },
  { title: "Landmark Guide", href: "/destination/lasvegas/landmark" },
  { title: "Things to Do", href: "/destination/lasvegas/things-to-do" },
  { title: "Food Guide", href: "/destination/lasvegas/food" },
  { title: "Group Travel", href: "/destination/lasvegas/group-travel" },
];

export default function LasVegasHubClient() {
  return (
    <main className={styles.container}>
      <Header links={navLinks} />

      {/* Hero */}
      <section className={styles.hero}>
        <h1>Las Vegas Travel Guide</h1>
        <p>For first-timers, solo travelers, and anyone who wants to skip the tourist traps. Real planning for a real Vegas trip — where to stay, what the Strip is actually like, and what to do beyond the casinos.</p>
        <div className={styles.heroCtas}>
          <Link href="#planning" className={styles.primaryCta}>Start planning your Vegas trip</Link>
          <Link href="#neighborhoods" className={styles.secondaryCta}>Where to stay in Vegas</Link>
        </div>
        <p className={styles.updated}>Updated for 2026</p>
      </section>

      {/* Slim booking CTA */}
      <BookingCTA
        variant="slim"
        text="Ready to book? Compare cheap flights to LAS, hotels, and activities →"
        href="/destination/lasvegas/bookings?tab=flights"
        label="Book your trip"
      />

      {/* Planning quiz */}
      <LasVegasPlanningQuiz />

      {/* Why Las Vegas */}
      <section aria-labelledby="why-lv" style={{ background: "#ffffff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 id="why-lv">Why Las Vegas Works for So Many Trips</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
            Las Vegas works for an unusually wide range of travelers — couples, solo visitors, groups, people who gamble and people who never touch a table. The key is deciding which version of Vegas you actually want before you arrive.
          </p>
          <div className={styles.whyGrid} style={{ gap: "1.5rem" }}>
            <article style={{ borderRadius: "0.75rem", border: "1px solid #e5e5e5", padding: "1.25rem 1.5rem", background: "#fafafa" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Everything Concentrated on the Strip</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: "0 0 0.5rem" }}>The 4-mile Las Vegas Boulevard puts dozens of casino-resorts, restaurants, bars, pools, and entertainment venues within walking distance. Most visitors spend the majority of their trip in a roughly 10-block radius.</p>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: 0 }}>The walkability is deceptive though — blocks are long and casino floors add time. Budget more time than you think to get between properties, especially mid-Strip on busy weekend evenings.</p>
            </article>
            <article style={{ borderRadius: "0.75rem", border: "1px solid #e5e5e5", padding: "1.25rem 1.5rem", background: "#fafafa" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>World-Class Shows and Dining</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: "0 0 0.5rem" }}>Residency concerts, multiple Cirque du Soleil productions, comedy clubs, magic shows, and boxing — Vegas has more live entertainment per square mile than almost anywhere on earth. Shows sell out weeks ahead; booking early is standard practice, not optional.</p>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: 0 }}>Dining has genuinely elevated over the past decade. Gordon Ramsay, José Andrés, Joël Robuchon, and nearly every major chef have restaurants on the Strip — ranging from $15 casual to $300+ tasting menus.</p>
            </article>
            <article style={{ borderRadius: "0.75rem", border: "1px solid #e5e5e5", padding: "1.25rem 1.5rem", background: "#fafafa" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>An Underrated Base for the Southwest</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: "0 0 0.5rem" }}>Hoover Dam (30 min), Valley of Fire State Park (1 hr), Red Rock Canyon (30 min), and Grand Canyon West Rim (2.5 hr) are all day-trip distance. Zion National Park is 2.5 hours northeast.</p>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: 0 }}>A 4–5 day Vegas trip that mixes two or three day trips with Strip time is one of the best-value travel itineraries in the country — especially if you rent a car for day-trip days and use rideshares on the Strip nights.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section aria-labelledby="attractions-lv">
        <h2 id="attractions-lv">Top Attractions Worth Your Time</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          6 Las Vegas attractions with practical tips and what to know before you go.
        </p>
        <div className={styles.attractionList}>
          {attractions.map(({ name, blurb, href }) => (
            <Link key={name} href={href} className={styles.attractionItem} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 style={{ marginBottom: "0.25rem", fontSize: "1rem", fontWeight: 600 }}>{name}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{blurb}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="/destination/lasvegas/landmark" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>See all Las Vegas landmarks with full details →</Link>
        </div>
      </section>

      {/* Neighborhoods */}
      <section id="neighborhoods" aria-labelledby="neighborhoods-lv" style={{ textAlign: "center" }}>
        <h2 id="neighborhoods-lv">Las Vegas Neighborhoods</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Where you stay determines how you experience Vegas. The Strip and Downtown are very different trips. Five areas, who they suit, and why.
        </p>
        <div className={styles.grid}>
          {neighborhoods.map(({ name, vibe, bestFor }) => (
            <Link key={name} href="/destination/lasvegas/neighborhood-guide" className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{name}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: "0 0 0.5rem" }}>{vibe}</p>
              <p style={{ color: "#333", fontSize: "0.85rem", margin: 0 }}><strong>Best for:</strong> {bestFor}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="/destination/lasvegas/neighborhood-guide" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>Full neighborhood guide →</Link>
        </div>
      </section>

      {/* Experiences */}
      <section aria-labelledby="experiences-lv">
        <h2 id="experiences-lv">Things to Do in Las Vegas</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          What you want to do shapes where you should stay. The four categories that define most Vegas trips.
        </p>
        <div className={styles.grid}>
          {experiences.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{blurb}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="/destination/lasvegas/things-to-do" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>See all things to do in Las Vegas</Link>
        </div>
      </section>

      {/* Where to Stay */}
      <section aria-labelledby="wheretostay-lv">
        <h2 id="wheretostay-lv">Where to Stay in Las Vegas</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Hotel location defines the Vegas trip more than almost any other decision. Mid-Strip puts everything in walking distance; Downtown offers lower prices and a different atmosphere.
        </p>
        <div className={styles.grid}>
          {whereToStay.map(({ title, description, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Itineraries */}
      <section aria-labelledby="itineraries-lv">
        <h2 id="itineraries-lv">Sample Itineraries</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Not sure how to structure your days? These itineraries show how to pace a Vegas trip so you see and do the things that actually matter.
        </p>
        <div className={styles.grid}>
          {itineraries.map(({ title, description, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section aria-labelledby="guides-lv" className={styles.highlight}>
        <h2 id="guides-lv">Coming Back to Plan?</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Bookmark these guides — they&apos;re updated as Las Vegas changes.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", maxWidth: 720, margin: "0 auto" }}>
          {guides.map(({ title, href }) => (
            <Link key={href} href={href} style={{ display: "block", padding: "1rem 1.25rem", border: "1px solid #e2e8f0", borderRadius: 8, background: "#fff", textDecoration: "none", color: "#0364A0", fontWeight: 600, fontSize: "0.95rem", textAlign: "center" }}>{title}</Link>
          ))}
        </div>
      </section>

      {/* Full booking CTA */}
      <BookingCTA
        variant="full"
        headline="Ready to book your Las Vegas trip?"
        text="Compare cheap flights to LAS, browse Strip hotels, and book tickets for shows and attractions."
        href="/destination/lasvegas/bookings?tab=flights"
        label="Compare flights, hotels &amp; tickets"
      />

      <Footer />
    </main>
  );
}
