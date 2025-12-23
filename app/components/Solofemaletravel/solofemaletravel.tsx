import Link from "next/link";
import styles from "./FemaleSoloTiles.module.css";
import { FemaleSoloTile } from "@/app/models/femaleSolo";
import { MdLocationCity } from "react-icons/md";
import { FaSubway, FaHandsHelping } from "react-icons/fa";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  MdLocationCity: <MdLocationCity />,
  FaSubway: <FaSubway />,
  FaHandsHelping: <FaHandsHelping />
};

interface Props {
  tiles: FemaleSoloTile[];
  ctaLink: string;
}

export default function FemaleSoloTiles({ tiles, ctaLink }: Props) {
  return (
    <section id="female-travel" className={styles.section}>
      <h2 className={styles.heading}>Solo Female Travel in NYC</h2>

      <div className={styles.grid}>
        {tiles.map((tile, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>
                {iconMap[tile.icon] ?? null}
            </div>

            <h3 className={styles.title}>{tile.title}</h3>
            <p className={styles.description}>{tile.description}</p>

            <Link href={tile.link} className={styles.link}>
              Learn More →
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.ctaWrapper}>
        <Link href={ctaLink} className={styles.cta}>
          Solo Female Guide →
        </Link>
      </div>
    </section>
  );
}
