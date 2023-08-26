import { useState, useEffect } from "react";
import { styled } from "styled-components";

const Hero = (props) => {
  const [clickCount, setClickCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleClickCount = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const movementX = (mousePosition.x - window.innerWidth / 2) / 100;
  const movementY = (mousePosition.y - window.innerHeight / 2) / 100;

  const imgPosition = {
    transform: `translate(${movementX}px, ${movementY}px)`,
  };

  return (
    <HeroWrapper id="hero">
      <ImgContainer>
        <Blob
          src={
            props.theme === "dark"
              ? "/assets/blob.png"
              : "/assets/blobAccent.png"
          }
        />
        <HeroImg
          key={clickCount}
          src={
            clickCount < 5
              ? "/assets/headshot.jpg"
              : "/assets/handsome-crop.jpg"
          }
          alt="Headshot of Kyle Langille"
          onClick={handleClickCount}
          style={imgPosition}
        />
      </ImgContainer>
      <Content>
        <HeroHeading $animationStarted={props.animationStarted}>
          Hi, I'm Kyle!
        </HeroHeading>
        <SubHeading>
          A Web Developer based in St. John's, Newfoundland
        </SubHeading>
      </Content>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;

  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Blob = styled.img`
  z-index: -1;
  position: absolute;
  top: -1rem;
  left: -2rem;
  height: 25rem;
  width: 25rem;

  @media (max-width: 820px) {
    transform: rotate(270deg);
  }
`;

const HeroImg = styled.img`
  max-width: 20rem;
  max-height: 20rem;
  border-radius: 50%;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 820px) {
    max-width: 15rem;
    max-height: 15rem;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 1rem;
  width: 9.2ch;
  animation: ${(props) =>
    props.$animationStarted
      ? "typing 1s steps(22), blink 0.5s step-end infinite alternate"
      : "none"};
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  color: ${({ theme }) => theme.headingText};
  -webkit-text-stroke: 2px #000;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  @media (max-width: 1200px) {
    font-size: 2.6rem;
  }

  @media (max-width: 820px) {
    font-size: 2.2rem;
  }

  @media (max-width: 560px) {
    margin-left: 20px;
    align-self: center;
  }
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  width: 100%;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 820px) {
    font-size: 1.6rem;
  }

  @media (max-width: 560px) {
    text-align: center;
    font-size: 1.4rem;
  }
`;

const Content = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1050px) {
    align-items: center;
  }

  @media (max-width: 700px) {
    width: 20rem;
  }
`;

export default Hero;
