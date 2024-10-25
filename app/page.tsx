// Import your Client Component
import { Qualification } from "@/utils/types/types";
import HomePage from "./home-page";
import client from "@/lib/sanity";

async function getQualifications() {
  const qualificationsPreviewQuery = `*[_type == "qualification"] | order(order)`;
  const qualifications: Qualification[] = await client.fetch(
    qualificationsPreviewQuery,
  );
  return qualifications;
}

export default async function Page() {
  const qualifications = await getQualifications();
  return <HomePage qualifications={qualifications} />;
}
