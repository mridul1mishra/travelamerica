"use client";

import { useEffect, useRef, useState } from "react";
import { useMember } from "@/app/components/auth/MemberProvider";
import styles from "./HotelPriceLink.module.css";

type PriceResponse = {
  results: { name: string; nightly?: string; total?: string }[];
  checkedAt: string;
  stay: { checkIn: string; checkOut: string; adults: number };
};

export default function HotelPriceLink({ hotelId, className, initialPrices = null }: { hotelId: string; className?: string; initialPrices?: PriceResponse | null }) {
  const { member, pending, signIn } = useMember();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [prices, setPrices] = useState<PriceResponse | null>(initialPrices);
  const requested = useRef(Boolean(initialPrices));
  const href = `/api/hotel-prices/${hotelId}`;
  const price = prices?.results[0];

  async function load() {
    if (requested.current) return;
    requested.current = true;
    setLoading(true); setError("");
    try {
      const response = await fetch(href, { method: "POST" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Prices are unavailable.");
      setPrices(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Prices are unavailable.");
      requested.current = false;
    } finally { setLoading(false); }
  }

  useEffect(() => {
    if (member && new URLSearchParams(window.location.search).get("prices") === "1"
      && window.location.pathname.endsWith(`/hotel/${hotelId}`)) void load();
    // Auto-load only when returning from the prices entry point.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [member, hotelId]);

  return <div>
    {!prices && <a href={href} className={[className, styles.trigger].filter(Boolean).join(" ")} aria-busy={pending || loading || undefined}
      aria-label={loading ? "Loading hotel price" : undefined}
      onClick={event => {
        event.preventDefault();
        if (pending || loading) return;
        if (!member) { signIn(href, "prices"); return; }
        void load();
      }}>{loading ? <span className={styles.arrows} aria-hidden="true">
        <span>&gt;</span><span>&gt;</span><span>&gt;</span><span>&gt;</span><span>&gt;</span>
      </span> : "See prices"}</a>}
    <div role="status" aria-live="polite">
      {error && <p>{error}</p>}
      {prices && (price?.nightly ? <p>From {price.nightly} / night</p>
        : <p>No price is available for this stay.</p>)}
    </div>
  </div>;
}
