"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, unknown>) => void;
  }
}

function getPartner(url: URL, rel: string) {
  const host = url.hostname.replace(/^www\./, "");
  if (host.includes("safetywing.com")) return "safetywing";
  if (host.includes("airalo.com")) return "airalo";
  if (rel.includes("sponsored")) return host || "sponsored";
  return "";
}

function cleanPath(url: URL) {
  return `${url.pathname}${url.search || ""}`;
}

function getBookingEventName(type: string) {
  if (type === "flight") return "booking_flight_click";
  if (type === "hotel") return "booking_hotel_click";
  if (type === "activity") return "booking_activity_click";
  return "";
}

export default function LinkClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      if (typeof window.gtag !== "function") return;

      const rawHref = link.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) {
        return;
      }

      let url: URL;
      try {
        url = new URL(rawHref, window.location.href);
      } catch {
        return;
      }

      const rel = link.getAttribute("rel") || "";
      const isExternal = url.origin !== window.location.origin;
      const partner = getPartner(url, rel);
      const bookingType = link.dataset.bookingType || "";
      const bookingEventName = getBookingEventName(bookingType);
      const isBookingCta =
        url.pathname.includes("/destination/nyc/booking") ||
        url.searchParams.has("from") ||
        link.dataset.track === "booking_cta";

      const params = {
        link_url: url.href,
        link_path: cleanPath(url),
        link_text: (link.textContent || "").trim().slice(0, 120),
        page_path: window.location.pathname,
        cta_label: link.dataset.ctaLabel || link.getAttribute("aria-label") || "",
        cta_variant: link.dataset.ctaVariant || "",
        cta_placement: link.dataset.ctaPlacement || "",
        source_page: url.searchParams.get("from") || "",
      };

      if (bookingEventName) {
        window.gtag("event", bookingEventName, {
          ...params,
          booking_type: bookingType,
          item_name: link.dataset.itemName || link.getAttribute("aria-label") || params.link_text,
          outbound_domain: isExternal ? url.hostname.replace(/^www\./, "") : "",
        });
        return;
      }

      if (partner) {
        window.gtag("event", "affiliate_click", {
          ...params,
          affiliate_partner: partner,
        });
        return;
      }

      if (isBookingCta) {
        window.gtag("event", "booking_cta_click", params);
        return;
      }

      if (isExternal) {
        window.gtag("event", "outbound_click", {
          ...params,
          outbound_domain: url.hostname.replace(/^www\./, ""),
        });
        return;
      }

      if (url.pathname.startsWith("/destination/")) {
        window.gtag("event", "internal_cta_click", params);
      }
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
