import Image from "next/image";
import mainBackground from "public/images/codeHeroImage.jpeg";
import styles from "./HomeBackground.module.css";

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
      <span>
        <p className="heroText break-words">WELCOME TO MY WEBSITE!</p>
      </span>
    </div>
  );
}
