import { useState, useEffect } from "react";
import { styled } from "styled-components";

const Hero = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <HeroWrapper id="hero">
      <HeroImg
        src="/assets/moi-crop.jpg"
        alt="Kyle Langille standing on a wharf with an old fishing community in the background"
      />
      <Content>
        <HeroHeading animationStarted={animationStarted}>
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

  @media (max-width: 560px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`;

const HeroImg = styled.img`
  max-width: 25rem;
  max-height: 25rem;
  border-radius: 50%;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 820px) {
    max-width: 15rem;
    max-height: 15rem;
  }
`;

const HeroHeading = styled.h1`
  font-size: 4rem;
  color: var(--light);
  margin-bottom: 1rem;
  width: 9.2ch;
  animation: typing 1s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;

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

  @media (max-width: 820px) {
    font-size: 2.2rem;
  }

  @media (max-width: 560px) {
    margin-left: 20px;
    align-self: center;
  }
`;

const SubHeading = styled.h2`
  color: var(--lightest);
  font-size: 2.2rem;
  width: 100%;

  @media (max-width: 820px) {
    font-size: 1.6rem;
  }

  @media (max-width: 775px) {
    font-size: 1.4rem;
  }

  @media (max-width: 560px) {
    text-align: center;
  }
`;

const Content = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`;

export default Hero;
