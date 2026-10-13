"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useMember } from "@/app/components/auth/MemberProvider";
import styles from "./GoogleHotelRating.module.css";

const TURNSTILE_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
type Turnstile = NonNullable<Window["turnstile"]>;
type Rating = { rating: number | null; reviewCount: number | null; reviews?: { author: string; authorUrl?: string; rating: number; text: string; date: string; url?: string }[] };
type Phase = "idle" | "challenge" | "loading" | "loaded" | "unavailable" | "signin";
let turnstileLoad: Promise<Turnstile> | undefined;

function loadTurnstile(): Promise<Turnstile> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (turnstileLoad) return turnstileLoad;
  turnstileLoad = new Promise<Turnstile>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_URL}"]`);
    const script = existing ?? document.createElement("script");
    const cleanup = () => {
      clearTimeout(timeout);
      script.removeEventListener("load", loaded);
      script.removeEventListener("error", failed);
    };
    const failed = () => {
      cleanup();
      if (!existing) script.remove();
      reject(new Error("Security verification unavailable"));
    };
    const loaded = () => {
      if (!window.turnstile) { failed(); return; }
      cleanup();
      resolve(window.turnstile);
    };
    const timeout = setTimeout(failed, 12000);
    script.addEventListener("load", loaded, { once: true });
    script.addEventListener("error", failed, { once: true });
    if (!existing) {
      script.src = TURNSTILE_URL;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }).catch(error => {
    turnstileLoad = undefined;
    throw error;
  });
  return turnstileLoad;
}

function isRating(value: unknown): value is Rating {
  if (!value || typeof value !== "object") return false;
  const { rating, reviewCount } = value as Partial<Rating>;
  return (rating === null || (typeof rating === "number" && Number.isFinite(rating) && rating >= 0 && rating <= 5))
    && (reviewCount === null || (typeof reviewCount === "number" && Number.isInteger(reviewCount) && reviewCount >= 0));
}

