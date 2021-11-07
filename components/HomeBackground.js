import Image from "next/image";
import mainBackground from "public/images/codeHeroImage.jpeg";
import styles from "./HomeBackground.module.css";

export default function HomeBackground() {
  return (
    <div className="heroContainer">
      <span className="heroText">WELCOME TO MY WEBSITE!</span>
      <Image
        src={mainBackground}
        alt="Header Background"
        className="heroImage"
        layout="fill"
        priority
      />
    </div>
  );
}
