// Server Component — no hooks used. Interactive bits (header, quiz) are client components.
import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
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
    <main>
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
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Compare cheap flights to LAX, LA hotels, and activity tickets →</span>
        <Link href="/destination/la/bookings?tab=flights" className={styles.slimCtaBtn} aria-label="Book your LA trip">Book your trip</Link>
      </div>

      {/* Planning quiz */}
      <LAPlanningQuiz />

      {/* Why LA */}
      <section className={styles.section} aria-labelledby="why-la">
        <h2 id="why-la" className={styles.sectionTitle}>Why Los Angeles Works for So Many Trips</h2>
        <p className={styles.sectionIntro}>Los Angeles attracts travelers with genuinely different goals — beach trips, film industry pilgrimages, food-focused itineraries, outdoor adventures — and still delivers for all of them. That's because LA isn't one city; it's a collection of distinct places that happen to share a metro area. Whether you're visiting for the first time or returning with a specific plan, understanding how it's built makes the difference between a frustrating trip and a great one.</p>
        <div className={styles.whyGrid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Beaches, Mountains, and City in One Place</h3>
            <p className={styles.cardBody}>You can surf at Santa Monica in the morning, hike the Santa Monica Mountains at noon, and be at a Michelin-starred restaurant in WeHo by evening. Few cities anywhere in the world compress that range of environments into a single day.</p>
            <p className={styles.cardBody}>The geographic variety also means you can tailor the trip to your energy. A beach-and-walks week looks completely different from a museums-and-dining trip — both are easy to build without leaving the metro.</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>A Food Scene That Rivals Anywhere</h3>
            <p className={styles.cardBody}>Korean BBQ in Koreatown, Japanese in Little Tokyo, Oaxacan in Koreatown, tacos in Boyle Heights, and cutting-edge tasting menus in Silver Lake and WeHo. LA's food culture is quietly one of the world's best — and significantly underrated compared to its reputation.</p>
            <p className={styles.cardBody}>Grand Central Market alone is worth a dedicated visit. The diversity here isn't fusion or novelty — it's the real thing, driven by communities that have shaped the city for generations.</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>A Trip You Can Build Around Your Pace</h3>
            <p className={styles.cardBody}>LA rewards both fast, agenda-driven trips and slower, neighborhood-level exploration. A focused four-day visit can hit Griffith Observatory, the Getty, Venice, and a studio tour without feeling rushed. A longer stay opens up the South Bay, day trips to Joshua Tree or Santa Barbara, and the quieter, more local side of Silver Lake or Eagle Rock.</p>
            <p className={styles.cardBody}>Where most cities push you toward the same highlights, LA lets your choices — where you stay, how you get around, which neighborhoods you wander — define what the trip actually is. That flexibility is the city's real selling point.</p>
          </article>
        </div>
      </section>

      {/* Top Attractions */}
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="attractions-la">
        <h2 id="attractions-la" className={styles.sectionTitle}>Top Attractions Worth Your Time</h2>
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
          <Link href="/destination/la/landmark" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>See all LA landmarks with full details →</Link>
        </div>
      </section>

      {/* Neighborhoods */}
      <section id="neighborhoods" className={styles.section} aria-labelledby="neighborhoods-la">
        <h2 id="neighborhoods-la" className={styles.sectionTitle}>LA Neighborhoods</h2>
        <p className={styles.sectionIntro}>Where you stay in LA matters enormously — it's a sprawling city and the neighborhoods are genuinely different worlds.</p>
        <div className={styles.grid}>
          {neighborhoods.map(({ name, vibe, bestFor }) => (
            <Link key={name} href="/destination/la/neighborhood-guide" className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardBody}>{vibe}</p>
              <p className={styles.cardMeta}>Best for: {bestFor}</p>
            </Link>
          ))}
        </div>
        <Link href="/destination/la/neighborhood-guide" className={styles.seeAll}>Compare all LA neighborhoods →</Link>
      </section>

      {/* Experiences */}
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="experiences-la">
        <h2 id="experiences-la" className={styles.sectionTitle}>What to Do in Los Angeles</h2>
        <p className={styles.sectionIntro}>LA is far more than Hollywood. The four categories that shape most trips.</p>
        <div className={styles.grid}>
          {experiences.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Where to Stay */}
      <section className={styles.section} aria-labelledby="hotels-la">
        <h2 id="hotels-la" className={styles.sectionTitle}>Where to Stay in Los Angeles</h2>
        <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
          Choosing the right area matters more in LA than almost any city — it's sprawling, car-dependent, and neighborhoods feel like different cities. The Westside suits first-timers; Central LA offers better value and location.
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
      <section className={`${styles.section} ${styles.altBg}`} aria-labelledby="itineraries-la">
        <h2 id="itineraries-la" className={styles.sectionTitle}>Sample Itineraries</h2>
        <p className={styles.sectionIntro}>How to structure an LA trip given the city's size and traffic.</p>
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
      <section className={styles.section} aria-labelledby="guides-la">
        <h2 id="guides-la" className={styles.sectionTitle}>Coming Back to Plan?</h2>
        <p className={styles.sectionIntro}>Bookmark these guides — they&apos;re updated as LA changes.</p>
        <div className={styles.bookmarkGrid}>
          {guides.map(({ title, href }) => (
            <Link key={href} href={href} className={styles.bookmarkLink}>{title}</Link>
          ))}
        </div>
      </section>

      {/* Full booking CTA */}
      <div className={styles.bookingStrip}>
        <h2>Ready to book your Los Angeles trip?</h2>
        <p>Compare cheap flights to LAX, browse LA hotels by neighborhood, and book activity tickets.</p>
        <Link href="/destination/la/bookings?tab=flights" className={styles.bookingBtn} aria-label="Book LA trip">Compare flights, hotels &amp; tickets</Link>
      </div>

      <Footer />
    </main>
  );
}
