/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media2.dev.to", "cdn.hashnode.com"],
  },
  env: {
    JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  },
};

module.exports = nextConfig;
