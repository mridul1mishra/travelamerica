import Image from "next/image";
import styles from "./safetyhero.module.css";

export default function SafetyHeroImage() {
  return (
    <div className={styles.heroMedia}>
      <picture className={styles.heroPicture}>
        <source
          media="(min-width: 1100px)"
          srcSet="/destination/orlando/safety-guide/orlando-safety-hero-portrait.webp"
        />
        <Image
          src="/destination/orlando/safety-guide/orlando-safety-hero.webp"
          alt="Visitors walking together across a marked crosswalk in a sunny, palm-lined visitor district"
          fill
          priority
          sizes="(max-width: 360px) calc(100vw - 32px), (max-width: 767px) calc(100vw - 40px), (max-width: 1099px) calc(100vw - 48px), 516px"
          className={styles.heroImage}
        />
      </picture>
    </div>
  );
}
