/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "192.168.1.12"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ap-south-1.graphassets.com",
      },
    ],
  },
};

module.exports = nextConfig;
