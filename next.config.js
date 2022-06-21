/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [
    {
      source: "/",
      destination: "/root",
    },
  ],
  pageExtensions: ["page.tsx"],
}

module.exports = nextConfig
