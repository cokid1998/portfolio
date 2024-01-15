/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://cokid1998.github.io/portfolio"
      : "",
};

module.exports = nextConfig;
