import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";

const days = [
  { day: "Day 1", title: "Universal Studios — Solo Park Day", items: [
    "Morning: Arrive at Universal Studios Florida at opening (9am). Solo advantage: single-rider queues cut wait times by 60–70% on most major rides. Hagrid's Motorbike Adventure and Velocicoaster both have single-rider lines — this is one of the biggest benefits of visiting Universal solo.",
    "Midday: The Wizarding World of Harry Potter (Hogsmeade in Islands of Adventure, Diagon Alley in USF) spans both parks — get a Park-to-Park ticket. Butterbeer at the Three Broomsticks for lunch — around $15. Single-rider on Escape from Gringotts.",
    "Afternoon: Universal CityWalk after 4pm becomes lively. Solo dinner at Vivo Italian Kitchen or Toothsome Chocolate Emporium — both have bar seating. The Velocicoaster at sunset has the best views of the park.",
    "Solo tip: Download the Universal app before arriving. Virtual line and single-rider availability are both managed through the app. A solo visitor can realistically ride 12–15 attractions in a single day versus 6–8 for a group.",
  ]},
  { day: "Day 2", title: "Kennedy Space Center Day Trip", items: [
    "Morning: Leave by 7:30am for Kennedy Space Center (1 hour east on SR-528). Arrive at opening. Buy tickets online in advance ($57, cheaper than gate price). The Journey to Mars exhibit, Space Shuttle Atlantis building, and Apollo/Saturn V Center are the three must-sees.",
    "Midday: Lunch at the Orbit Cafeteria inside KSC — functional, reasonably priced. The Astronaut Encounter (extra $30) puts you in a Q&A with a real NASA astronaut — excellent solo experience.",
    "Afternoon: The Space Shuttle Atlantis building alone is worth the full ticket price — the 184-foot shuttle is suspended at launch angle and the surrounding exhibits are outstanding. Allow 3 hours just for this building.",
    "Evening: Drive back via Cocoa Beach (30 min detour) for a sunset walk on the beach and dinner at Coconuts on the Beach — casual oceanfront seafood, solo-friendly bar seating.",
  ]},
  { day: "Day 3", title: "Disney Springs, Lake Eola & Local Orlando", items: [
    "Morning: Disney Springs (free admission). The Marketplace is genuinely worth 2 hours — World of Disney, LEGO Store, Splitsville bowling. Breakfast at the Homecomin' Kitchen for Southern American food.",
    "Midday: Drive 20 min to Downtown Orlando. Lake Eola Park lakefront walk (free, beautiful). Sunday farmers market runs 10am–4pm around the lake with 100+ vendors if your timing aligns.",
    "Afternoon: Orange Avenue for coffee and independent shops. The Dr. Phillips Center for the Performing Arts often has free lobby exhibitions. The Orlando Museum of Art ($15) is small but worthwhile.",
    "Evening: Dinner on Sand Lake's Restaurant Row — Dragonfly for upscale Japanese robata, or The Ravenous Pig (gastropub) for local craft beer and a proper meal. Both have solo bar seating. End the trip properly.",
  ]},
];

export default function OrlandoSoloItineraryClient() {
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
        text="Book solo park tickets, tours and activities →"
        href="/destination/orlando/bookings?tab=activities"
        label="Book activities"
      />
      <section className={styles.hero}>
        <h1>Orlando Solo Travel Itinerary: 3 Days</h1>
        <p>Orlando is genuinely better solo in some ways — single-rider queues at Universal cut wait times dramatically, and you set the pace at every park. This itinerary makes the most of those advantages.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/bookings?tab=activities" className={styles.primaryCta}>Book solo activities</Link>
          <Link href="/destination/orlando/safety-guide" className={styles.secondaryCta}>Safety guide</Link>
        </div>
      </section>
      {days.map(({ day, title, items }) => (
        <section key={day} className={styles.section} aria-labelledby={`day-or-solo-${day}`}>
          <h2 id={`day-or-solo-${day}`} className={styles.sectionTitle}>{day}: {title}</h2>
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
        headline="Book your solo Orlando trip"
        text="Flights to MCO, solo-friendly hotels, and park tickets — all in one place."
        href="/destination/orlando/bookings"
        label="Plan & book your trip"
      />
      <Footer />
    </main>
  );
}
