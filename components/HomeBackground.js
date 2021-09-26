import Image from "next/image";
import mainBackground from "../public/images/codeBigBackground.jpg";

export default function HomeBackground() {
  return (
    <div>
      <Image
        src={mainBackground}
        alt="Header Background"
        className="h-full w-full"
      />
    </div>
  );
}
