import Image from "next/image";
import mainBackground from "public/images/1900w-codeBigBackground.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export default function HomeBackground() {
  return (
    <section className="flex flex-col items-center pt-10">
      <Wrapper>
        <h3 className="text-3xl text-gray-lighter">WELCOME TO MY WEBSITE!</h3>
      </Wrapper>

      <Image
        src={mainBackground}
        alt="Header Background"
        className="h-full bg-cover"
      />
    </section>
  );
}
