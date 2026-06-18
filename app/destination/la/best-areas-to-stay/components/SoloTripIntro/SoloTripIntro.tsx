import Link from "next/link";
import styles from "./SoloTripIntro.module.css";

export interface SoloTripCard {
  icon: string;
  title: string;
  description: string;
  cta: string;
  href?: string;
}

export interface SoloTripIntroProps {
  cityName: string;
  description: string;
  bullets: string[];
  cards?: SoloTripCard[];
}

const DEFAULT_CARDS: SoloTripCard[] = [
  { icon: "🛡️", title: "For Safety", description: "Find areas with high visibility, foot traffic, and safe streets.", cta: "Safety guide" },
  { icon: "🌃", title: "For Nightlife", description: "Explore solo-friendly venues with great vibes and easy access.", cta: "Nightlife guide" },
  { icon: "🍜", title: "For Foodies", description: "Discover local favorites and budget-friendly bites.", cta: "Food guide" },
  { icon: "💸", title: "On a Budget", description: "Smart picks and free gems — great trips without overspending.", cta: "Budget guide" },
];

function CategoryCard({ icon, title, description, cta, href }: SoloTripCard) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      {href
        ? <Link href={href} className={styles.cta}>{cta}</Link>
        : <button className={styles.cta}>{cta}</button>
      }
    </div>
  );
}

export default function SoloTripIntro({ cityName, description, bullets, cards = DEFAULT_CARDS }: SoloTripIntroProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>About the Solo Trip to {cityName} Guides</h2>
          <p className={styles.description}>{description}</p>
          <ul className={styles.bullets}>{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>
        <div className={styles.grid}>
          {cards.map((card) => <CategoryCard key={card.title} {...card} />)}
        </div>
      </div>
    </section>
  );
}
