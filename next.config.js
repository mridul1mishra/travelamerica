import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Tightened CSP and added the standard hardening headers (HSTS, X-Content-Type-Options,
// Referrer-Policy, Permissions-Policy). img-src now lists the hosts we actually use
// instead of wildcard `https:`, which previously allowed any HTTPS image host.
// Google AdSense / ad-serving hosts. Google does not publish a stable allowlist (its ad domains
// change over time), and its officially supported policy is a nonce-based strict CSP. Because
// this site already allows 'unsafe-inline' scripts, we allow the Google ad ecosystem by wildcard
// here instead. After AdSense approval, open a page that shows ads with DevTools open and look
// for "Refused to ..." CSP errors; add any host or 'unsafe-eval' it reports.
const googleAds = [
  "https://pagead2.googlesyndication.com",
  "https://*.googlesyndication.com",
  "https://*.doubleclick.net",
  "https://*.googleadservices.com",
  "https://*.adtrafficquality.google",
  "https://*.google.com",
  "https://*.gstatic.com",
].join(" ");

const csp = `
  default-src 'self';

  script-src
    'self'
    'unsafe-inline'
    https://challenges.cloudflare.com
    https://www.googletagmanager.com
    ${googleAds};

  style-src
    'self'
    'unsafe-inline'
    https://fonts.googleapis.com;

  img-src
    'self'
    data:
    https://www.travelsamericas.com
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://pics.avs.io
    https://media-cdn.tripadvisor.com
    https://dynamic-media-cdn.tripadvisor.com
    https://*.googleusercontent.com
    https://wgt-prod-storage.s3.amazonaws.com
    ${googleAds};

  font-src
    'self'
    https://fonts.gstatic.com;

  connect-src
    'self'
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://sentry.avs.io
    ${googleAds};

  frame-src
    https://challenges.cloudflare.com
    ${googleAds};
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ")
  .trim();

// NOTE: redirects for the NYC migration (/majorcities/newyork/* ->
// /destination/nyc/*) live in vercel.json, which is the single source of
// truth for redirects on this project. Don't add a redirects() here too —
// duplicating across both files causes confusion.
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
