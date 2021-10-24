import Image from "next/image";
import mainBackground from "public/images/1900w-codeBigBackground.jpg";

export default function HomeBackground() {
  return (
    <div>
      <Image
        src={mainBackground}
        alt="Header Background"
        layout="fill"
        className="w-full h-full bg-cover"
      />
      <div className="align-middle">
        <h3 className="text-DEFAULT text-3xl text-center">
          WELCOME TO MY WEBSITE!
        </h3>
      </div>
    </div>
  );
}
