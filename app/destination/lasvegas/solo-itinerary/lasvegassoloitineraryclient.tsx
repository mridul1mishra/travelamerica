import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const days = [
  { day: "Day 1", title: "The Strip at Your Own Pace", items: [
    "Morning: Check in and walk the Strip south to north (or north to south) — 4 miles end to end. Solo pace means no compromises: linger at the Bellagio conservatory (free, stunning floral displays), duck into Caesar's Forum Shops, walk through the Venetian's Grand Canal.",
    "Afternoon: The Bellagio fountains perform every 15 min after noon (free). The best solo vantage point is the bridge on Las Vegas Blvd — arrive a few minutes early and stand near the rail. Grab lunch at the Cosmopolitan's food hall.",
    "Evening: Book a show in advance — solo tickets are easiest to secure for Cirque du Soleil (O at Bellagio or Ka at MGM Grand). Single seats at the bar of any Strip restaurant are easy to get without a reservation.",
    "Solo tip: The Strip is extremely safe for solo walkers during daylight and evenings. The casino floors are well-monitored. You will not feel conspicuous alone — Vegas attracts solo travelers constantly.",
  ]},
  { day: "Day 2", title: "Hoover Dam & Fremont Street", items: [
    "Morning: Leave by 8am for Hoover Dam (30 min via US-93). No tour needed — the self-guided exterior walk is free and excellent. The $30 powerplant tour is worth it if you're interested in engineering. Budget 1.5–2 hours total.",
    "Midday: Stop at Boulder City on the return for lunch — a quiet, dry Nevada town with a good diner culture and no casinos. Back in Vegas by 1pm.",
    "Afternoon: Rest, pool time, or the Mob Museum in Downtown ($30, allow 2–3 hrs). Solo museum visits are excellent here — the interactive exhibits reward individual pacing.",
    "Evening: Fremont Street Experience. The free LED light show runs every hour after dark. The zip line ($35–$60) is a solo thrill. SlotZilla lower zip is better value. Eat at one of the outdoor food stalls — cheaper and more social than Strip restaurants.",
  ]},
  { day: "Day 3", title: "Red Rock Canyon & The Neon Museum", items: [
    "Morning: Red Rock Canyon Scenic Drive (30 min from the Strip, $15 vehicle entry). The 13-mile one-way loop has 8–10 pull-offs for photos. Solo hiking is excellent on the shorter trails (Calico Hills, Moenkopi Loop). Bring water and sunscreen.",
    "Midday: Back to the Strip for lunch. Wicked Spoon buffet at the Cosmopolitan is excellent solo-dining value — you control the pace and portions.",
    "Afternoon: Neon Museum boneyard tour (book ahead, $25–$28). The outdoor collection of decommissioned casino signs is best at sunset — the golden hour light on the old neon is genuinely spectacular.",
    "Evening: High Roller observation wheel sunset slot ($30–$40, book in advance). 30-min rotation with panoramic views. Excellent solo experience — you share a pod with strangers and most people are happy to chat. Last night on the Strip.",
  ]},
];

export default function LasVegasSoloItineraryClient() {
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
        text="Book solo show tickets, tours and activities →"
        href="/destination/lasvegas/bookings?tab=activities"
        label="Book activities"
      />
      <section className={styles.hero}>
        <h1>Las Vegas Solo Travel Itinerary: 3 Days</h1>
        <p>Las Vegas is one of the easiest cities to visit solo — the Strip is self-contained, single tickets are easy to get, and the city operates 24 hours without requiring a social group. This itinerary is built around that freedom.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/bookings?tab=activities" className={styles.primaryCta}>Book solo activities</Link>
          <Link href="/destination/lasvegas/safety-guide" className={styles.secondaryCta}>Safety guide</Link>
        </div>
      </section>
      {days.map(({ day, title, items }) => (
        <section key={day} className={styles.section} aria-labelledby={`day-lv-solo-${day}`}>
          <h2 id={`day-lv-solo-${day}`} className={styles.sectionTitle}>{day}: {title}</h2>
          <div className={styles.grid}>
            {items.map((item, i) => (
              <article key={i} className={styles.card}>
                <p className={styles.cardBody}>{item}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
      <BookingCTA
        variant="full"
        headline="Book your solo Las Vegas trip"
        text="Flights to LAS, Strip hotels, and solo activity tickets — all in one place."
        href="/destination/lasvegas/bookings"
        label="Plan & book your trip"
      />
      <Footer />
    </main>
  );
}
