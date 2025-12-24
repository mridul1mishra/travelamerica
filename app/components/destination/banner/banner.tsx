import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>Best Areas to Stay in NYC for Solo Travelers</h1>
        <p>
          Safe, walkable, well‑connected neighborhoods — ranked by vibe, budget,
          and transit access to help you choose the perfect base for your NYC trip.
        </p>

        <div className={styles.bannerCTA}>
          <a href="#summary">Quick Summary</a>
          <a href="#neighborhoods">Neighborhood Rankings</a>
        </div>
      </div>

      <div className={styles.bannerImage}>
        <Image
          src="/destination/nyc-neighborhoods.png"
          alt="NYC Neighborhoods"
          width={600}
          height={400}
          priority
        />
      </div>
    </section>
  );
}
