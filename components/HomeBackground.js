import Image from "next/image";
import mainBackground from "public/images/codeHeroImage2kW.jpeg";

export default function HomeBackground() {
  return (
    <div className="heroContainer">
      <span>
        <p className="heroText break-words">WELCOME TO MY WEBSITE!</p>
      </span>
      <Image
        src={mainBackground}
        alt="Header Background"
        className="heroImage"
        priority
      />
    </div>
  );
}
