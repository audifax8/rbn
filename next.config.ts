import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['prod.fluidconfigure.com'],
  },
  crossOrigin: 'anonymous'
};

export default nextConfig;
