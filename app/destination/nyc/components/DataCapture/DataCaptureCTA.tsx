import Link from "next/link";
import styles from "../../nyc.module.css";

const bookmarks = [
  { title: "NYC Safety Guide",     href: "/destination/nyc/nyc-safety-guide" },
  { title: "Solo Trip Planning",   href: "/destination/nyc/solo-trip-to-nyc" },
  { title: "Best Areas to Stay",   href: "/destination/nyc/best-areas-to-stay" },
  { title: "Landmark Guide",       href: "/majorcities/newyork/landmark" },
];

export default function DataCaptureCTA() {
  return (
    <section className={styles.highlight}>
      <h2>Coming Back to Plan?</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Bookmark these pages — they\'re updated as NYC changes:
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
              color: "#0364A0",
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
