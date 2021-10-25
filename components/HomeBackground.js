import Image from "next/image";
import mainBackground from "public/images/1900w-codeBigBackground.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  justify-content: center;
  margin-top: 30%;
  display: flex;
`;

const AnimatedText = styled.span`
  border-right: solid 3px rgba(0, 255, 0, 0.75);
  white-space: nowrap;
  overflow: hidden;
  font-family: "Source Code Pro", monospace;
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.7);
  animation: animated-text 4s steps(29, end) 1s 1 normal both,
    animated-cursor 600ms steps(29, end) infinite;

  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes animated-cursor {
    from {
      border-right-color: rgba(0, 255, 0, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`;

export default function HomeBackground() {
  return (
    <section className="flex flex-col items-center">
      <Wrapper>
        <AnimatedText className="tracking-wide">
          WELCOME TO MY WEBSITE!
        </AnimatedText>
      </Wrapper>
      <Image
        src={mainBackground}
        alt="Header Background"
        layout="fill"
        className="bg-cover"
      />
    </section>
  );
}
