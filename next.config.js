/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "digitalmarketplace-production-80c2.up.railway.app",
      },
    ],
  },
};

module.exports = nextConfig;
