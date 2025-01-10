import Image from "next/legacy/image";
import mainBackground from "public/images/codeHeroImage.jpeg";

export default function HomeBackground() {
  return (
    <div className="heroContainer">
      <span>
        <p className="heroText break-words">
          <span id="nvimText">nvim</span> my-personal-website
        </p>
      </span>
      <Image
        priority
        src={mainBackground}
        alt="Header Background"
        className="heroImage"
      />
    </div>
  );
}
