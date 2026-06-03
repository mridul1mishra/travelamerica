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
  { title: "Near Walt Disney World", description: "On-site Disney resorts get 30-min early park entry every day. Off-site hotels on Hotel Plaza Blvd are cheaper and still very close.", href: "/destination/orlando/best-areas-to-stay" },
  { title: "Near Universal Studios", description: "On-site Loews hotels get Early Park Admission to The Wizarding World. I-Drive hotels are 10 min by car and significantly cheaper.", href: "/destination/orlando/best-areas-to-stay" },
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
        <p className={styles.sectionIntro}>Orlando is the most-visited city in the United States. The reason is straightforward — it delivers more purpose-built entertainment per square mile than anywhere else on earth.</p>
        <div className={styles.whyGrid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>More Theme Parks Than Anywhere Else</h3>
            <p className={styles.cardBody}>Disney World alone has 4 full parks. Add Universal's 2 parks, SeaWorld, Busch Gardens (90 min away), and several water parks — you could spend two weeks without repeating a park.</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Year-Round Sunshine</h3>
            <p className={styles.cardBody}>Florida averages 233 sunny days per year. The only real consideration is summer humidity and afternoon storms — which are predictable and usually short.</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>More Than Theme Parks</h3>
            <p className={styles.cardBody}>Kennedy Space Center, natural springs, Gulf Coast beaches, and the Florida Everglades are all within 90 minutes. Orlando is a better road-trip hub than most visitors realize.</p>
          </article>
        </div>
      </section>

      {/* Top Attractions */}
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="attractions-orlando">
        <h2 id="attractions-orlando" className={styles.sectionTitle}>Top Attractions Worth Your Time</h2>
        <p className={styles.sectionIntro}>What to prioritize, realistic time estimates, and the tips that actually matter.</p>
        <div className={styles.grid}>
          {attractions.map(({ name, blurb, href }) => (
            <Link key={name} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </Link>
          ))}
        </div>
        <Link href="/destination/orlando/things-to-do" className={styles.seeAll}>See all things to do in Orlando →</Link>
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
        <h2 id="hotels-orlando" className={styles.sectionTitle}>Book Hotels in Orlando</h2>
        <p className={styles.sectionIntro}>On-site perks vs. off-site savings — the trade-off that defines most Orlando hotel decisions.</p>
        <div className={styles.grid}>
          {whereToStay.map(({ title, description, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{description}</p>
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
