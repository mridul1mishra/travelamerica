import styles from './cityorganization.module.css';

export default function CityOrganization() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <h2 className={styles.heading}>How New York City Is Organized</h2>
      <p className={styles.copy}>
        NYC has five boroughs, but for visitors the action is in Manhattan and Brooklyn. Manhattan divides
        north–south: Downtown (below 14th St), Midtown (14th–59th St), and the Upper West and East Sides
        (above 59th St). Each zone has its own hotel pricing, crowd density, and feel.
      </p>
      <p className={styles.copy}>
        The subway is the real organizing principle. Express lines — 1/2/3 on the West Side, 4/5/6 on
        the East Side, A/C/E through Midtown West — run 24/7 and connect every neighborhood in under 30
        minutes. Where you stay matters less than which express line you're on.
      </p>
      <p className={styles.copy}>
        For solo travelers: any neighborhood with express subway access gives you full freedom to move at
        any hour. The subway is faster than a taxi during the day and the only practical option after midnight.
      </p>
      </div>
    </section>
  );
}
