import Image from "next/legacy/image";
import avi from "public/images/myAvi.jpg";

export default function Avatar() {
  return (
    <>
      <Image
        src={avi}
        height="40px"
        width="40px"
        alt="me"
        className="rounded-full"
      />
    </>
  );
}
