import { styled } from "styled-components";
import Wrapper from "./UI/Wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <section id="hero">
        <SubWrapper>
          <HeroImg
            src="moi-crop.jpg"
            alt="Kyle Langille standing on a wharf with an old fishing community in the background"
          />
          <Content>
            <Heading>Hi, I'm Kyle!</Heading>
            <SubHeading>A Web Developer based in St. John's, NL 🍁</SubHeading>
          </Content>
        </SubWrapper>
      </section>
    </Wrapper>
  );
};

const SubWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HeroImg = styled.img`
  max-width: 25rem;
  max-height: 25rem;
  border-radius: 50%;
`;

const Heading = styled.h1`
  font-size: 4rem;
  color: var(--light);
  margin-bottom: 1rem;

  width: 9ch;
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
`;

const SubHeading = styled.h2`
  color: var(--lightest);
  font-size: 2.2rem;
`;

const Content = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`;

export default Hero;
