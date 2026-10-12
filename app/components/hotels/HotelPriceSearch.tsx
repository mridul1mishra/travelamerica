"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import styles from "./HotelPriceSearch.module.css";

type Result = { name: string; nightly?: string; total?: string; beforeTaxes?: string };

export default function HotelPriceSearch({ hotelId, hotelName, city }: { hotelId: string; hotelName: string; city: string }) {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [checkedAt, setCheckedAt] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = new FormData(event.currentTarget);
    const ages = String(form.get("childrenAges")).trim();
    setPending(true); setMessage(""); setResults([]); setCheckedAt("");
    try {
      const response = await fetch(`/api/hotel-prices/${hotelId}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
        checkIn: form.get("checkIn"), checkOut: form.get("checkOut"), adults: Number(form.get("adults")),
        childrenAges: ages ? ages.split(",").map(age => Number(age.trim())) : [],
      }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Prices are unavailable.");
      setResults(data.results); setCheckedAt(data.checkedAt);
      if (!data.results.length) setMessage("No prices were returned for these dates. Try another stay.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Prices are temporarily unavailable."); }
    finally { setPending(false); }
  }
  return <main className={styles.main}>
    <Link href={`/destination/${city}/hotel/${hotelId}`}>← Back to hotel</Link>
    <h1>Check prices for {hotelName}</h1>
    <p>Choose dates and guests for one room. Prices are in US dollars.</p>
    <form onSubmit={submit} className={styles.form}>
      <label>Check-in<input name="checkIn" type="date" min={new Date().toISOString().slice(0, 10)} required /></label>
      <label>Check-out<input name="checkOut" type="date" min={new Date().toISOString().slice(0, 10)} required /></label>
      <label>Adults<input name="adults" type="number" min="1" max="6" defaultValue="2" required /></label>
      <label>Children’s ages (optional)<input name="childrenAges" placeholder="Example: 5, 8" aria-describedby="child-help" /></label>
      <p id="child-help">Enter up to four ages separated by commas. Use 1 for infants under one year.</p>
      <button disabled={pending}>{pending ? "Checking prices…" : "Check prices"}</button>
    </form>
    <div role="status" aria-live="polite">{message}</div>
    {!!results.length && <section><h2>Hotel search results</h2><p>Check the hotel name below: search results may include similarly named properties.</p>
      {results.map((result, index) => <article key={index} className={styles.result}>
        <h3>{result.name}</h3>
        {result.nightly && <p>From {result.nightly} per night</p>}
        {result.total && <p>Stay total: {result.total}</p>}
        {result.beforeTaxes && <p>Before taxes and fees: {result.beforeTaxes}</p>}
      </article>)}
      <p>Checked {new Date(checkedAt).toLocaleString()}. Prices shown on Google Hotels can change; confirm final taxes, fees and availability with the provider.</p>
    </section>}
  </main>;
}
