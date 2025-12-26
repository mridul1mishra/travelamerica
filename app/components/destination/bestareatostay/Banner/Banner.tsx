import styles from './Banner.module.css';
import { BannerContent } from '@/app/models/destination/bestareatostay/guidetypes';

interface Props {
  content: BannerContent;
}

export default function Banner({ content }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>  
  <nav className={styles.breadcrumb} aria-label="Breadcrumb">
    <a href="#">Home</a>
    <span>›</span>
    <a href="#">Solo Trip to NYC</a>
    <span>›</span>
    <span className={styles.current}>Best Areas to Stay</span>
  </nav>

 
  <div className={styles.herocontent}>
    <h1>Best Areas to Stay in NYC</h1>
    <p>
      A local breakdown of the safest, most convenient
      neighborhoods for solo travelers.
    </p>
  </div>
  <div className={styles.infobox}>
        <h2><span className={styles.infoicon}>ℹ</span>In this guide, you’ll learn:</h2>
        <ul>
          <li>The safest neighborhoods for solo travelers</li>
          <li>Where to stay for nightlife, food, or budget</li>
          <li>Areas to avoid (and why)</li>
          <li>How to choose based on subway access</li>
          <li>Local tips most tourists miss</li>
        </ul>
  </div>

  
  <div className={styles.envelopebottom}></div>
  </div>
</section>
  );
}
