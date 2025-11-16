import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Fix workspace root warning
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
};

export default nextConfig;
