import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_R2_BUCKET_URL: process.env.NEXT_PUBLIC_R2_BUCKET_URL || 'https://pub-fce9260f19564ffe961e9921e4e8776b.r2.dev',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-fce9260f19564ffe961e9921e4e8776b.r2.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
