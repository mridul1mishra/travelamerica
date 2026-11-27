import type { MetadataRoute } from "next";

// Dynamic robots.txt (replaces the 3-line static public/robots.txt).
// Disallows /api/ so smoke-test or future internal endpoints aren't crawled,
// and points to the dynamic sitemap. Add user-agent specific blocks here if you
// want to disable AI training crawlers (GPTBot, Google-Extended, CCBot, etc.).

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Amazonbot crawled hotel pages every few minutes and kept Neon awake.
        userAgent: "Amazonbot",
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://www.travelsamericas.com/sitemap.xml",
    host: "https://www.travelsamericas.com",
  };
}
