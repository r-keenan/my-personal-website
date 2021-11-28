import Image from "next/image";
import aboutMePic2 from "public/images/meQuarterHeight.jpg";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:pt-56 lg:pb-72">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
          </div>
          <div className="relative mx-auto max-w-md px-10 py-4 sm:max-w-max sm:px-6 lg:px-16 lg:max-w-max lg:py-20">
            <div className="grid justify-items-center rounded-2xl shadow-xl overflow-hidden">
              <Image
                className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                src={aboutMePic2}
                alt="Me"
                priority={true}
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-dark font-extrabold tracking-tight sm:text-4xl">
              Ross Keenan
            </h2>
            <h3 className="text-2xl text-gray-dark font-bold tracking-tight pt-2 sm:text-2xl">
              Full Stack Developer
            </h3>
            <div className="mt-6 text-gray-medium space-y-6">
              <p className="text-base leading-7">
                I develop in everything from Content Management Systems (CMSs)
                to web sites and web apps. I am interested in everything from
                the hot, new JavaScript frameworks, to backend code, databases,
                and data engineering.
              </p>
              <p className="text-base leading-7">
                Feel free to reach out to me for any consultations or sites that
                you want to develop or update. I am not looking for full-time
                employment, but I am open to outside contract work. I am
                available hired for hourly or fixed-priced contracts.
              </p>
              <p className="text-base leading-7">
                <span>Let&apos;s make something great together!</span>
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="mt-10">
              <Link href="/contact">
                <a className="text-base font-medium text-blue-light">
                  {" "}
                  Reach out to me <span aria-hidden="true">&rarr;</span>{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
