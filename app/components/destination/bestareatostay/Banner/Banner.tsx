import styles from './Banner.module.css';
import { BannerContent } from '@/app/models/destination/bestareatostay/guidetypes';

interface Props {
  content: BannerContent;
}

export default function Banner({ content }: Props) {
  return (
    <section className={styles.hero}>

  
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

  
  <div className={styles.envelopebottom}></div>
</section>
  );
}
