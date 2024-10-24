module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://my-personal-website-jade.vercel.app",
  },
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
  experimental: {
    isrMemoryCacheSize: 0,
  },
};
