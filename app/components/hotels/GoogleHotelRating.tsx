"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import HotelCoverImage from "@/app/components/hotels/HotelCoverImage";
import { Eye, EyeOff, Star } from "lucide-react";
import HotelPhotoViewer from "./HotelPhotoViewer";
import type { HotelPhoto } from "@/app/lib/google-hotel-ratings-core";
import { useMember } from "@/app/components/auth/MemberProvider";
import styles from "./GoogleHotelRating.module.css";

const TURNSTILE_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
type Turnstile = NonNullable<Window["turnstile"]>;
type Rating = { rating: number | null; reviewCount: number | null; reviews?: { author: string; authorUrl?: string; rating: number; text: string; date: string; url?: string }[]; photos?: HotelPhoto[] };
type Phase = "idle" | "challenge" | "loading" | "loaded" | "unavailable" | "security_failed" | "signin";
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

export default function GoogleHotelRating({ hotelId, hotelName, googleMapsUrl, showReviews = false, photosOnly = false, coverImage }: {
  hotelId: string;
  hotelName: string;
  googleMapsUrl?: string;
  showReviews?: boolean;
  photosOnly?: boolean;
  coverImage?: string;
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
  const [securityMessage, setSecurityMessage] = useState("");
  const [securityAttempt, setSecurityAttempt] = useState(0);
  const [photoMode, setPhotoMode] = useState<"lead" | "gallery">("lead");
  const [photoLimited, setPhotoLimited] = useState(false);
  const photoSection = useRef<HTMLElement>(null);
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
      setSecurityMessage("");
      setPhotoMode("lead");
      setPhotoLimited(false);
      setPhase(current => current === "signin" ? "signin" : "idle");
    }, 0);
    return () => clearTimeout(reset);
  }, [member, memberPending]);

  useEffect(() => {
    if (!member || !requested || lookupStarted.current || (!localTurnstileBypass && (!siteKey || !challengeElement.current))) return;
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
    const securityFailed = (reason: string, message: string, code?: unknown) => {
      if (!active || settled || submitted) return;
      settled = true;
      clearTimeout(timer);
      removeWidget();
      const safeCode = typeof code === "string" && /^\d{6}$/.test(code) ? code : undefined;
      console.error("Hotel security check failed", { feature: photosOnly ? "photos" : "ratings", reason, ...(safeCode ? { code: safeCode } : {}) });
      setSecurityMessage(message);
      setPhase("security_failed");
    };
    const loadRating = (token: string) => {
      if (!active || submitted || settled) return;
      if (!localTurnstileBypass && !token?.trim()) { securityFailed("empty_token", "The security check did not complete. Please try again."); return; }
      submitted = true;
      lookupStarted.current = true;
      clearTimeout(timer);
      setPhase("loading");
      controller = new AbortController();
      timer = setTimeout(unavailable, photosOnly ? 60000 : 30000);
      void fetch(photosOnly ? `/api/hotel-photos?mode=${photoMode}` : "/api/hotel-ratings", {
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
        if (response.status === 429 && photosOnly && active && !settled) setPhotoLimited(true);
        if (!response.ok) throw new Error("Rating unavailable");
        const data: unknown = await response.json();
        if (!isRating(data)) throw new Error("Rating unavailable");
        if (photosOnly && (!Array.isArray(data.photos) || data.photos.length > 3)) throw new Error("Photos unavailable");
        if (!active || settled) return;
        settled = true;
        clearTimeout(timer);
        removeWidget();
        setResult(previous => photosOnly && photoMode === "gallery"
          ? { ...data, photos: [...(previous?.photos ?? []), ...(data.photos ?? [])].filter((photo, index, photos) => photos.findIndex(item => item.url === photo.url) === index) }
          : data);
        setPhase("loaded");
      }).catch(unavailable);
    };
    timer = setTimeout(() => securityFailed("challenge_timeout", "The security check timed out. Please try again."), 90000);

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
        "error-callback": (code: unknown) => securityFailed("turnstile_error", "The security check failed. Please try again.", code),
        "expired-callback": () => securityFailed("token_expired", "The security check expired. Please try again."),
        "timeout-callback": () => securityFailed("widget_timeout", "The security check timed out. Please try again."),
        "unsupported-callback": () => securityFailed("unsupported_browser", "This browser cannot complete the security check. Please try another browser."),
        callback: loadRating,
      });
      if (settled) removeWidget();
    }).catch(() => securityFailed("script_or_widget_load", "The security check could not load. Please reload the page or check your browser's content blocker."));

    return () => {
      if (submitted && !settled) unavailable();
      active = false;
      clearTimeout(timer);
      controller?.abort();
      removeWidget();
    };
  }, [requested, siteKey, hotelId, localTurnstileBypass, member, invalidate, showReviews, photosOnly, photoMode, securityAttempt]);

  const begin = useCallback(() => {
    if (memberPending) return;
    if (!member) {
      signIn(`${window.location.pathname}${window.location.search}`, "rating");
      return;
    }
    if (started.current) return;
    started.current = true;
    setPhotoLimited(false);
    if (!localTurnstileBypass && !siteKey) {
      console.error("Hotel security check failed", { feature: photosOnly ? "photos" : "ratings", reason: "missing_site_key" });
      setSecurityMessage("The security check is not configured. Please use Google Maps for now.");
      setPhase("security_failed");
      return;
    }
    setPhase(localTurnstileBypass ? "loading" : "challenge");
    if (localTurnstileBypass || siteKey) setRequested(true);
  }, [member, memberPending, signIn, localTurnstileBypass, siteKey, photosOnly]);

  useEffect(() => {
    const section = photoSection.current;
    if (!photosOnly || !member || memberPending || !section || started.current) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer.disconnect();
        begin();
      }
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, [photosOnly, member, memberPending, begin]);

  const pending = member && (phase === "challenge" || phase === "loading");
  const unavailable = phase === "unavailable" || phase === "security_failed";
  const expanded = member && (phase === "loaded" || unavailable) && !hidden;
  const toggle = () => {
    if (!member) { begin(); return; }
    if (phase === "loaded" || unavailable) setHidden(value => !value);
    else begin();
  };
  const retrySecurity = () => {
    if (lookupStarted.current || memberPending || !member) return;
    started.current = false;
    setSecurityAttempt(value => value + 1);
    begin();
  };

  if (photosOnly) {
    const photos = member ? result?.photos ?? [] : [];
    const lead = photos[0];
    const canRetry = member && unavailable && !photoLimited;
    const openGallery = () => {
      if (pending || photoMode === "gallery") return;
      setPhotoMode("gallery");
      started.current = false;
      lookupStarted.current = false;
      setSecurityAttempt(value => value + 1);
      begin();
    };
    const retryPhotos = () => {
      if (!canRetry || pending) return;
      started.current = false;
      lookupStarted.current = false;
      setSecurityAttempt(value => value + 1);
      begin();
    };
    return <section ref={photoSection} className={lead ? undefined : styles.photoSection} data-hotel-photo={lead || coverImage ? "available" : undefined} aria-label="Hotel photos">
      {lead ? <HotelPhotoViewer photos={photos} hotelName={hotelName} mainImage
        onViewPhotos={photoMode === "lead" ? openGallery : undefined} />
        : coverImage && <HotelCoverImage className={styles.coverPhoto} src={coverImage} hotelName={hotelName} width={720} height={450} />}
      {!lead && <h2>Hotel photos</h2>}
      <div aria-live="polite">
        {!member && !memberPending && <p>Sign in to view hotel photos from Google.</p>}
        {pending && <p>Loading hotel photos…</p>}
        {member && phase === "challenge" && <p>Complete the security check if prompted.</p>}
        {member && phase === "loaded" && !lead && <p>No hotel photos are available from Google.</p>}
        {member && unavailable && <p>{photoLimited
          ? "Hotel photos are temporarily unavailable. Please try again later."
          : "We couldn’t load hotel photos. Please try again."}</p>}
      </div>
      {!member && !memberPending && <button type="button" className={styles.photosButton} onClick={begin}>Sign in to view photos</button>}
      {canRetry && <button type="button" className={styles.photosButton} onClick={retryPhotos}>Try again</button>}
      {member && requested && <div ref={challengeElement} className={styles.challenge} hidden={phase !== "challenge"} />}
    </section>;
  }

  return (
    <div className={`${styles.rating}${showReviews ? ` ${styles.withReviews}` : ""}`} aria-label={`Google rating for ${hotelName}`} aria-busy={pending}>
      {showReviews && !member && !memberPending && <p>Sign in to view guest feedback for this hotel.</p>}
      {!expanded && !showReviews && <span aria-hidden="true" className={phase === "loading" && member ? styles.loadingStars : undefined}>
        {[0, 1, 2, 3].map(index => <span key={index}>*</span>)}
      </span>}
      <div id={messageId} className={styles.message} aria-live="polite">
        {!member && phase === "signin" && <p>Sign in again to view this rating.</p>}
        {member && phase === "challenge" && <p>Complete the security check to view this rating.</p>}
        {member && phase === "loading" && <span className={styles.srOnly}>Loading rating…</span>}
        {expanded && unavailable && <p>{"Google rating is unavailable right now."}</p>}
        {expanded && phase === "security_failed" && <p>{securityMessage}</p>}
        {expanded && phase === "loaded" && result && <>
          <span>{result.rating === null ? "No Google rating available." : `${result.rating.toFixed(1)} rating`}</span>
          {!showReviews && result.reviewCount !== null && <span>{result.reviewCount.toLocaleString()} {result.reviewCount === 1 ? "review" : "reviews"}</span>}
          {showReviews && <section className={styles.reviews} aria-label="Guest reviews from Google Maps" tabIndex={0}>
            <h2>Guest reviews</h2>
            <p>Reviews from Google Maps · Sorted by relevance</p>
            {result.reviews?.length ? <div className={styles.reviewGrid}>{result.reviews.map((review, index) => <article key={index} className={styles.review}>
              <header className={styles.reviewHeader}>
                <span className={styles.avatar} aria-hidden="true">{review.author.trim().split(/\s+/).slice(0, 2).map(part => Array.from(part)[0]).join("").toUpperCase()}</span>
                <div>
                  <strong>{review.authorUrl ? <a href={review.authorUrl} target="_blank" rel="noopener noreferrer">{review.author}</a> : review.author}</strong>
                  <time className={styles.reviewDate} dateTime={review.date}>{new Date(review.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                </div>
              </header>
              <div className={styles.reviewStars} aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, star) => <Star key={star} size={16} aria-hidden="true" fill={star < Math.round(review.rating) ? "currentColor" : "none"} />)}
                <span aria-hidden="true">{review.rating}/5</span>
              </div>
              {review.text.length > 280 ? <details className={styles.reviewDetails}>
                <summary><span className={styles.reviewPreview}>{review.text.slice(0, 280).trimEnd()}…</span><span className={styles.readMore}>Read full review</span><span className={styles.readLess}>Show less</span></summary>
                <p className={styles.reviewText}>{review.text}</p>
              </details> : <p className={styles.reviewText}>{review.text}</p>}
              {review.url && <a className={styles.reviewLink} href={review.url} target="_blank" rel="noopener noreferrer">Read on Google Maps ↗</a>}
            </article>)}</div> : <p>No written reviews are available for this hotel.</p>}
          </section>}
        </>}
      </div>
      <button type="button" className={showReviews ? styles.photosButton : styles.button} disabled={pending || memberPending} onClick={toggle}
        aria-label={showReviews ? undefined : `${expanded ? "Hide" : "Show"} Google rating for ${hotelName}`}
        aria-controls={messageId} aria-expanded={expanded}>
        {showReviews ? (!member ? "Sign in to view" : expanded ? "Hide reviews" : "View ratings & reviews") : expanded ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
      </button>
      {expanded && phase === "security_failed" && siteKey && <button type="button" className={styles.photosButton} disabled={memberPending} onClick={retrySecurity}>Retry security check</button>}
      {member && requested && <div ref={challengeElement} className={styles.challenge} hidden={phase !== "challenge"} />}
      {expanded && !showReviews && <a className={styles.attribution} href={mapsUrl} translate="no"
        target="_blank" rel="noopener noreferrer">{phase === "loaded" ? "Google Maps" : "View on Google Maps"}</a>}
    </div>
  );
}
