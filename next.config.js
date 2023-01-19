/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PUBLIC_ENDPOINT1: "https://api.escuelajs.co/api/v1/",
    PUBLIC_ENDPOINT: "https://dummyjson.com/",
  },
};

module.exports = nextConfig;
