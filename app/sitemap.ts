import type { MetadataRoute } from "next";

// Dynamic sitemap (replaces the static public/sitemap.xml that had no <lastmod>).
// Next serves this at /sitemap.xml automatically.
//
// To add a route: add it to the array. `lastModified` defaults to "now" — when a
// page actually changes, bump its entry's date (or wire to filesystem mtime if you
// want this fully automatic). Priority/changeFrequency are advisory hints to crawlers.

const SITE = "https://www.travelsamericas.com";

type Entry = {
  path: string;
  priority?: number;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ROUTES: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  // ── NYC ──────────────────────────────────────────────────────────────────
  { path: "/destination/nyc",                              priority: 1.0, changeFrequency: "weekly" },
  { path: "/destination/nyc/solo-trip-to-nyc",             priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/best-areas-to-stay",           priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/nyc-safety-guide",             priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/nyc-female-solo-travel-guide", priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/neighborhood-guide",           priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/subway-safety-guide",          priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/nyc-subway-map",               priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/things-to-do",                 priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/solo-itinerary",               priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/food",                         priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/landmark",                     priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/group-travel",                 priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/booking",                      priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/is-nyc-safe-at-night",         priority: 0.9, changeFrequency: "weekly" },

  // ── Los Angeles ───────────────────────────────────────────────────────────
  { path: "/destination/la",                               priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/bookings",                      priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/best-areas-to-stay",            priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/food",                          priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/group-travel",                  priority: 0.8, changeFrequency: "weekly" },
  { path: "/destination/la/is-la-safe-at-night",           priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/itinerary",                     priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/la-female-solo-travel-guide",   priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/la-metro-map",                  priority: 0.8, changeFrequency: "weekly" },
  { path: "/destination/la/landmark",                      priority: 0.8, changeFrequency: "weekly" },
  { path: "/destination/la/metro-safety-guide",            priority: 0.8, changeFrequency: "weekly" },
  { path: "/destination/la/neighborhood-guide",            priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/safety-guide",                  priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/solo-itinerary",                priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/solo-trip-to-la",               priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/la/things-to-do",                  priority: 0.8, changeFrequency: "weekly" },

  // ── Las Vegas ─────────────────────────────────────────────────────────────
  { path: "/destination/lasvegas",                                    priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/bookings",                           priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/best-areas-to-stay",                 priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/food",                               priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/group-travel",                       priority: 0.8, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/is-lasvegas-safe-at-night",          priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/itinerary",                          priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/landmark",                           priority: 0.8, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/lasvegas-female-solo-travel-guide",  priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/neighborhood-guide",                 priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/safety-guide",                       priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/solo-itinerary",                     priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/solo-trip-to-lasvegas",              priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/lasvegas/things-to-do",                       priority: 0.8, changeFrequency: "weekly" },

  // ── Orlando ───────────────────────────────────────────────────────────────
  { path: "/destination/orlando",                                     priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/bookings",                            priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/best-areas-to-stay",                  priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/food",                                priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/group-travel",                        priority: 0.8, changeFrequency: "weekly" },
  { path: "/destination/orlando/is-orlando-safe-at-night",            priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/itinerary",                           priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/landmark",                            priority: 0.8, changeFrequency: "weekly" },
  { path: "/destination/orlando/neighborhood-guide",                  priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/orlando-female-solo-travel-guide",    priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/safety-guide",                        priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/solo-itinerary",                      priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/solo-trip-to-orlando",                priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/orlando/things-to-do",                        priority: 0.8, changeFrequency: "weekly" },

  // ── Legal / About ─────────────────────────────────────────────────────────
  { path: "/about",            priority: 0.4, changeFrequency: "yearly" },
  { path: "/privacy",          priority: 0.3, changeFrequency: "yearly" },
  { path: "/termsandcondition", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
