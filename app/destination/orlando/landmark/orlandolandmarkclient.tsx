"use client";
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const landmarks = [
  { title: "Walt Disney World", blurb: "Four parks (Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom) plus two water parks on 25,000 acres. A single-park ticket runs $109–$189 depending on date — buy well in advance for cheapest rates. Magic Kingdom is the must-do first-visit park. EPCOT's World Showcase pavilions and the new Guardians of the Galaxy coaster make it the best adult park. Budget $200–$350/person per day including food.", cost: "$109–$189/day (park ticket)" },
  { title: "Universal Orlando Resort", blurb: "Two parks — Universal Studios Florida and Islands of Adventure — plus Volcano Bay water park. The Wizarding World of Harry Potter spans both parks (Park-to-Park ticket required, ~$160). Single-rider queues dramatically reduce wait times. Epic Universe, Universal's massive new park, opened May 2025 — a Park-to-Park-to-Park ticket now covers all three.", cost: "$119–$179/day (single park)" },
  { title: "Kennedy Space Center", blurb: "One hour east of Orlando on the Atlantic coast. Space Shuttle Atlantis building is world-class. The Saturn V Center has a fully restored Apollo-era rocket the length of a football field. Astronaut Encounter sessions ($30 extra) let you meet a real NASA astronaut. Book online for $57 rather than the $75 gate price. Allow a full day.", cost: "$57 online / $75 gate" },
  { title: "ICON Park (I-Drive)", blurb: "Entertainment complex on International Drive with the 400-foot ICON Orlando observation wheel ($37), SEA LIFE Aquarium ($30), Madame Tussauds ($30), and 20+ restaurants and bars. The wheel at sunset gives panoramic views from Daytona to the Gulf. Combo tickets save 20–30% — buy online.", cost: "$37 (wheel) / combo tickets available" },
  { title: "Wekiva Springs State Park", blurb: "A 72°F natural freshwater spring 30 minutes north of Orlando. Swimming, kayaking, and paddleboarding in crystal-clear spring water surrounded by Florida forest. $6/person entry. Canoe and kayak rentals available ($19/hr). One of Florida's most beautiful natural experiences and almost entirely unknown to international visitors.", cost: "$6 entry + $19/hr rentals" },
  { title: "Winter Park & the Morse Museum", blurb: "30 minutes north of I-Drive, Winter Park has the Charles Hosmer Morse Museum of American Art ($6 admission) — home to the world's largest collection of Louis Comfort Tiffany art. Park Avenue is one of Florida's most beautiful walkable streets. The Scenic Boat Tour ($18, 1 hr) winds through the town's interconnected lakes.", cost: "$6 museum / $18 boat tour" },
];

export default function OrlandoLandmarkClient() {
  return (
    <main>
      <Header image="/data/majorcities/orlando/assets/orlando.jpeg" bannerText="Orlando Landmarks & Attractions" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Book skip-the-line tickets and guided Orlando tours →</span>
        <Link href="/destination/orlando/bookings?tab=activities" className={styles.slimCtaBtn}>Browse tickets</Link>
      </div>
      <section className={styles.hero}>
        <h1>Orlando Landmarks & Attractions</h1>
        <p>Orlando has the world's highest concentration of major theme parks — but also some genuinely overlooked gems. This guide covers the full range with honest costs and the tips that change each experience.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/bookings?tab=activities" className={styles.primaryCta}>Book attraction tickets</Link>
          <Link href="/destination/orlando/itinerary" className={styles.secondaryCta}>See 3-day itinerary</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="landmarks-or">
        <h2 id="landmarks-or" className={styles.sectionTitle}>Orlando's Most Iconic Attractions</h2>
        <p className={styles.sectionIntro}>Six landmarks every visitor should know — with honest costs and the tips that matter.</p>
        <div className={styles.grid}>
          {landmarks.map(({ title, blurb, cost }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
              <p className={styles.cardMeta}>{cost}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Book Orlando attraction tickets</h2>
        <p>Disney, Universal, Kennedy Space Center and more — compare prices and book in advance.</p>
        <Link href="/destination/orlando/bookings?tab=activities" className={styles.bookingBtn}>Browse Orlando activities</Link>
      </div>
      <Footer />
    </main>
  );
}
