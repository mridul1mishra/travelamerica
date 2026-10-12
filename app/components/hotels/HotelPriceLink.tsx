"use client";

import { useEffect, useRef, useState } from "react";
import { useMember } from "@/app/components/auth/MemberProvider";

type PriceResponse = {
  results: { name: string; nightly?: string; total?: string }[];
  checkedAt: string;
  stay: { checkIn: string; checkOut: string; adults: number };
};

export default function HotelPriceLink({ hotelId, className }: { hotelId: string; className?: string }) {
  const { member, pending, signIn } = useMember();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [prices, setPrices] = useState<PriceResponse | null>(null);
  const requested = useRef(false);
  const href = `/api/hotel-prices/${hotelId}`;

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
    <a href={href} className={className} aria-busy={pending || loading || undefined}
      onClick={event => {
        event.preventDefault();
        if (pending || loading) return;
        if (!member) { signIn(href, "prices"); return; }
        void load();
      }}>{loading ? "Checking price…" : prices ? "Price checked" : "See prices"}</a>
    <div role="status" aria-live="polite">
      {error && <p>{error}</p>}
      {prices && <>
        <p>1 adult · 1 night · {prices.stay.checkIn} to {prices.stay.checkOut} · USD</p>
        {prices.results.length ? prices.results.map((price, index) => <p key={`${price.name}-${index}`}>
          <strong>{price.name}</strong>: {price.nightly ? `From ${price.nightly} / night` : price.total}
        </p>) : <p>No price is available for this stay.</p>}
        <small>Checked {new Date(prices.checkedAt).toLocaleString()}. Confirm the property, final taxes, fees and availability before booking.</small>
      </>}
    </div>
  </div>;
}
