import Image from "next/image";
import styles from "@/app/components/destination/neighborhoodrankingcard/neighborhoodrankingcard.module.css";

export interface Neighborhood {
  id: string;
  rank: string;
  name: string;
  why: string;
  image: string;
  color: string;
  safety: string;
  vibe: string;
  transit: string;
  bestFor: string[];
  pros: string[];
  cons: string[];
}

interface Props {
  cityName: string;
  neighborhoods: Neighborhood[];
}

export default function NeighborhoodRankingCards({ cityName, neighborhoods }: Props) {
  return (
    <div className={styles.container}>
      <section id="neighborhood" className={styles.wrapper}>
        <h2>Best Neighborhoods to Stay in {cityName} (Ranked by Safety and Convenience)</h2>
        <p className={styles.intro}>
          These neighborhoods offer the best mix of safety, walkability, transit access, and comfort for solo travelers. Each one serves a different travel style — choose the vibe that fits you.
        </p>
        <div className={styles.grid}>
          {neighborhoods.map((n) => (
            <div key={n.id} id={n.id} className={styles.card}>
              <div className={styles.imageWrapper} style={{ backgroundColor: n.color }}>
                <Image src={n.image} alt={n.name} className={styles.image} width={1200} height={800} style={{ objectFit: "cover" }} />
                <span className={styles.badge}>{n.rank}</span>
              </div>
              <div className={styles.content}>
                <h3>{n.name}</h3>
                <p className={styles.why}>{n.why}</p>
                <div className={styles.meta}>
                  <span>🛡 {n.safety}</span>
                  <span>🌆 {n.vibe}</span>
                  <span>🚇 {n.transit}</span>
                </div>
                <div className={styles.tags}>
                  {n.bestFor.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.columns}>
                  <div>
                    <h4>Pros</h4>
                    <ul>{n.pros.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                  <div>
                    <h4>Cons</h4>
                    <ul>{n.cons.map((c) => <li key={c}>{c}</li>)}</ul>
                  </div>
                </div>
                <a href="#map" className={styles.cta}>Jump to Map →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
