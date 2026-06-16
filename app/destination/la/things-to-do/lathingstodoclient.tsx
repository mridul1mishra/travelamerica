'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './lathingstodo.module.css';
import Header from "@/app/components/destination/header/header";
import Footer from "../../../../app/components/Header/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";

// LA-only: detailed practical categories preserved from the original LA page.
const categories = [
  { title: "Hollywood & Entertainment", blurb: "Walk the Hollywood Walk of Fame (free), tour Paramount Studios ($75+), visit the TCL Chinese Theatre. Universal Studios Hollywood ($109+) is a full-day theme park. Griffith Observatory is free, with the best panoramic view of the city and the Hollywood Sign — allow a half-day for the hill.", href: "/destination/la/bookings?tab=activities&from=things-to-do" },
  { title: "Beaches", blurb: "Santa Monica Pier is the classic — free entry, paid rides and aquarium. Venice Beach Boardwalk has street performers and the famous Muscle Beach (free, any time). Malibu beaches require a car but offer seclusion. Best swimming: Manhattan Beach.", href: "/destination/la/bookings?tab=activities&from=things-to-do" },
  { title: "Museums & Culture", blurb: "The Getty Center (free admission, pay for parking) is world-class — allow 3 hours. LACMA has rotating major exhibitions ($25). The Broad in DTLA ($18, book ahead). The Natural History Museum and La Brea Tar Pits sit in the same Exposition Park cluster.", href: "/destination/la/bookings?tab=activities&from=things-to-do" },
  { title: "Food & Markets", blurb: "Grand Central Market in Downtown is the best food hall in the city — open daily, $10–$20 per person. Smorgasburg LA runs Sunday mornings in DTLA. Farmers markets at Hollywood (Sunday) and Santa Monica (Wednesday & Saturday) are excellent for grazing.", href: "/destination/la/food" },
  { title: "Hikes & Outdoors", blurb: "Runyon Canyon (free, 30-min loop with city views). Hike the Hollywood Sign trail from Griffith Park for the iconic photo. Topanga State Park for serious hiking without crowds. Cycle the Marvin Braude coastal trail from Santa Monica toward Malibu — flat and spectacular.", href: "/destination/la/bookings?tab=activities&from=things-to-do" },
  { title: "Day Trips", blurb: "Santa Barbara is 1.5 hrs north — wine country, Spanish architecture, harbor. Joshua Tree National Park is 2.5 hrs — otherworldly rock formations and stargazing. Disneyland is 45 min from DTLA. Malibu canyon drives are scenic and free.", href: "/destination/la/bookings?tab=activities&from=things-to-do" },
];

export default function LAThingsToDoClient() {
  return (
    <>
    <Header links={[
      { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
      { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
      { href: "/destination/la/safety-guide", label: "LA Safety" },
      { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
    ]} />
    <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=activities&from=things-to-do" label="See tickets & tours" />
    <main className={styles.container}>
      {/* Hero / Visual Header */}

      <section className={styles.banner}>
        <Image
        src="/data/majorcities/losangeles/assets/losangeles.webp"
        alt="Experiences and activities in Los Angeles"
        fill
        priority
        className={styles.bannerImage}
        />
        </section>
      <section className={styles.hero}>
        <h1>Things to Do in Los Angeles</h1>
        <p>
          Los Angeles spreads across the coast, the hills, and the basin, so the
          experience changes a lot depending on what you want to focus on.
          Understanding this helps you choose where to stay and how to plan your
          days around the city&apos;s traffic.
        </p>
        {/* LA-only: quick-action buttons */}
        <div className={styles.heroCtas}>
          <Link href="/destination/la/bookings?tab=activities&from=things-to-do" className={styles.primaryCta}>
            Book tickets &amp; tours
          </Link>
          <Link href="/destination/la/itinerary" className={styles.secondaryCta}>
            See 3-day itinerary
          </Link>
        </div>
      </section>

      {/* Experience Buckets */}
      <section className={styles.grid}>
        <Link href="/destination/la/neighborhood-guide?interest=sightseeing" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Landmarks & Big Sights</h3>
          <p>
            Good for a first visit, when you want the Hollywood Sign, the Walk of
            Fame, and Griffith Observatory without spending the whole day driving
            between them.
          </p>
        </Link>

        <Link href="/destination/la/neighborhood-guide?interest=culture" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Culture & Museums</h3>
          <p>
            Best for travelers who enjoy slower exploration — the Getty, LACMA,
            The Broad, and neighborhoods with strong cultural character.
          </p>
        </Link>

        <Link href="/destination/la/food" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Food & Local Experiences</h3>
          <p>
            Designed for travelers who want food halls, taco trucks, and everyday
            LA neighborhood life to be the focus of their trip.
          </p>
        </Link>

        <Link href="/destination/la/neighborhood-guide?interest=outdoors" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Beaches & Outdoors</h3>
          <p>
            Works well for visitors who want beach days in Santa Monica and
            Venice, hilltop hikes like Runyon Canyon, and coastal cycling.
          </p>
        </Link>
      </section>

      {/* LA-only: detailed practical category grid */}
      <section aria-labelledby="categories-la">
        <h2 id="categories-la">What to Do in Los Angeles</h2>
        <p className={styles.sectionIntro}>
          Six categories that cover the full range of what LA offers, with real
          prices and time estimates — prioritize by what matters most to you.
        </p>
        <div className={styles.grid}>
          {categories.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
              <h3>{title}</h3>
              <p>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Decision Bridge */}
      <section className={styles.bridge}>
        <p>
          What you want to do in Los Angeles directly affects where you should
          stay. Choosing the right area can cut down on driving, reduce time
          stuck in traffic, and make the trip feel a lot smoother.
        </p>
      </section>

      {/* Assisted CTA */}
      <section className={styles.cta}>
        <h2>Not sure how to shape your LA experience?</h2>
        <p>
          Tell us what you want to focus on, and we&apos;ll help you plan where to
          stay and how to structure your visit.
        </p>

        <Link href="/destination/la#planning-intent" className={styles.primaryCta}>
          Get help planning my LA trip
        </Link>
      </section>

      {/* Navigation Resource */}
      <section className={styles.bridge} style={{ marginTop: '2rem' }}>
        <h3>Navigate LA with Confidence</h3>
        <p>
          Getting around is essential to doing what you want to do in LA. Check out our{" "}
          <Link href="/destination/la/la-metro-map">
            interactive Metro map
          </Link>
          {" "}to plan your routes and understand the system.
        </p>
      </section>
    </main>
    <BookingCTA variant="full" text="Book skip-the-line tickets and guided tours" href="/destination/la/bookings?tab=activities&from=things-to-do" label="See tickets & tours" />
    <Footer />
    </>
  );
}
