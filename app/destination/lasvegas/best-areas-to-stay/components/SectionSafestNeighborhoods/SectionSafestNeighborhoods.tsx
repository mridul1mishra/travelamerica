import Image from "next/image";
import styles from "@/app/components/destination/bestareatostay/safestneighborhood/SectionSafestNeighborhoods.module.css";
import { Lightbulb, AlertTriangle } from "lucide-react";

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.tipBox}>
      <Lightbulb className={styles.icon} />
      <p>{children}</p>
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.warningBox}>
      <AlertTriangle className={styles.icon} />
      <p>{children}</p>
    </div>
  );
}

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
        {paragraphs.map((p, i) => (
          <p key={i} className={styles.paragraph}>{p}</p>
        ))}
        <div className={styles.tipMapRow}>
          <div className={styles.tipCol}>
            <TipBox>{tip}</TipBox>
          </div>
          {mapImage && (
            <div className={styles.mapCol}>
              <Image
                src={mapImage.src}
                alt={mapImage.alt}
                className={styles.mapImage}
                width={600}
                height={400}
              />
            </div>
          )}
        </div>
        <WarningBox>{warning}</WarningBox>
      </div>
    </section>
  );
}
