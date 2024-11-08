// Import your Client Component
import { Qualification } from "@/utils/types/types";
import HomePage from "./home-page";
import client from "@/lib/sanity";

// This will not allow me to use a constant from utils. It throws an error that the value must be statically analyzable
// 86400 = seconds in a day
export const revalidate = 86_400;

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
