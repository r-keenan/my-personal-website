import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2023-02-19",
  ignoreBrowserTokenWarning: true,
});

export default client;
