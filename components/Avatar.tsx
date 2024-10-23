import Image from "next/legacy/image";
import avi from "public/images/myAvi.jpg";

export default function Avatar() {
  return (
    <>
      <Image
        src={avi}
        alt="me"
        height={40}
        width={40}
        className="rounded-full"
      />
    </>
  );
}
