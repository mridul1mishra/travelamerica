import Link from "next/link";
import styles from "../booking.module.css";

type BreadcrumbNavProps = {
  cityName: string;
  cityHref: string;
};

export default function BreadcrumbNav({ cityName, cityHref }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
        </li>
        <li aria-hidden="true" className={styles.breadcrumbSep}>
          &gt;
        </li>
        <li className={styles.breadcrumbItem}>
          <Link href={cityHref} className={styles.breadcrumbLink}>
            {cityName}
          </Link>
        </li>
        <li aria-hidden="true" className={styles.breadcrumbSep}>
          &gt;
        </li>
        <li className={styles.breadcrumbItem}>
          <span aria-current="page" className={styles.breadcrumbCurrent}>
            Book your trip
          </span>
        </li>
      </ol>
    </nav>
  );
}
