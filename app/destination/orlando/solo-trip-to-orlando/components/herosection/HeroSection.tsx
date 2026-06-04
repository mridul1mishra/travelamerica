import Link from "next/link";
import styles from "@/app/destination/city-hub.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1>Solo Trip to Orlando: Complete Guide</h1>
      <p>Orlando solo travel rewards the prepared visitor. Theme parks are objectively better with single-rider queues and no group compromise. Beyond the parks, the city has more to offer solo travelers than most people expect.</p>
      <div className={styles.heroCtas}>
        <Link href="/destination/orlando/solo-itinerary" className={styles.primaryCta}>See solo itinerary</Link>
        <Link href="/destination/orlando/safety-guide" className={styles.secondaryCta}>Safety guide</Link>
      </div>
    </section>
  );
}
