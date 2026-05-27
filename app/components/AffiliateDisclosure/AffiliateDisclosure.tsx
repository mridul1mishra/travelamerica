import Link from "next/link";
import styles from "./AffiliateDisclosure.module.css";

// FTC-compliant affiliate disclosure rendered site-wide above the footer.
// Required by both the FTC (16 CFR Part 255) and Booking.com Affiliate Program
// terms before they will approve a publisher. Keep this visible on every page
// that contains affiliate links (which is effectively every page).

export default function AffiliateDisclosure() {
  return (
    <aside className={styles.disclosure} role="contentinfo" aria-label="Affiliate disclosure">
      <p>
        <strong>Affiliate disclosure:</strong> Travels Americas may earn commissions
        from qualifying bookings and purchases made through links on this site, at
        no extra cost to you. We only recommend hotels, tours, and services we
        believe are useful to our readers, and affiliate relationships do not
        influence our editorial recommendations. For details on how we test and
        select what we recommend, see our{" "}
        <Link href="/about">About page</Link>.
      </p>
    </aside>
  );
}
