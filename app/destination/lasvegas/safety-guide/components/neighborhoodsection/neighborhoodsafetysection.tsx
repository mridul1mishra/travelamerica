import styles from "./neighborhoodsafety.module.css";
import NeighborhoodSafetyCard from "./neighborhoodsafetycard";
import neighborhoods from "./neighborhoodsafetydata";
import AreaHotelLink from "@/app/components/hotels/AreaHotelLink";
import { lasvegasSafetyGuideHotelAreas } from "@/app/lib/lasvegasHotelAreas";

export default function NeighborhoodSafetySection() {
  return (
    <section id="neighborhood-safety" className={styles.section}>
      <div className={styles.container}>
        <div id="neighborhood-advice" data-safety-section>
          <h2 className={styles.title}>Area Safety Breakdown</h2>
          <p className={styles.subtitle}>
            How safe are Las Vegas areas for solo travelers?
          </p>
        </div>

        <div className={styles.grid}>
          {neighborhoods.map((item) => (
            <NeighborhoodSafetyCard
              key={item.id}
              name={item.name}
              safetyLevel={item.safetyLevel}
              tips={item.tips}
            >
              <AreaHotelLink city="lasvegas" choice={lasvegasSafetyGuideHotelAreas[item.name]} source="safety-guide"
                placement="safe_neighborhoods" idKey={item.name} />
            </NeighborhoodSafetyCard>
          ))}
        </div>
      </div>
    </section>
  );
}
