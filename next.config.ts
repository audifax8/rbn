import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'prod.fluidconfigure.com',
      'cdn-prod.fluidconfigure.com'
    ],
  },
  crossOrigin: 'anonymous',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
    ];
  }
};

export default nextConfig;
