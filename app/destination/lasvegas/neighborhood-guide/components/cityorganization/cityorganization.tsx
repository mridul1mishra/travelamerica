import styles from './cityorganization.module.css';

export default function CityOrganization() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <h2 className={styles.heading}>How Las Vegas Is Organized</h2>
      <p className={styles.copy}>
        Las Vegas is simpler to navigate than most cities. Nearly everything visitors want is in two
        places: the Strip (Las Vegas Boulevard South, about 4 miles) and Downtown/Fremont Street
        (about 3 miles north). The Strip divides into South (MGM, Mandalay Bay, Luxor), Mid (Bellagio,
        Caesars, The Cosmopolitan, Aria), and North (Encore, Wynn, Resorts World). Mid-Strip is the
        center of gravity — the Bellagio fountains are the de facto anchor point.
      </p>
      <p className={styles.copy}>
        Beyond the resort core: Spring Mountain Road (Chinatown) has the city's best off-Strip dining
        and runs parallel to the Strip about a mile west. Summerlin and Henderson are residential suburbs
        with good hotel value but require a rideshare to reach Strip attractions.
      </p>
      <p className={styles.copy}>
        For solo travelers: the Strip is walkable but deceptively long. What looks like a 10-minute
        walk on the map is often 25–30 minutes on the ground once you account for casino pass-throughs
        and crosswalk waits. The free tram between Mandalay Bay and Park MGM is worth knowing about.
      </p>
      </div>
    </section>
  );
}
