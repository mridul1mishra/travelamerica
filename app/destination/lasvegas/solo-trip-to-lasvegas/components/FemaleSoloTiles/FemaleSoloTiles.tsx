import Link from "next/link";
import styles from "@/app/components/Solofemaletravel/FemaleSoloTiles.module.css";
import { FemaleSoloTile } from "@/app/models/femaleSolo";
import { MdLocationCity } from "react-icons/md";
import { FaSubway, FaHandsHelping } from "react-icons/fa";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  MdLocationCity: <MdLocationCity />,
  FaSubway: <FaSubway />,
  FaHandsHelping: <FaHandsHelping />,
};

interface Props {
  tiles: FemaleSoloTile[];
  ctaLink: string;
  cityName?: string;
}

export default function FemaleSoloTiles({ tiles, ctaLink, cityName = "Las Vegas" }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Female Solo Travel in {cityName}</h2>
      <div className={styles.grid}>
        {tiles.map((tile, index) => (
          <div key={index} className={styles.tile}>
            {tile.icon && iconMap[tile.icon] && (
              <span className={styles.icon}>{iconMap[tile.icon]}</span>
            )}
            <h3 className={styles.tileTitle}>{tile.title}</h3>
            <p className={styles.tileText}>{tile.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.ctaWrapper}>
        <Link href={ctaLink} className={styles.cta}>
          Read the full female solo guide →
        </Link>
      </div>
    </section>
  );
}
