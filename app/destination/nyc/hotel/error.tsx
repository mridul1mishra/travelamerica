"use client";

export default function HotelError({ reset }: { reset: () => void }) {
  return <main style={{ padding: "4rem 1.5rem", maxWidth: 800, margin: "auto" }}>
    <h1>NYC hotels are temporarily unavailable</h1>
    <p>We couldn’t load the hotel listings. Please try again.</p>
    <button onClick={reset}>Try again</button>
  </main>;
}
