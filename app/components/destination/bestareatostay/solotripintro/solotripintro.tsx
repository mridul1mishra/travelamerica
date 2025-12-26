import styles from './solotripintro.module.css';

export default function SoloTripIntro() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
            <h2 className={styles.title}>About the Solo Trip to NYC Guides</h2>

            <p className={styles.description}>
            Exploring New York solo can feel thrilling — or overwhelming. These guides help you decode
            the city’s rhythm, avoid common pitfalls, and navigate confidently. Whether you're seeking
            safety, fun, food, or budget tips, we’ve got you covered.
            </p>

            <ul className={styles.bullets}>
            <li>Safest and most connected neighborhoods</li>
            <li>How to start your trip with confidence</li>
            <li>Packing smart for weather and walking</li>
            </ul>
        </div>

        <div className={styles.grid}>
          <CategoryCard icon="🛡️" title="For Safety"
            description="Find subway lines and areas with high visibility and foot traffic."
            cta="Safety Around, Alone"
          />
          <CategoryCard
            icon="🌃"
            title="For Nightlife"
            description="Explore solo-friendly venues with great vibes and easy access."
            cta="Ways of Fun Alone"
          />
          <CategoryCard
            icon="🍜"
            title="For Foodies"
            description="Discover local favorites and budget-friendly bites across boroughs."
            cta="Useful Cuisine Locals Favor"
          />
          <CategoryCard
            icon="💸"
            title="On a Budget"
            description="Experience NYC without overspending — smart picks and free gems."
            cta="Guide Affordable Locales"
          />
        </div>
      </div>
    </section>
  );
}

interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
  cta: string;
}

function CategoryCard({ icon, title, description, cta }: CategoryCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <button className={styles.cta}>{cta}</button>
    </div>
  );
}
