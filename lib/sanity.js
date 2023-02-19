// /lib/sanity.js
import sanityClient from "@sanity/client";

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-02-19",
  ignoreBrowserTokenWarning: true,
});

export default client;
