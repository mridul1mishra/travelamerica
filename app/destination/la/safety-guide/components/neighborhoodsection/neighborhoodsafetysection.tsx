import styles from "./neighborhoodsafety.module.css";
import NeighborhoodSafetyCard from "./neighborhoodsafetycard";
import neighborhoods from "./neighborhoodsafetydata";
import AreaHotelLink from "@/app/components/hotels/AreaHotelLink";
import { laSafetyGuideHotelAreas } from "@/app/lib/laHotelAreas";

export default function NeighborhoodSafetySection() {
  return (
    <section id="neighborhood-safety" className={styles.section}>
      <div className={styles.container}>
        <div id="neighborhood-advice" data-safety-section>
          <h2 className={styles.title}>Neighborhood Safety Breakdown</h2>
          <p className={styles.subtitle}>
            How safe are LA neighborhoods for solo travelers?
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
              <AreaHotelLink city="la" choice={laSafetyGuideHotelAreas[item.name]} source="safety-guide"
                placement="safe_neighborhoods" idKey={item.name} />
            </NeighborhoodSafetyCard>
          ))}
        </div>
      </div>
    </section>
  );
}
