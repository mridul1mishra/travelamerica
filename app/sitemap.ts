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
  { path: "/",                                                       priority: 1.0, changeFrequency: "weekly" },
  // destination/nyc tree
  { path: "/destination/nyc",                                        priority: 1.0, changeFrequency: "weekly" },
  { path: "/destination/nyc/solo-trip-to-nyc",                       priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/best-areas-to-stay",                     priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/nyc-safety-guide",                       priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/nyc-female-solo-travel-guide",           priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/neighborhood-guide",                     priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/subway-safety-guide",                    priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/nyc-subway-map",                         priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/things-to-do",                           priority: 0.9, changeFrequency: "weekly" },
  // majorcities hubs
  { path: "/destination/nyc",                                    priority: 0.9, changeFrequency: "weekly" },
  { path: "/majorcities/losangeles",                                 priority: 0.9, changeFrequency: "weekly" },
  { path: "/majorcities/lasvegas",                                   priority: 0.9, changeFrequency: "weekly" },
  { path: "/majorcities/orlando",                                    priority: 0.9, changeFrequency: "weekly" },
  // newyork sub-pages
  { path: "/destination/nyc/solo-itinerary",                     priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/food",                               priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/landmark",                           priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/group-dining",                       priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/group-travel",                       priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/group-itinerary",                    priority: 0.9, changeFrequency: "weekly" },
  { path: "/destination/nyc/group-landmarks",                    priority: 0.9, changeFrequency: "weekly" },
  // legal / about
  { path: "/about",                                                  priority: 0.4, changeFrequency: "yearly" },
  { path: "/privacy",                                                priority: 0.3, changeFrequency: "yearly" },
  { path: "/termsandcondition",                                      priority: 0.3, changeFrequency: "yearly" },
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
