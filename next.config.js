/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["http2.mlstatic.com"],
  },
};

module.exports = nextConfig
