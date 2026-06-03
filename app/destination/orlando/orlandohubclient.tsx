// Server Component — no hooks used. Interactive bits (header, quiz) are client components.
import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
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
    <main className={styles.container}>
      <Header links={navLinks} />

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

      {/* Slim booking CTA */}
      <BookingCTA
        variant="slim"
        text="Compare cheap flights to MCO, park-area hotels, and attraction tickets →"
        href="/destination/orlando/bookings?tab=flights"
        label="Book your trip"
      />

      {/* Planning quiz */}
      <OrlandoPlanningQuiz />

      {/* Why Orlando */}
      <section aria-labelledby="why-orlando" style={{ background: "#ffffff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 id="why-orlando">Why Orlando Works for So Many Trips</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
            Orlando is the most-visited city in the United States — and the reason isn't just Disney. It's that the city is genuinely built around the visitor experience in a way almost no other destination is. Understanding how it's laid out before you book makes a real difference in how smoothly the trip goes.
          </p>
          <div className={styles.whyGrid} style={{ gap: "1.5rem" }}>
            <article style={{ borderRadius: "0.75rem", border: "1px solid #e5e5e5", padding: "1.25rem 1.5rem", background: "#fafafa" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>More Theme Parks Than Anywhere Else</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: "0 0 0.5rem" }}>Disney World alone has 4 full parks — Magic Kingdom, EPCOT, Hollywood Studios, and Animal Kingdom. Add Universal's two parks, SeaWorld, Busch Gardens 90 minutes away, and multiple water parks, and you could spend two weeks without repeating a venue.</p>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: 0 }}>The competition between parks keeps experience quality high. Disney and Universal have both invested heavily in immersive attractions that hold up for adult visitors, not just families with young children.</p>
            </article>
            <article style={{ borderRadius: "0.75rem", border: "1px solid #e5e5e5", padding: "1.25rem 1.5rem", background: "#fafafa" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Year-Round Sunshine With a Predictable Pattern</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: "0 0 0.5rem" }}>Florida averages 233 sunny days a year. Summer brings humidity and afternoon thunderstorms — but they're consistent and usually short, clearing by evening. January through early March and September through November offer the best combination of manageable lines and comfortable temperatures.</p>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: 0 }}>For water parks and outdoor days, morning arrivals beat the heat and the afternoon storm window. The parks run efficiently enough that even summer trips work well if you plan around the rhythm.</p>
            </article>
            <article style={{ borderRadius: "0.75rem", border: "1px solid #e5e5e5", padding: "1.25rem 1.5rem", background: "#fafafa" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>A Better Road-Trip Hub Than It Looks</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: "0 0 0.5rem" }}>Kennedy Space Center (45 min), Florida's natural springs, Gulf Coast beaches at St. Pete and Clearwater (90 min), and the Everglades (3 hr) are all day-trip distance. Most visitors don't realize how much of Florida is accessible from Orlando.</p>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: 0 }}>A well-planned trip can combine 3–4 days of parks with 1–2 day trips and feel like a genuinely varied Florida experience — not just a theme park marathon.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section aria-labelledby="attractions-orlando">
        <h2 id="attractions-orlando">Top Attractions Worth Your Time</h2>
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
      <section id="neighborhoods" aria-labelledby="neighborhoods-orlando" style={{ textAlign: "center" }}>
        <h2 id="neighborhoods-orlando">Where to Stay in Orlando</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          In Orlando, where you stay determines your entire trip logistics. Five areas, who they suit, and why.
        </p>
        <div className={styles.grid}>
          {neighborhoods.map(({ name, vibe, bestFor }) => (
            <Link key={name} href="/destination/orlando/neighborhood-guide" className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{name}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: "0 0 0.5rem" }}>{vibe}</p>
              <p style={{ color: "#333", fontSize: "0.85rem", margin: 0 }}><strong>Best for:</strong> {bestFor}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="/destination/orlando/neighborhood-guide" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>Full neighborhood guide →</Link>
        </div>
      </section>

      {/* Experiences */}
      <section aria-labelledby="experiences-orlando">
        <h2 id="experiences-orlando">Things to Do in Orlando</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          What you want to do shapes where you should stay. The four categories that define most Orlando trips.
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
          <Link href="/destination/orlando/things-to-do" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>See all things to do in Orlando</Link>
        </div>
      </section>

      {/* Where to Stay */}
      <section aria-labelledby="hotels-orlando">
        <h2 id="hotels-orlando">Plan Your Orlando Stay</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          In Orlando, where you stay determines your entire trip logistics. On-site Disney and Universal hotels offer real perks — early park entry, no car needed — but off-site options can save hundreds over a week.
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
      <section aria-labelledby="itineraries-orlando">
        <h2 id="itineraries-orlando">Sample Itineraries</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Not sure how to pace your days? These itineraries show how to structure an Orlando trip without burning out on parks.
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
      <section aria-labelledby="guides-orlando" className={styles.highlight}>
        <h2 id="guides-orlando">Coming Back to Plan?</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Bookmark these guides — they&apos;re updated as Orlando changes.
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
        headline="Ready to book your Orlando trip?"
        text="Compare cheap flights to MCO, browse park-area hotels, and book theme park tickets."
        href="/destination/orlando/bookings?tab=flights"
        label="Compare flights, hotels &amp; tickets"
      />

      <Footer />
    </main>
  );
}
