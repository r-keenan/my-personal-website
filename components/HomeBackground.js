import Image from "next/image";
import mainBackground from "public/images/1900w-codeBigBackground.jpg";

export default function HomeBackground() {
  return (
    <div>
      <Image src={mainBackground} alt="Header Background" layout="fill" />
    </div>
  );
}
