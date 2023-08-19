import { styled } from "styled-components";
import Wrapper from "./UI/Wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <section id="hero">
        <SubWrapper>
          <HeroImg
            src="moi-cropped.jpg"
            alt="Kyle Langille standing on a wharf with an old fishing community in the background"
          />
          <Content>
            <h1>Hi, I'm Kyle!</h1>
            <h2>A Web Developer based in St. John's, NL 🍁</h2>
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
  max-width: 30rem;
  max-height: 30rem;
  border-radius: 50%;
`;

const Content = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`;

export default Hero;
