import styles from "@/app/components/quickactionbar/QuickActionBar.module.css";
import Link from "next/link";
import { FaShieldAlt, FaSubway, FaHandsHelping, FaFemale, FaRegCalendarAlt, FaExclamationTriangle, FaLayerGroup } from "react-icons/fa";
import { MdLocationCity, MdWarningAmber, MdReportGmailerrorred } from "react-icons/md";

export default function QuickActionBar() {
  return (
    <nav className={styles.quickBar}>
      <Link href="#safety" className={styles.action}>
        <FaShieldAlt className={styles.icon} />
        Safety
      </Link>
      <Link href="#neighborhoods" className={styles.action}>
        <MdLocationCity className={styles.icon} />
        Neighborhoods
      </Link>
      <Link href="#scams" className={styles.action}>
        <MdWarningAmber className={styles.icon} />
        Scams
      </Link>
      <Link href="#transit" className={styles.action}>
        <FaSubway className={styles.icon} />
        Transit
      </Link>
      <Link href="#emergency" className={styles.action}>
        <MdReportGmailerrorred className={styles.icon} />
        Emergency
      </Link>
      <Link href="#support" className={styles.action}>
        <FaHandsHelping className={styles.icon} />
        Support
      </Link>
      <Link href="#female-solo" className={styles.action}>
        <FaFemale className={styles.icon} />
        Female Solo
      </Link>
      <Link href="#itinerary" className={styles.action}>
        <FaRegCalendarAlt className={styles.icon} />
        Itinerary
      </Link>
      <Link href="#warnings" className={styles.action}>
        <FaExclamationTriangle className={styles.icon} />
        Warnings
      </Link>
      <Link href="#layers" className={styles.action}>
        <FaLayerGroup className={styles.icon} />
        Layers
      </Link>
    </nav>
  );
}
