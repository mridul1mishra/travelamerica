"use client";
import Link from "next/link";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "@/app/destination/city-hub.module.css";

const topics = [
  { title: "Is Orlando Good for Solo Travel?", blurb: "Yes — with an important caveat. If your goal is theme parks, Orlando is actually better solo in some ways: single-rider queues at Universal and Disney reduce wait times significantly, you control the schedule completely, and there is no group logistics overhead. If your goal is non-park tourism, Orlando's suburban layout and car-dependence require more planning than cities like NYC or LA." },
  { title: "Best Time to Visit Solo", blurb: "January–February and September–October are the sweet spots — lower park crowds, lower hotel rates, and comfortable temperatures (65–80°F). Avoid US school holidays (spring break in March–April, June–August, Christmas/New Year) when parks hit peak capacity and prices surge 40–80%. A solo Tuesday in January will have shorter queues than a solo Saturday in July." },
  { title: "Where to Stay Solo", blurb: "I-Drive is the best solo base — central to Universal and SeaWorld, with restaurants and nightlife walkable within the corridor. For Universal-focused trips, an on-site hotel gives early park entry and walking access (worth the premium for solo visitors). Budget option: Kissimmee vacation rentals are cheap but isolated. Avoid Downtown Orlando unless you are not going to parks." },
  { title: "Getting Around", blurb: "A rental car gives the most freedom ($35–$60/day). Lyft and Uber are reliable. The I-Ride Trolley ($2/ride, runs along I-Drive) covers the tourist corridor cheaply. Free Disney transportation (buses, monorail, boat) connects all Disney properties if you stay on-site. There is no useful public transit between major parks — budget for transport." },
  { title: "Solo Theme Park Strategy", blurb: "Single-rider queues exist at Universal (most major rides), Disney (select rides), and SeaWorld — always use them. Buy Lightning Lane or Genie+ in advance for Disney if you want to maximize a single day. Arrive at park opening ('rope drop') — the first 90 minutes have the shortest queues of the day. Solo visitors can realistically do twice as many rides as groups in the same time." },
  { title: "Beyond the Parks: What Solo Travelers Miss", blurb: "Kennedy Space Center (1 hour east) is outstanding and deeply underrated. Wekiva Springs State Park offers clear-water springs swimming in a beautiful natural setting. The local food scene on Sand Lake's Restaurant Row is genuinely excellent. Winter Park (30 min north) is a beautiful walkable historic town with the Cornell Fine Arts Museum and Hannibal Square for coffee and shopping." },
];

export default function SoloTripToOrlandoClient() {
  return (
    <main>
      <Header image="/data/majorcities/orlando/assets/orlando.jpeg" bannerText="Solo Trip to Orlando" />
      <div className={styles.slimCta}>
        <span className={styles.slimCtaText}>Book your solo Orlando trip — flights, hotels and park tickets →</span>
        <Link href="/destination/orlando/bookings" className={styles.slimCtaBtn}>Book your trip</Link>
      </div>
      <section className={styles.hero}>
        <h1>Solo Trip to Orlando: Complete Guide</h1>
        <p>Orlando solo travel rewards the prepared visitor. Theme parks are objectively better with single-rider queues and no group compromise. Beyond the parks, the city has more to offer solo travelers than most people expect.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/solo-itinerary" className={styles.primaryCta}>See solo itinerary</Link>
          <Link href="/destination/orlando/safety-guide" className={styles.secondaryCta}>Safety guide</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="solo-or">
        <h2 id="solo-or" className={styles.sectionTitle}>Solo Travel in Orlando</h2>
        <p className={styles.sectionIntro}>Six things every first-time solo traveler to Orlando needs to know.</p>
        <div className={styles.grid}>
          {topics.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.bookingStrip}>
        <h2>Book your solo Orlando trip</h2>
        <p>Flights to MCO, solo-friendly hotels, and park tickets — compare and book.</p>
        <Link href="/destination/orlando/bookings" className={styles.bookingBtn}>Plan & book your Orlando trip</Link>
      </div>
      <Footer />
    </main>
  );
}