export default function GoogleHotelRating({ hotelId, hotelName, googleMapsUrl, showReviews = false }: {
  hotelId: string;
  hotelName: string;
  googleMapsUrl?: string;
  showReviews?: boolean;
}) {
  const { member, pending: memberPending, signIn, invalidate } = useMember();
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  const localTurnstileBypass = process.env.NODE_ENV === "development"
    && process.env.NEXT_PUBLIC_HOTEL_RATINGS_LOCAL_BYPASS === "true"
    && typeof window !== "undefined"
    && (window.location.origin === "http://localhost:3000" || window.location.origin === "http://127.0.0.1:3000");
  const [requested, setRequested] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [result, setResult] = useState<Rating | null>(null);
  const [hidden, setHidden] = useState(false);
  const messageId = useId();
  const started = useRef(false);
  const lookupStarted = useRef(false);
  const challengeElement = useRef<HTMLDivElement>(null);
  const mapsUrl = googleMapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotelName + " New York City")}`;

  useEffect(() => {
    if (member || memberPending) return;
    // A member's previously loaded result must disappear after sign-out or expiry.
    const reset = window.setTimeout(() => {
      started.current = false;
      lookupStarted.current = false;
      setRequested(false);
      setResult(null);
      setHidden(false);
      setPhase(current => current === "signin" ? "signin" : "idle");
    }, 0);
    return () => clearTimeout(reset);
  }, [member, memberPending]);

  useEffect(() => {
    if (!member || memberPending || !requested || lookupStarted.current || (!localTurnstileBypass && (!siteKey || !challengeElement.current))) return;
    let active = true;
    let submitted = false;
    let settled = false;
    let widgetId: string | undefined;
    let turnstile: Turnstile | undefined;
    let controller: AbortController | undefined;
    let timer: ReturnType<typeof setTimeout>;
    const removeWidget = () => {
      if (widgetId && turnstile) {
        turnstile.remove(widgetId);
        widgetId = undefined;
      }
    };
    const unavailable = () => {
      if (!active || settled) return;
      settled = true;
      clearTimeout(timer);
      controller?.abort();
      removeWidget();
      setPhase("unavailable");
    };
    const loadRating = (token: string) => {
      if (!active || submitted || settled) return;
      if (!localTurnstileBypass && !token?.trim()) { unavailable(); return; }
      submitted = true;
      lookupStarted.current = true;
      clearTimeout(timer);
      setPhase("loading");
      controller = new AbortController();
      timer = setTimeout(unavailable, 30000);
      void fetch("/api/hotel-ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hotelId, turnstileToken: token, ...(showReviews ? { includeReviews: true } : {}) }),
        credentials: "same-origin",
        cache: "no-store",
        signal: controller.signal,
      }).then(async response => {
        if (response.status === 401) {
          if (!active || settled) return;
          settled = true;
          clearTimeout(timer);
          removeWidget();
          setResult(null);
          setPhase("signin");
          setRequested(false);
          started.current = false;
          lookupStarted.current = false;
          invalidate();
          return;
        }
        if (!response.ok) throw new Error("Rating unavailable");
        const data: unknown = await response.json();
        if (!isRating(data)) throw new Error("Rating unavailable");
        if (!active || settled) return;
        settled = true;
        clearTimeout(timer);
        removeWidget();
        setResult(data);
        setPhase("loaded");
      }).catch(unavailable);
    };
    timer = setTimeout(unavailable, 90000);

    if (localTurnstileBypass) loadRating("");
    else void loadTurnstile().then(api => {
      if (!active || settled || !challengeElement.current) return;
      turnstile = api;
      widgetId = api.render(challengeElement.current, {
        sitekey: siteKey!,
        action: "hotel-rating",
        appearance: "interaction-only",
        size: "compact",
        retry: "never",
        "refresh-expired": "never",
        "refresh-timeout": "never",
        "response-field": false,
        "error-callback": unavailable,
        "expired-callback": unavailable,
        "timeout-callback": unavailable,
        callback: loadRating,
      });
      if (settled) removeWidget();
    }).catch(unavailable);

    return () => {
      if (submitted && !settled) unavailable();
      active = false;
      clearTimeout(timer);
      controller?.abort();
      removeWidget();
    };
  }, [requested, siteKey, hotelId, localTurnstileBypass, member, memberPending, invalidate, showReviews]);

  const begin = () => {
    if (memberPending) return;
    if (!member) {
      signIn(`${window.location.pathname}${window.location.search}`, "rating");
      return;
    }
    if (started.current) return;
    started.current = true;
    setPhase(localTurnstileBypass ? "loading" : siteKey ? "challenge" : "unavailable");
    if (localTurnstileBypass || siteKey) setRequested(true);
  };
  const pending = member && (phase === "challenge" || phase === "loading");
  const unavailable = phase === "unavailable";
  const expanded = member && (phase === "loaded" || unavailable) && !hidden;
  const toggle = () => {
    if (!member) { begin(); return; }
    if (phase === "loaded" || unavailable) setHidden(value => !value);
    else begin();
  };

  return (
    <div className={styles.rating} aria-label={`Google rating for ${hotelName}`} aria-busy={pending}>
      {!expanded && <span aria-hidden="true" className={phase === "loading" && member ? styles.loadingStars : undefined}>
        {[0, 1, 2, 3].map(index => <span key={index}>*</span>)}
      </span>}
      <div id={messageId} className={styles.message} aria-live="polite">
        {!member && phase === "signin" && <p>Sign in again to view this rating.</p>}
        {member && phase === "challenge" && <p>Complete the security check to view this rating.</p>}
        {member && phase === "loading" && <span className={styles.srOnly}>Loading rating…</span>}
        {expanded && unavailable && <p>Google rating is unavailable right now.</p>}
        {expanded && phase === "loaded" && result && <>
          <span>{result.rating === null ? "No Google rating available." : `${result.rating.toFixed(1)} rating`}</span>
          {!showReviews && result.reviewCount !== null && <span>{result.reviewCount.toLocaleString()} {result.reviewCount === 1 ? "review" : "reviews"}</span>}
          {showReviews && <section className={styles.reviews} aria-label="Guest reviews from Google Maps">
            <h2>Guest reviews</h2>
            <p>Reviews from Google Maps · Sorted by relevance</p>
            {result.reviews?.length ? result.reviews.map((review, index) => <article key={index} className={styles.review}>
              <strong>{review.authorUrl ? <a href={review.authorUrl} target="_blank" rel="noopener noreferrer">{review.author}</a> : review.author}</strong>
              <p>{review.rating} / 5 · <time dateTime={review.date}>{new Date(review.date).toLocaleDateString()}</time></p>
              <p className={styles.reviewText}>{review.text}</p>
              {review.url && <a href={review.url} target="_blank" rel="noopener noreferrer">Read on Google Maps ↗</a>}
            </article>) : <p>No written reviews are available for this hotel.</p>}
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Read more reviews on Google Maps ↗</a>
          </section>}
        </>}
      </div>
      <button type="button" className={styles.button} disabled={pending || memberPending} onClick={toggle}
        aria-label={`${expanded ? "Hide" : "Show"} Google ${showReviews ? "reviews" : "rating"} for ${hotelName}`}
        title={`${expanded ? "Hide" : "Show"} Google ${showReviews ? "reviews" : "rating"}`}
        aria-controls={messageId} aria-expanded={expanded}>
        {expanded ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
      </button>
      {member && requested && <div ref={challengeElement} className={styles.challenge} hidden={phase !== "challenge"} />}
      {expanded && <a className={styles.attribution} href={mapsUrl} translate="no"
        target="_blank" rel="noopener noreferrer">{phase === "loaded" ? "Google Maps" : "View on Google Maps"}</a>}
    </div>
  );
}
