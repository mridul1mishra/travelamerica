import Link from 'next/link';
import styles from '../../lathingstodo.module.css';

const categories = [
  {
    title: "Hollywood & Entertainment",
    blurb: "Walk the Hollywood Walk of Fame (free), tour Paramount Studios ($75+), visit the TCL Chinese Theatre. Universal Studios Hollywood ($109+) is a full-day theme park. Griffith Observatory is free, with the best panoramic view of the city and the Hollywood Sign — allow a half-day for the hill.",
    href: "/destination/la/bookings?tab=activities&from=things-to-do",
  },
  {
    title: "Beaches",
    blurb: "Santa Monica Pier is the classic — free entry, paid rides and aquarium. Venice Beach Boardwalk has street performers and the famous Muscle Beach (free, any time). Malibu beaches require a car but offer seclusion. Best swimming: Manhattan Beach.",
    href: "/destination/la/bookings?tab=activities&from=things-to-do",
  },
  {
    title: "Museums & Culture",
    blurb: "The Getty Center (free admission, pay for parking) is world-class — allow 3 hours. LACMA has rotating major exhibitions ($25). The Broad in DTLA ($18, book ahead). The Natural History Museum and La Brea Tar Pits sit in the same Exposition Park cluster.",
    href: "/destination/la/bookings?tab=activities&from=things-to-do",
  },
  {
    title: "Food & Markets",
    blurb: "Grand Central Market in Downtown is the best food hall in the city — open daily, $10–$20 per person. Smorgasburg LA runs Sunday mornings in DTLA. Farmers markets at Hollywood (Sunday) and Santa Monica (Wednesday & Saturday) are excellent for grazing.",
    href: "/destination/la/food",
  },
  {
    title: "Hikes & Outdoors",
    blurb: "Runyon Canyon (free, 30-min loop with city views). Hike the Hollywood Sign trail from Griffith Park for the iconic photo. Topanga State Park for serious hiking without crowds. Cycle the Marvin Braude coastal trail from Santa Monica toward Malibu — flat and spectacular.",
    href: "/destination/la/bookings?tab=activities&from=things-to-do",
  },
  {
    title: "Day Trips",
    blurb: "Santa Barbara is 1.5 hrs north — wine country, Spanish architecture, harbor. Joshua Tree National Park is 2.5 hrs — otherworldly rock formations and stargazing. Disneyland is 45 min from DTLA. Malibu canyon drives are scenic and free.",
    href: "/destination/la/bookings?tab=activities&from=things-to-do",
  },
];

export default function CategoriesGrid() {
  return (
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
  );
}
