import Image from "next/image";

export default function Avatar(props) {
  return (
    <>
      <Image
        className="inline-block h-6 w-6 rounded-md"
        src={props.source}
        alt="me"
      />
    </>
  );
}
