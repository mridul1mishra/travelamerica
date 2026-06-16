import Image from 'next/image';
import styles from '../../lagrouptravel.module.css';

export default function GroupSafetyPacking() {
  return (
    <>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-group-travel-safety-navigation-essentials1.png"
            alt="Illustration of LA group travel safety essentials including emergency preparedness, navigation apps, and coordination tools for a car-dependent city."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Logistics and Navigation for Group Explorers</h2>
          <p className={styles.subheading}><strong>Urban vigilance:</strong> Around busy spots like Venice Boardwalk and the Hollywood Walk of Fame, group travelers should stay aware of pickpockets and keep valuables secure. Lock everything in the trunk before you park — car break-ins are the most common issue. Share emergency contacts, know local service numbers, and identify nearby medical facilities for quick support.</p>
          <p className={styles.subheading}><strong>Group preparedness:</strong> In a car-dependent city, the real risk is the group getting separated across vehicles or losing the car in a huge lot. Carry portable chargers, a shared first aid kit, sunscreen, and water, and distribute ID copies. Photograph your parking spot and section. These LA tips ensure readiness, coordination, and stress-free group travel.</p>
          <p className={styles.subheading}><strong>Smart navigation:</strong> LA traffic and sprawling distances can overwhelm groups and cause separation. Using tools like Google Maps, Waze, and a shared location pin helps plan routes around the 101 and 405, avoid rush hour, and keep everyone coordinated for smoother, stress-free travel together.</p>
        </div>
      </section>

      <section className={`${styles.splitSection} ${styles.mobileImageFirst}`}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>LA Group Travel Packing Playbook</h2>
          <p className={styles.subheading}><strong>🧼 Pack Essential</strong> Group travelers in LA spend long days in the sun and the car, so pack comfortable shoes, portable chargers, reusable water bottles, and serious sunscreen. Add anti-theft bags and weather-ready layers for cool coastal evenings to stay secure, connected, and healthy across a spread-out city.</p>
          <p className={styles.subheading}><strong>🧥 Pack Comfort</strong> Group travelers in LA gain extra comfort from a shared cooler in the van, sunglasses and hats for the beach and observatory, offline maps for canyon dead zones, foldable mats for beach and park breaks, and spray sunscreen for shared protection, with backups like light jackets or hotel cards.</p>
          <p className={styles.subheading}><strong>🎒 Pack Smart</strong> Bluetooth item trackers for bags and car keys, a parking-spot photo and section note for huge lots, NFC contact tags or QR regroup cards for quick reconnection, a shared multi-port charging cable for the car, and a notebook for addresses, reducing loss, disorientation, and coordination friction.</p>
        </div>
        <div className={styles.imageWrappermid}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-group-travel-gear-guide-essentials-comfort-smart.png"
            alt="Three-part illustration showing LA group travel packing tips: essentials like sunscreen and charger, comfort items like sunglasses and layers, and smart gear like trackers, journal, and navigation tools."
            fill
            className={styles.mapImage}
          />
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/group/la-group-travel-plan-pack-enjoy-guide.png"
            alt="Infographic showing LA group travel essentials across planning, packing, and enjoyment tiers with neutral background"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Group Travel Tips: Planning and Bonding simplified</h2>
          <p className={styles.subheading}><strong>🎭</strong> Group travel planning in LA requires flexible accommodation, a shared van or coordinated drivers, anchor reservations like studio tours, and a parking plan. Booking a house, syncing arrival times, reserving activities early, and budgeting parking improve logistics, reduce stress, and deliver memorable, efficient, enjoyable group travel.</p>
          <p className={styles.subheading}><strong>🛍️</strong> Packing cubes, shared first-aid kits, sunscreen, and secure communication apps dominate group queries. Solutions streamline luggage, enhance safety, and deliver benefits like reduced stress, smoother coordination, and memorable group travel experiences across a spread-out city.</p>
          <p className={styles.subheading}><strong>🎶</strong> Group journeys thrive when inclusive activities, balanced downtime, and early event bookings are prioritized. Coordinating shared meals — a Koreatown BBQ, a Grand Central Market lunch — and beach or museum outings strengthens bonds, reduces stress, and creates lasting memories without complicating logistics.</p>
        </div>
      </section>
    </>
  );
}
