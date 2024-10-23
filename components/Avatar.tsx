import Image from "next/legacy/image";
import avi from "public/images/myAvi.jpg";

export default function Avatar() {
  return (
    <>
      <Image src={avi} alt="me" className="rounded-full" />
    </>
  );
}
