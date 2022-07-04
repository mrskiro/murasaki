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
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
