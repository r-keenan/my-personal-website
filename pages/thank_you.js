import Image from "next/image";
import thankYou from "@/public/images/thank_you.jpeg";

export default function ThankYou() {
  return (
    <div className="bg-white mt-10 flex items-center">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8 lg:py-20">
        <div className="my-10 sm:my-20 lg:my-10 lg:max-w-4xl">
          <Image
            className="object-cover rounded-md"
            src={thankYou}
            alt="Thank You"
            priority={true}
            width={657}
            height={305}
            layout="responsive"
          />
          <p className="text-center text-gray-medium mt-10">
            Thank you for filling out the form. I will be in contact with you in
            the next day or two.
          </p>
        </div>
      </div>
    </div>
  );
}
