/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://cokid1998.github.io/portfolio"
      : "",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
