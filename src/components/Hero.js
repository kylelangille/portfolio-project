import { styled } from "styled-components";
import Wrapper from "./UI/Wrapper";

const Hero = () => {
  return (
    <Wrapper id="hero">
      <SubWrapper>
        <HeroImg
          src="moi-crop.jpg"
          alt="Kyle Langille standing on a wharf with an old fishing community in the background"
        />
        <Content>
          <Heading>Hi, I'm Kyle!</Heading>
          <SubHeading>
            A Web Developer based in St. John's, Newfoundland
          </SubHeading>
        </Content>
      </SubWrapper>
    </Wrapper>
  );
};

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  @media (max-width: 560px) {
    flex-direction: column;
    justify-content: center;
    gap: 100px;
  }
`;

const HeroImg = styled.img`
  max-width: 25rem;
  max-height: 25rem;
  border-radius: 50%;

  @media (max-width: 820px) {
    max-width: 15rem;
    max-height: 15rem;
  }
`;

const Heading = styled.h1`
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
    margin-left: 20%;
  }
`;

const SubHeading = styled.h2`
  color: var(--lightest);
  font-size: 2.2rem;

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
