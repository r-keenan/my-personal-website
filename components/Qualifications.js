import { CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

const features = [
  {
    name: "Invite team members",
    description:
      "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
  },
  {
    name: "Notifications",
    description:
      "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
  },
  {
    name: "List view",
    description:
      "Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.",
  },
  {
    name: "Boards",
    description:
      "Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.",
  },
  {
    name: "Keyboard shortcuts",
    description:
      "Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.",
  },
  {
    name: "Reporting",
    description:
      "Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.",
  },
  {
    name: "Calendars",
    description:
      "Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.",
  },
  {
    name: "Mobile app",
    description:
      "Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.",
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
            Here is a quick overview of skills that I have acquired throughout
            my career.
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
            <Link href="/about_me">
              <a className="text-base font-medium text-blue-light">
                {" "}
                Check out the details about my skills{" "}
                <span aria-hidden="true">&rarr;</span>{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
