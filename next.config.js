/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "imgix",
    path: "https://cokid1998.github.io/portfolio/",
  },
};

module.exports = nextConfig;
