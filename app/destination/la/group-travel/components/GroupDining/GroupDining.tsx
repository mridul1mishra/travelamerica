import Image from 'next/image';
import styles from '../../lagrouptravel.module.css';

export default function GroupDining() {
  return (
    <>
      <section id="dining" className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/food/la-group-food.png"
            alt="Table with tacos, Korean BBQ, and shared plates overlooking the Los Angeles skyline, capturing a group dining experience"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Where to Eat as a Group in LA</h2>
          <p className={styles.subheading}>Feeding a group in Los Angeles is easier than it looks if you pick the right kind of place. Korean BBQ, taquerias, family-style Italian, and food halls are all built around shared plates and big tables — but most LA restaurants can&apos;t seat 8+ without a reservation, so call at least a week ahead.</p>
          <h3 className={styles.heading}>Korean BBQ in Koreatown</h3>
          <p className={styles.subheading}>🍖 Koreatown is the move for a crowd — communal grilling is built into the format. Park&apos;s BBQ is the famous one and takes large tables if you book; for something simpler, Quarters or Kang Ho-dong Baekjeong do all-you-can-eat sets that make ordering for a big table painless.</p>
          <p className={styles.subheading}>🥬 The banchan are the point. Let the table share the sides and the grilled meats family-style rather than everyone ordering their own — it&apos;s cheaper and more fun for a group.</p>
          <p className={styles.subheading}>🍧 For dessert, end the night with patbingsu (shaved ice) at a K-town cafe — order a couple of big bowls for the table; they&apos;re built to split.</p>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Tacos, Mocktails and Breweries</h2>
          <p className={styles.subheading}>🌮 For a group, tacos are the cheapest way to feed everyone fast. Tacos 1986 in DTLA is the reliable standby; if you&apos;ve got time to sit, Guisados does braised-meat tacos with long tables. Order a spread for the middle and let people graze.</p>
          <p className={styles.subheading}>🍹 If part of your group isn&apos;t drinking, LA&apos;s no-alcohol options have gotten good. Try the zero-proof menu at Death &amp; Co downtown, agua frescas at any taqueria, or a kombucha flight at an Arts District cafe.</p>
          <p className={styles.subheading}>🍺 The breweries cluster in the Arts District, so you can walk between a few. Angel City Brewery is the original anchor, Arts District Brewing has games and long shared tables, and Mumford does small-batch pours. Most have communal seating, which is ideal for a group.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/food/la-group-mocktail.png"
            alt="Group enjoying mocktails and drinks at a Los Angeles rooftop bar"
            width={640}
            height={960}
            className={styles.mapImage}
          />
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-food-truck-collage-group-dining.png"
            alt="Collage of Los Angeles food trucks and street food including tacos, Korean-Mexican fusion, and loaded fries from iconic LA spots"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Food Trucks for the Group</h2>
          <p className={styles.subheading}>🌮 <strong>The classics.</strong> LA&apos;s taco trucks are a group&apos;s best friend — cheap, fast, and everywhere. Leo&apos;s Tacos (al pastor off the spit) and Mariscos Jalisco (the dorado shrimp tacos) are worth a detour. Order a big mixed round and let people build their own.</p>
          <p className={styles.subheading}>🌯 <strong>The fusion crowd.</strong> Kogi BBQ kicked off LA&apos;s Korean-Mexican truck scene and still has a following — track it on the app, since it moves. Send one person ahead to order while everyone else finds a spot to sit.</p>
          <p className={styles.subheading}>🗺️ <strong>Room to sit.</strong> Smorgasburg LA on Sundays gathers dozens of vendors in one lot in the Arts District with shared tables — rare in a city built for grab-and-go, and ideal for a group that can&apos;t agree on one cuisine.</p>
        </div>
      </section>
    </>
  );
}
