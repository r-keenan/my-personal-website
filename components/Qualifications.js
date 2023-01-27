import { CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

const features = [
  {
    name: "Front End Development",
    description:
      "Working with straight HTML5 and CSS3, or a component based framework like React, Vue, or Angular.",
  },
  {
    name: "Backend Development",
    description:
      "Writing server side code to meet project and business requirements.",
  },
  {
    name: "Data Engineering",
    description:
      "Cleaning and transforming data from sources like CSV, Excel, or PDF files. Scripting clean data into the database.",
  },
  {
    name: "API/API Integrations",
    description:
      "Developing APIs or API Integration solutions. Staying up to date on API documentation changes.",
  },
  {
    name: "Database Development",
    description: "Creating and updating tables. Scripting in data when needed.",
  },
  {
    name: "Cloud Providers",
    description:
      "Working with large ecosystems like AWS or smaller ones such as Digital Ocean or Vercel.",
  },
  {
    name: "Programming Methodologies",
    description: "Working primarily in Agile or Waterfall environments.",
  },
  {
    name: "Platform Development",
    description: "Working with new and older Content Management Systems.",
  },
];

export default function Qualifications() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-dark">
            Full Stack Developer
          </h2>
          <p className="mt-4 text-lg text-gray-medium">
            Here is a quick overview of the skills that I have acquired
            throughout my career.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-blue-light"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-dark">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-medium">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
        <div className="grid content-center place-content-center mt-10">
          <div className="mt-10">
            <Link href="/skills" legacyBehavior>
              <a className="text-base font-medium text-blue-light">
                {" "}
                Check out the details of my skills{" "}
                <span aria-hidden="true">&rarr;</span>{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
