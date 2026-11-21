import Link from "next/link";
import { AUTHORS, type AuthorKey } from "@/app/lib/authors";
import styles from "./Byline.module.css";

// Visible byline. Default: Mridul Mishra writes, Manisha Shukla reviews.
// Swap the props on pages where it should be the other way round.
export default function Byline({
  author = "mridul",
  reviewer = "manisha",
  updated,
}: {
  author?: AuthorKey;
  reviewer?: AuthorKey;
  updated?: string; // e.g. "November 2026"
}) {
  const a = AUTHORS[author];
  const r = AUTHORS[reviewer];
  return (
    <p className={styles.byline}>
      Written by <Link href={a.href}>{a.name}</Link>, {a.role.toLowerCase()} · Reviewed by{" "}
      <Link href={r.href}>{r.name}</Link>
      {updated ? <> · Last updated {updated}</> : null}
    </p>
  );
}
