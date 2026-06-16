import Link from 'next/link';
import styles from '../../lathingstodo.module.css';

export default function NavigationResource() {
  return (
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
  );
}
