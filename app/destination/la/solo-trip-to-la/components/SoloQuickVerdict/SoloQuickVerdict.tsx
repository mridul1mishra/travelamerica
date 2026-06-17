import Link from "next/link";
import styles from "./SoloQuickVerdict.module.css";

const verdictItems = [
  {
    label: "Best base",
    value: "Santa Monica or West Hollywood",
    detail: "Pick Santa Monica for beach and ease; pick WeHo for nightlife and central positioning.",
  },
  {
    label: "Transport reality",
    value: "Use rideshare plus selective Metro",
    detail: "A rental car helps for the Getty, Malibu, and spread-out days, but do not drive tired on arrival.",
  },
  {
    label: "First day",
    value: "Stay close to your hotel",
    detail: "Walk your base neighborhood, eat nearby, and save the cross-city plans for day two.",
  },
  {
    label: "Big mistake",
    value: "Changing areas every day",
    detail: "LA rewards clustering. Two planned things per day on the same side of town is the sane limit.",
  },
];

const routeLinks = [
  { href: "/destination/la/best-areas-to-stay", label: "Choose your LA base" },
  { href: "/destination/la/solo-itinerary", label: "Use the 3-day solo itinerary" },
  { href: "/destination/la/food", label: "Find solo-friendly food" },
  { href: "/destination/la/safety-guide", label: "Check safety basics" },
];

export function SoloQuickVerdict() {
  return (
    <section id="quick-verdict" className={styles.section} aria-labelledby="quick-verdict-heading">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Quick verdict</p>
        <h2 id="quick-verdict-heading">LA works solo when you plan around neighborhoods, not attractions.</h2>
        <p>
          The city is rewarding alone, but it is unforgiving if you underestimate distance.
          Choose one good base, cluster your days, and use deeper LA guides only when you need the detail.
        </p>
      </div>

      <div className={styles.grid}>
        {verdictItems.map((item) => (
          <article key={item.label} className={styles.card}>
            <span>{item.label}</span>
            <h3>{item.value}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>

      <nav className={styles.routeLinks} aria-label="Solo LA planning links">
        {routeLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
