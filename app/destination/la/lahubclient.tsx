// Server Component — no hooks used. Interactive bits (header, quiz) are client components.
import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import LAPlanningQuiz from "./components/LAPlanningQuiz";
import styles from "@/app/destination/city-hub.module.css";

const navLinks = [
  { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
  { href: "/destination/la/safety-guide", label: "LA Safety" },
  { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
];

const attractions = [
  { name: "Griffith Observatory", blurb: "Free entry to the grounds. The best skyline view in LA — especially at sunset. Hike up from the Greek Theatre parking lot (45 min) or drive up.", href: "/destination/la/landmark" },
  { name: "The Getty Center", blurb: "Free admission (parking $22). World-class art collection + stunning architecture + views over LA. Allow 3 hours minimum.", href: "/destination/la/landmark" },
  { name: "Venice Beach Boardwalk", blurb: "The quintessential LA beach experience — street performers, Muscle Beach, eclectic shops. Walk south to quieter Marina del Rey for contrast.", href: "/destination/la/things-to-do" },
  { name: "Hollywood Walk of Fame & TCL Chinese Theatre", blurb: "Walk it once. The area around it is touristy — Hollywood Blvd has improved but still requires awareness. Hollywood Hills hike is far better.", href: "/destination/la/landmark" },
  { name: "Santa Monica Pier & 3rd Street Promenade", blurb: "Pacific Park rides on the pier, then walk up 3rd Street for food. Best on a weekday — weekends get crowded fast.", href: "/destination/la/things-to-do" },
  { name: "LACMA & Museum Row", blurb: "Los Angeles County Museum of Art plus The Broad, MOCA, and the Natural History Museum — all within a mile or two. Full art day possible.", href: "/destination/la/landmark" },
];

const neighborhoods = [
  { name: "Santa Monica", vibe: "Beach city feel, walkable, safe, great restaurants. Pricier hotels but you can do LA without a car if you stay here.", bestFor: "First-time visitors, beach lovers" },
  { name: "Hollywood / Los Feliz", vibe: "Central location, easy freeway access. Los Feliz is trendier and more local. Hollywood proper is more tourist-facing.", bestFor: "Budget mid-range stays, central access" },
  { name: "West Hollywood (WeHo)", vibe: "Walkable strip of Sunset Blvd. Great nightlife and dining. Boutique hotels. LGBTQ+ friendly, vibrant, energetic.", bestFor: "Nightlife, dining scene, repeat visitors" },
  { name: "Silver Lake / Echo Park", vibe: "Indie, creative, very local. Coffee shops, record stores, hiking. Farther from beach but close to DTLA.", bestFor: "Younger travelers, longer stays" },
  { name: "Manhattan Beach / Hermosa Beach", vibe: "South Bay beach cities. Quieter than Santa Monica, family-friendly. 30 min from LAX.", bestFor: "Beach-focused trips, families" },
  { name: "Downtown LA (DTLA)", vibe: "Grand Central Market, The Broad, Arts District. Improving but uneven — pick your block carefully.", bestFor: "Art, food, urban exploration" },
];

const experiences = [
  { title: "Beaches & Outdoors", blurb: "Santa Monica, Venice, Malibu, El Matador State Beach. The Santa Monica Mountains Conservancy has 500+ miles of hiking trails within the city.", href: "/destination/la/things-to-do" },
  { title: "Film & Pop Culture", blurb: "Warner Bros. Studio Tour ($70+), Paramount Pictures tour, Hollywood Forever Cemetery screenings, TCL Chinese Theatre. Book studio tours in advance.", href: "/destination/la/things-to-do" },
  { title: "Museums & Culture", blurb: "Getty Center (free), LACMA, The Broad, Natural History Museum. Museum Row on Wilshire Blvd alone covers a full day.", href: "/destination/la/landmark" },
  { title: "Food & Neighborhoods", blurb: "Grand Central Market, Koreatown, Little Tokyo, Boyle Heights tacos, Erewhon Market culture. LA's food scene is genuinely world-class.", href: "/destination/la/food" },
];

const whereToStay = [
  { title: "Best Areas to Stay in LA", description: "Neighborhoods ranked by safety, walkability, and what type of trip they suit. Includes first-timer picks, beach options, and budget areas.", href: "/destination/la/best-areas-to-stay" },
  { title: "LA Neighborhood Guide", description: "A deeper look at what each area is actually like — vibe, car dependency, who it's best for, and the Westside vs. Central LA trade-off explained.", href: "/destination/la/neighborhood-guide" },
];

const itineraries = [
  { title: "4-Day Los Angeles Itinerary", description: "Day 1: Santa Monica + Venice Beach. Day 2: Hollywood + Griffith Observatory. Day 3: Getty Center + LACMA + WeHo. Day 4: Malibu drive or day trip to Joshua Tree.", href: "/destination/la/itinerary" },
  { title: "LA Without a Car", description: "Stay in Santa Monica. Metro Expo Line to DTLA, Uber to Hollywood Hills. The Westside is genuinely walkable — the rest of LA less so.", href: "/destination/la/la-metro-map" },
];

const guides = [
  { title: "LA Safety Guide", href: "/destination/la/safety-guide" },
  { title: "Solo Trip to LA", href: "/destination/la/solo-trip-to-la" },
  { title: "Best Areas to Stay", href: "/destination/la/best-areas-to-stay" },
  { title: "Landmark Guide", href: "/destination/la/landmark" },
];

export default function LAHubClient() {
  return (
    <main className={styles.container}>
      <Header links={navLinks} />

      {/* Hero */}
      <section className={styles.hero}>
        <h1>Los Angeles Travel Guide</h1>
        <p>For first-timers, solo travelers, and anyone who wants the practical version. Real planning for LA — where to actually stay, how to get around, and what the city is like beyond the Hollywood clichés.</p>
        <div className={styles.heroCtas}>
          <Link href="#planning" className={styles.primaryCta}>Start planning your LA trip</Link>
          <Link href="#neighborhoods" className={styles.secondaryCta}>Where to stay in LA</Link>
        </div>
        <p className={styles.updated}>Updated for 2026</p>
      </section>

      {/* Slim booking CTA */}
      <BookingCTA
        variant="slim"
        text="Compare cheap flights to LAX, LA hotels, and activity tickets →"
        href="/destination/la/bookings?tab=flights"
        label="Book your trip"
      />

      {/* Planning quiz */}
      <LAPlanningQuiz />

      {/* Why LA */}
      <section aria-labelledby="why-la" style={{ background: "#ffffff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 id="why-la">Why Los Angeles Works for So Many Trips</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
            Los Angeles attracts travelers with genuinely different goals — beach trips, film industry pilgrimages, food-focused itineraries, outdoor adventures — and still delivers for all of them. That's because LA isn't one city; it's a collection of distinct places that happen to share a metro area.
          </p>
          <div className={styles.whyGrid} style={{ gap: "1.5rem" }}>
            <article style={{ borderRadius: "0.75rem", border: "1px solid #e5e5e5", padding: "1.25rem 1.5rem", background: "#fafafa" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Beaches, Mountains, and City in One Place</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: 0 }}>You can surf at Santa Monica in the morning, hike the Santa Monica Mountains at noon, and be at a Michelin-starred restaurant in WeHo by evening. Few cities compress that range of environments into a single day.</p>
            </article>
            <article style={{ borderRadius: "0.75rem", border: "1px solid #e5e5e5", padding: "1.25rem 1.5rem", background: "#fafafa" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>A Food Scene That Rivals Anywhere</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: 0 }}>Korean BBQ in Koreatown, Japanese in Little Tokyo, tacos in Boyle Heights, and cutting-edge tasting menus in Silver Lake and WeHo. LA's food culture is quietly one of the world's best.</p>
            </article>
            <article style={{ borderRadius: "0.75rem", border: "1px solid #e5e5e5", padding: "1.25rem 1.5rem", background: "#fafafa" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>A Trip You Can Build Around Your Pace</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: "0 0 0.5rem" }}>A focused four-day visit can hit Griffith Observatory, the Getty, Venice, and a studio tour without feeling rushed. A longer stay opens up day trips to Joshua Tree or Santa Barbara.</p>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444", margin: 0 }}>Where you stay, how you get around, which neighborhoods you wander — your choices define what the trip actually is. That flexibility is LA's real selling point.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section aria-labelledby="attractions-la">
        <h2 id="attractions-la">Top Attractions Worth Your Time</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          6 LA landmarks with practical tips, realistic time estimates, and what to know before you go.
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
          <Link href="/destination/la/landmark" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
            See all LA landmarks with full details →
          </Link>
        </div>
      </section>

      {/* Neighborhoods */}
      <section id="neighborhoods" aria-labelledby="neighborhoods-la" style={{ textAlign: "center" }}>
        <h2 id="neighborhoods-la">LA Neighborhoods</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Where you stay in LA matters enormously — it's a sprawling city and the neighborhoods are genuinely different worlds. Six areas, who they suit, and why.
        </p>
        <div className={styles.grid}>
          {neighborhoods.map(({ name, vibe, bestFor }) => (
            <Link key={name} href="/destination/la/neighborhood-guide" className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{name}</h3>
              <p style={{ color: "#555", fontSize: "0.9rem", margin: "0 0 0.5rem" }}>{vibe}</p>
              <p style={{ color: "#333", fontSize: "0.85rem", margin: 0 }}><strong>Best for:</strong> {bestFor}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="/destination/la/neighborhood-guide" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
            Full neighborhood guide with maps →
          </Link>
        </div>
      </section>

      {/* Experiences */}
      <section aria-labelledby="experiences-la">
        <h2 id="experiences-la">Things to Do in Los Angeles</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          What you want to do shapes where you should stay. The four categories that define most LA trips.
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
          <Link href="/destination/la/things-to-do" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
            See all things to do in Los Angeles
          </Link>
        </div>
      </section>

      {/* Where to Stay */}
      <section aria-labelledby="hotels-la">
        <h2 id="hotels-la">Where to Stay in Los Angeles</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Choosing the right area matters more in LA than almost any city — it's sprawling, car-dependent, and neighborhoods feel like different cities. The Westside suits first-timers; Central LA offers better value and location.
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
      <section aria-labelledby="itineraries-la">
        <h2 id="itineraries-la">Sample Itineraries</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Not sure how to structure your days? These itineraries show how to pace an LA trip given the city's size and traffic.
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

      {/* Guides / bookmark block */}
      <section aria-labelledby="guides-la" className={styles.highlight}>
        <h2 id="guides-la">Coming Back to Plan?</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Bookmark these guides — they&apos;re updated as LA changes.
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
        headline="Ready to book your Los Angeles trip?"
        text="Compare cheap flights to LAX, browse LA hotels by neighborhood, and book activity tickets."
        href="/destination/la/bookings?tab=flights"
        label="Compare flights, hotels & tickets"
      />

      <Footer />
    </main>
  );
}
