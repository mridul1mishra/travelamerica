// Server Component — no hooks used. Interactive bits (header, quiz) are client components.
import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import OrlandoPlanningQuiz from "./components/OrlandoPlanningQuiz";
import styles from "@/app/destination/city-hub.module.css";

const navLinks = [
  { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
  { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
  { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
];

const attractions = [
  { name: "Walt Disney World", blurb: "4 parks: Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom. Plan 1 day per park minimum. Buy tickets in advance — prices rise at the gate.", href: "/destination/orlando/things-to-do" },
  { name: "Universal Orlando Resort", blurb: "Universal Studios + Islands of Adventure. Wizarding World of Harry Potter spans both parks. Early entry is worth the upcharge.", href: "/destination/orlando/things-to-do" },
  { name: "Kennedy Space Center", blurb: "45 min from Orlando. Real rockets, astronaut stories, and live launch viewing opportunities. Allow a full day.", href: "/destination/orlando/landmark" },
  { name: "Discovery Cove", blurb: "All-inclusive day resort with dolphin swims, snorkeling, and a lazy river. Capacity-limited so it never feels crowded. Book weeks ahead.", href: "/destination/orlando/things-to-do" },
  { name: "SeaWorld Orlando", blurb: "Beyond the marine shows: Mako, Manta, and Ice Breaker are genuinely excellent coasters. Half-day is enough for most visitors.", href: "/destination/orlando/things-to-do" },
  { name: "ICON Park (International Drive)", blurb: "The Wheel, Madame Tussauds, and a cluster of attractions on I-Drive. Good for a rainy half-day or evening between park days.", href: "/destination/orlando/things-to-do" },
];

const neighborhoods = [
  { name: "Lake Buena Vista / Disney Springs Area", vibe: "Closest to Disney's 4 parks. On-site Disney hotels get early park entry. Pricier but removes logistics.", bestFor: "Disney-focused trips, families" },
  { name: "Universal / International Drive", vibe: "Midpoint between Disney and Downtown. Walk to Universal, easy access to I-Drive dining and attractions.", bestFor: "Universal visitors, flexible itineraries" },
  { name: "International Drive (I-Drive)", vibe: "Hotel-dense corridor with restaurants, mini-golf, shops, and ICON Park. Noisy but very convenient.", bestFor: "Budget stays, first-timers" },
  { name: "Kissimmee", vibe: "South of Disney, budget-friendly vacation homes and hotels. Requires a car. Popular with families renting houses.", bestFor: "Large groups, budget-conscious families" },
  { name: "Downtown Orlando", vibe: "Local vibe, good restaurants, Lake Eola park. 30 min from Disney. No theme park convenience but authentic city character.", bestFor: "Repeat visitors, longer stays" },
];

const experiences = [
  { title: "Theme Parks", blurb: "Disney, Universal, SeaWorld, Busch Gardens (Tampa, 90 min away). Multi-day park-hopper passes save money if you're doing 3+ days.", href: "/destination/orlando/things-to-do" },
  { title: "Water Parks", blurb: "Typhoon Lagoon and Blizzard Beach (Disney), Volcano Bay (Universal). Best in summer — lines are shorter on weekday mornings.", href: "/destination/orlando/things-to-do" },
  { title: "Day Trips", blurb: "Kennedy Space Center (45 min), St. Pete Beach (90 min), Tampa (90 min), Busch Gardens (90 min), Everglades airboat tours (3 hr).", href: "/destination/orlando/landmark" },
  { title: "Springs & Outdoors", blurb: "Florida's natural springs — Wekiva, Blue Spring, Silver Springs — are an hour away and worth a half-day escape from the parks.", href: "/destination/orlando/things-to-do" },
];

const whereToStay = [
  { title: "Best Areas to Stay in Orlando", description: "Park zones ranked by convenience, price, and who they suit — on-site vs. off-site explained, with picks for families, budget travelers, and first-timers.", href: "/destination/orlando/best-areas-to-stay" },
  { title: "Orlando Neighborhood Guide", description: "A closer look at each area — Lake Buena Vista, I-Drive, Kissimmee, and Downtown — what they're actually like and which parks they put you closest to.", href: "/destination/orlando/neighborhood-guide" },
];

const itineraries = [
  { title: "5-Day Orlando Theme Park Itinerary", description: "Day 1: Magic Kingdom. Day 2: Universal + Islands of Adventure. Day 3: EPCOT. Day 4: Hollywood Studios. Day 5: Kennedy Space Center or water park.", href: "/destination/orlando/itinerary" },
  { title: "Orlando Without Kids", description: "EPCOT World Showcase food and wine circuit, Discovery Cove dolphins, Kennedy Space Center, natural springs — the non-thrill-ride side of Orlando.", href: "/destination/orlando/solo-itinerary" },
];

const guides = [
  { title: "Orlando Safety Guide", href: "/destination/orlando/safety-guide" },
  { title: "Solo Trip to Orlando", href: "/destination/orlando/solo-trip-to-orlando" },
  { title: "Best Areas to Stay", href: "/destination/orlando/best-areas-to-stay" },
  { title: "Neighborhood Guide", href: "/destination/orlando/neighborhood-guide" },
  { title: "Landmark Guide", href: "/destination/orlando/landmark" },
  { title: "Things to Do", href: "/destination/orlando/things-to-do" },
  { title: "Food Guide", href: "/destination/orlando/food" },
  { title: "Group Travel", href: "/destination/orlando/group-travel" },
];

export default function OrlandoHubClient() {
  return (
    <main>
      <Header links={navLinks} />

      {/* Slim booking CTA */}
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Compare cheap flights to MCO, park-area hotels, and attraction tickets →</span>
        <Link href="/destination/orlando/bookings?tab=flights" className={styles.slimCtaBtn} aria-label="Book your Orlando trip">Book your trip</Link>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <h1>Orlando Travel Guide</h1>
        <p>For first-timers, families, and anyone planning a theme park trip. Practical planning for Orlando — which parks to prioritize, where to stay, and what to do beyond Disney.</p>
        <div className={styles.heroCtas}>
          <Link href="#planning" className={styles.primaryCta}>Start planning your Orlando trip</Link>
          <Link href="#neighborhoods" className={styles.secondaryCta}>Where to stay in Orlando</Link>
        </div>
        <p className={styles.updated}>Updated for 2026</p>
      </section>

      {/* Planning quiz */}
      <OrlandoPlanningQuiz />

      {/* Why Orlando */}
      <section className={styles.section} aria-labelledby="why-orlando">
        <h2 id="why-orlando" className={styles.sectionTitle}>Why Orlando Works for So Many Trips</h2>
        <p className={styles.sectionIntro}>Orlando is the most-visited city in the United States — and the reason isn't just Disney. It's that the city is genuinely built around the visitor experience in a way almost no other destination is. Every major accommodation tier, every budget level, and nearly every travel style has something purpose-built for it here. Understanding how the city is laid out before you book makes a real difference in how smoothly the trip goes.</p>
        <div className={styles.whyGrid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>More Theme Parks Than Anywhere Else</h3>
            <p className={styles.cardBody}>Disney World alone has 4 full parks — Magic Kingdom, EPCOT, Hollywood Studios, and Animal Kingdom. Add Universal's two parks, SeaWorld, Busch Gardens 90 minutes away, and multiple water parks, and you could spend two weeks without repeating a venue.</p>
            <p className={styles.cardBody}>The competition between parks also keeps the experience quality high. Disney and Universal in particular have both invested heavily in immersive, world-class experiences that genuinely hold up for adult visitors, not just families with young children.</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Year-Round Sunshine With a Predictable Pattern</h3>
            <p className={styles.cardBody}>Florida averages 233 sunny days a year. Summer brings humidity and afternoon thunderstorms — but they're consistent and usually short, clearing by evening. The real consideration is crowd levels, not weather: January through early March and September through November offer the best combination of manageable lines and comfortable temperatures.</p>
            <p className={styles.cardBody}>For water parks and outdoor days, morning arrivals beat the heat and the afternoon storm window. The parks run efficiently enough that even summer trips work well if you plan around the rhythm.</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>A Better Road-Trip Hub Than It Looks</h3>
            <p className={styles.cardBody}>Kennedy Space Center (45 min), Canaveral National Seashore, Florida's natural springs — Wekiva, Blue Spring, Silver Springs — Gulf Coast beaches at St. Pete and Clearwater (90 min), and the Everglades (3 hr) are all day-trip distance. Most visitors don't realize how much of Florida is accessible from Orlando.</p>
            <p className={styles.cardBody}>A well-planned trip can combine 3–4 days of parks with 1–2 day trips and feel like a genuinely varied Florida experience — not just a theme park marathon.</p>
          </article>
        </div>
      </section>

      {/* Top Attractions */}
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="attractions-orlando">
        <h2 id="attractions-orlando" className={styles.sectionTitle}>Top Attractions Worth Your Time</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          6 Orlando attractions with realistic time estimates and the tips that actually matter.
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
          <Link href="/destination/orlando/landmark" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>See all Orlando attractions with full details →</Link>
        </div>
      </section>

      {/* Neighborhoods */}
      <section id="neighborhoods" className={styles.section} aria-labelledby="neighborhoods-orlando">
        <h2 id="neighborhoods-orlando" className={styles.sectionTitle}>Where to Stay in Orlando</h2>
        <p className={styles.sectionIntro}>In Orlando, where you stay determines your entire logistics. On-site vs. off-site is the key decision.</p>
        <div className={styles.grid}>
          {neighborhoods.map(({ name, vibe, bestFor }) => (
            <Link key={name} href="/destination/orlando/neighborhood-guide" className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardBody}>{vibe}</p>
              <p className={styles.cardMeta}>Best for: {bestFor}</p>
            </Link>
          ))}
        </div>
        <Link href="/destination/orlando/neighborhood-guide" className={styles.seeAll}>Compare all Orlando areas →</Link>
      </section>

      {/* Experiences */}
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="experiences-orlando">
        <h2 id="experiences-orlando" className={styles.sectionTitle}>What to Do in Orlando</h2>
        <p className={styles.sectionIntro}>Orlando is more than roller coasters — here are the four categories that shape most trips.</p>
        <div className={styles.grid}>
          {experiences.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Where to Stay detail */}
      <section className={styles.section} aria-labelledby="hotels-orlando">
        <h2 id="hotels-orlando" className={styles.sectionTitle}>Where to Stay in Orlando</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          In Orlando, where you stay determines your entire trip logistics. On-site Disney and Universal hotels offer real perks — early park entry, no car needed — but off-site options can save hundreds over a week.
        </p>
        <div className={styles.grid}>
          {whereToStay.map(({ title, description, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block", textAlign: "center" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Itineraries */}
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="itineraries-orlando">
        <h2 id="itineraries-orlando" className={styles.sectionTitle}>Sample Itineraries</h2>
        <p className={styles.sectionIntro}>How to pace an Orlando trip so you see the right parks without burning out.</p>
        <div className={styles.grid}>
          {itineraries.map(({ title, description, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides / bookmark block */}
      <section className={styles.section} aria-labelledby="guides-orlando">
        <h2 id="guides-orlando" className={styles.sectionTitle}>Coming Back to Plan?</h2>
        <p className={styles.sectionIntro}>Bookmark these guides — they&apos;re updated as Orlando changes.</p>
        <div className={styles.bookmarkGrid}>
          {guides.map(({ title, href }) => (
            <Link key={href} href={href} className={styles.bookmarkLink}>{title}</Link>
          ))}
        </div>
      </section>

      {/* Full booking CTA */}
      <div className={styles.bookingStrip}>
        <h2>Ready to book your Orlando trip?</h2>
        <p>Compare cheap flights to MCO, browse park-area hotels, and book theme park tickets.</p>
        <Link href="/destination/orlando/bookings?tab=flights" className={styles.bookingBtn} aria-label="Book Orlando trip">Compare flights, hotels &amp; tickets</Link>
      </div>

      <Footer />
    </main>
  );
}
