module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://my-personal-website-jade.vercel.app",
  },
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
  baseUrl: ".",
  paths: {
    "@components/*": ["components/*"],
    "@config/*": ["config/*"],
  },
  experimental: {
    isrMemoryCacheSize: 0,
  },
};
