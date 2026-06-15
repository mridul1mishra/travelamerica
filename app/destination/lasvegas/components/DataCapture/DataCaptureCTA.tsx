import Link from "next/link";
import styles from "../../lasvegas.module.css";

const bookmarks = [
  { title: "Las Vegas Safety Guide", href: "/destination/lasvegas/safety-guide" },
  { title: "Solo Trip to Vegas",      href: "/destination/lasvegas/solo-trip-to-lasvegas" },
  { title: "Best Areas to Stay",      href: "/destination/lasvegas/best-areas-to-stay" },
  { title: "Landmark Guide",          href: "/destination/lasvegas/landmark" },
];

export default function DataCaptureCTA() {
  return (
    <section className={styles.highlight}>
      <h2>Coming Back to Plan?</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Bookmark these pages — they&apos;re updated as Las Vegas changes:
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "0.75rem",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        {bookmarks.map(({ title, href }) => (
          <Link
            key={href}
            href={href}
            style={{
              display: "block",
              padding: "1rem 1.25rem",
              border: "1px solid #e2e8f0",
              borderRadius: 8,
              background: "#fff",
              textDecoration: "none",
              color: "#1d4ed8",
              fontWeight: 600,
              fontSize: "0.95rem",
              textAlign: "center",
            }}
          >
            {title}
          </Link>
        ))}
      </div>
    </section>
  );
}
