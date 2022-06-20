/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [
    {
      source: "/",
      destination: "/root",
    },
  ],
}

module.exports = nextConfig
