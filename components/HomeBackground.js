import Image from "next/image";
import mainBackground from "public/images/1900w-codeBigBackground.jpg";

export default function HomeBackground() {
  return (
    <section className="flex flex-col items-center">
      <div id="animatedHeroDivHeader">
        <span id="animatedHeroSpanHeader" className="tracking-wide">
          WELCOME TO MY WEBSITE!
        </span>
      </div>

      <Image
        src={mainBackground}
        alt="Header Background"
        layout="fill"
        className="bg-cover"
      />
    </section>
  );
}
