import Link from "next/link";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import cityWhyTrustData from "@/content/destination/orlando/orlando-female-solo-travel-guide/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import cityFaqData from "@/content/destination/orlando/orlando-female-solo-travel-guide/faq/faqsection.json";
import styles from "@/app/destination/city-hub.module.css";

const topics = [
  { title: "Overall Safety for Solo Women", blurb: "Orlando is safe for solo female travelers in the main tourist areas — I-Drive, Lake Buena Vista, Disney Springs, Universal CityWalk, and Winter Park are all comfortable day and night. The main risks are generic tourist risks (car break-ins, scams) rather than gender-specific. The theme park environments are extremely well-monitored with visible security throughout." },
  { title: "Best Areas to Stay Solo", blurb: "I-Drive mid-section (near ICON Park) is the best solo female base — well-lit, walkable within the corridor, visible security, and hotel staff available 24 hours. Lake Buena Vista for Disney trips — the corridor is well-monitored and safe at all hours. Avoid isolated budget motels on US-192 in Kissimmee for solo female travelers — the areas between properties are not pedestrian-friendly at night." },
  { title: "Solo Theme Park Tips", blurb: "Theme parks are exceptionally safe for solo women — high security, surveillance, and staff everywhere. Single-rider queues at Universal get you seated with a random group for each ride — a naturally social experience. Disney's park atmosphere is family-oriented and very safe. Keep your bag in front of you in crowded areas. Lockers are available at every major park for $10–$15/day." },
  { title: "Nightlife Safety", blurb: "I-Drive has bars and dinner entertainment (dinner shows, ICON Park) that are tourist-friendly and safe. Universal CityWalk is well-monitored until midnight. Downtown Orlando's Orange Avenue bar district is livelier and more local — go with confidence but standard awareness. Always arrange your rideshare from inside a venue, not from the street. Keep your phone charged." },
  { title: "Transport Safety", blurb: "Rental cars are the safest and most convenient option for solo women in Orlando — you control your environment. Uber and Lyft are widely used and safe. Always confirm driver details before getting in. The I-Ride Trolley on I-Drive is safe during operating hours (until 10:30pm). Avoid walking between properties at night on I-Drive — the road itself is pedestrian-hostile; use rideshare for hops between hotels and venues." },
  { title: "Practical Tips for Solo Orlando", blurb: "Download park apps before arriving — they show real-time queue times and let you book Lightning Lane without approaching a booth. Hotel concierges in the Lake Buena Vista and I-Drive areas are well-experienced with solo travelers and happy to help with transport and recommendations. Florida sunshine is intense — sunscreen, sunglasses, and a hat are non-negotiable from April through October." },
];

export default function OrlandoFemaleSoloClient() {
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
        text="Book your solo Orlando trip — hotels, park tickets and activities →"
        href="/destination/orlando/bookings"
        label="Book your trip"
      />
      <section className={styles.hero}>
        <h1>Orlando Female Solo Travel Guide</h1>
        <p>Orlando is a straightforward and safe destination for solo women — the theme park environments are among the most monitored public spaces in America, and the main tourist corridors are comfortable day and night. Here is what actually matters.</p>
        <div className={styles.heroCtas}>
          <Link href="/destination/orlando/solo-itinerary" className={styles.primaryCta}>Solo itinerary</Link>
          <Link href="/destination/orlando/best-areas-to-stay" className={styles.secondaryCta}>Best areas to stay</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="female-solo-or">
        <h2 id="female-solo-or" className={styles.sectionTitle}>What Solo Women Need to Know About Orlando</h2>
        <p className={styles.sectionIntro}>Six topics covering the practical realities of solo female travel in Orlando.</p>
        <div className={styles.grid}>
          {topics.map(({ title, blurb }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <WhyTrustThisGuide data={cityWhyTrustData} />
      <FAQAccordion faqs={cityFaqData} />
      <BookingCTA
        variant="full"
        headline="Plan your solo Orlando trip"
        text="Book solo-friendly hotels, park tickets, and flights to Orlando."
        href="/destination/orlando/bookings"
        label="Plan & book your trip"
      />
      <Footer />
    </main>
  );
}
