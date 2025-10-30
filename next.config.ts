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
      script-src 'self'
        https://www.googletagmanager.com
        https://www.google-analytics.com
        'sha256-dj8U3DHIoYgqto74jrgiN/gt4JUGBkkmPMdLxxCuZ6c=';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;
      frame-src 'none';
    `.replace(/\s{2,}/g, " ").trim(),
          },
          
        ],
      },
    ];
  },
};

export default nextConfig;
