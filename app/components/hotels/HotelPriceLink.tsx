"use client";

import { useEffect, useRef, useState } from "react";
import { useMember } from "@/app/components/auth/MemberProvider";
import styles from "./HotelPriceLink.module.css";

type PriceResponse = {
  results: { name: string; nightly?: string; total?: string }[];
  checkedAt: string;
  stay: { checkIn: string; checkOut: string; adults: number };
};

export default function HotelPriceLink({ hotelId, className, bookingUrl, bookingLinkClassName, initialPrices = null }: {
  hotelId: string;
  className?: string;
  bookingUrl?: string;
  bookingLinkClassName?: string;
  initialPrices?: PriceResponse | null;
}) {
  const { member, pending, signIn } = useMember();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [prices, setPrices] = useState<PriceResponse | null>(initialPrices);
  const requested = useRef(Boolean(initialPrices));
  const href = `/api/hotel-prices/${hotelId}`;
  const price = prices?.results[0];
  const priceLabel = price?.nightly ? `From ${price.nightly} / night` : price?.total ? `${price.total} total` : null;

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
      </span> : "Check prices"}</a>}
    <div role="status" aria-live="polite">
      {error && <p>{error}</p>}
      {prices && (priceLabel ? <>
        {bookingUrl
          ? <a href={bookingUrl} className={className} target="_blank" rel="noopener noreferrer sponsored" data-track="booking_cta">{priceLabel} ↗</a>
          : <p><strong>{priceLabel}</strong></p>}
        {price?.name && <p>{price.name}</p>}
        <p>{prices.stay.checkIn} to {prices.stay.checkOut} · {prices.stay.adults} {prices.stay.adults === 1 ? "adult" : "adults"}</p>
      </> : <p>No price is available for this stay.</p>)}
    </div>
    {bookingUrl && !priceLabel && <a href={bookingUrl} className={bookingLinkClassName} target="_blank"
      rel="noopener noreferrer sponsored" data-track="booking_cta">Book hotel ↗</a>}
  </div>;
}
