import Image from "next/image";
import mainBackground from "public/images/1900w-codeBigBackground.jpg";
import styles from "./HomeBackground.module.css";

export default function HomeBackground() {
  return (
    <section className="block">
      <div className={styles.animatedHeroDivHeader}>
        <Image
          src={mainBackground}
          alt="Header Background"
          className={styles.heroImage}
          layout="responsive"
          priority
        />
        <div className={styles.animatedHeroSpanHeader}>
          WELCOME TO MY WEBSITE!
        </div>
      </div>
    </section>
  );
}
