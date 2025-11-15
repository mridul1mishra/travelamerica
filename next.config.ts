import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // applies to all routes
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;
              frame-src 'none';
            `.replace(/\s{2,}/g, " ").trim(), // compact the header
          },
          
        ],
      },
      {
        source: "/data/corben-cdnfonts/:all*(ttf|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      }
    ];
  },
};

export default nextConfig;
