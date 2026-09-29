import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.static.dragonaere.com'
      },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/u/script.js',
        destination: 'https://analytics.andrewstill.cloud/script.js',
      },
      {
        source: '/u/api/send',
        destination: 'https://analytics.andrewstill.cloud/api/send',
      },
    ];
  },
}

module.exports = nextConfig;
