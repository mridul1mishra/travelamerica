import Image from "next/image";
import styles from "./SectionSafestNeighborhoods.module.css";
import TipBox from "./TipBox";
import WarningBox from "./WarningBox";

export interface SafestNeighborhoodsProps {
  title?: string;
  paragraphs: string[];
  tip: string;
  warning: string;
  mapImage?: { src: string; alt: string };
}

export default function SectionSafestNeighborhoods({
  title = "Safest Neighborhoods",
  paragraphs,
  tip,
  warning,
  mapImage,
}: SafestNeighborhoodsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {paragraphs.map((p, i) => <p key={i} className={styles.paragraph}>{p}</p>)}
        <div className={styles.tipMapRow}>
          <div className={styles.tipCol}><TipBox>{tip}</TipBox></div>
          {mapImage && (
            <div className={styles.mapCol}>
              <Image src={mapImage.src} alt={mapImage.alt} className={styles.mapImage} width={600} height={400} />
            </div>
          )}
        </div>
        <WarningBox>{warning}</WarningBox>
      </div>
    </section>
  );
}
