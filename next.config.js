/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.static.dragonaere.com'
      },
    ],
  },
  allowedDevOrigins: ['10.0.0.10'],
  poweredByHeader: false,
  reactStrictMode: true
}

module.exports = nextConfig;
