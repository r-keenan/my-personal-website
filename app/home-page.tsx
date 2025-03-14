"use client";

import HomeBackground from "@/components/HomeBackground";
import { Qualification } from "@/utils/types/types";
import { CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage({
  qualifications,
}: {
  qualifications: Qualification[];
}) {
  const router = useRouter();

  const handleMouseEnter = (url: string) => {
    // Prefetch URL on Mouser enter
    router.prefetch(url);
  };

  return (
    <>
      <HomeBackground />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-dark">
              Senior Software Consultant
            </h2>
            <p className="mt-4 text-lg text-gray-medium">
              Here is a quick overview of the skills that I have acquired
              throughout my career.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {qualifications.map((qualification: Qualification) => (
              <div key={qualification._id} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-blue-light"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-dark">
                    {qualification.category}
                  </p>
                </dt>

                <dd className="mt-2 ml-9 text-base text-gray-medium">
                  {qualification.description[0].children[0].text.toString()}
                </dd>
              </div>
            ))}
          </dl>
          <div className="grid content-center place-content-center mt-10">
            <div className="mt-10">
              <Link
                href="/skills"
                className="text-base font-medium text-blue-light"
                onMouseEnter={() => handleMouseEnter("/skills")}
                passHref
              >
                Check out the details of my skills
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
