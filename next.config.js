const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://my-personal-website-jade.vercel.app",
  },
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
