import styled from "styled-components";
import Wrapper from "./UI/Wrapper";
import Heading from "./UI/Heading";
import Content from "./UI/Content";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const About = () => {
  const iconAttributes = { fontSize: "42px", color: "var(--lightest)" };

  return (
    <Wrapper id="about">
      <Heading>About me</Heading>
      <div>
        <Content>
          I am web developer who is passionate about life-long learning,
          building things, and solving intricate problems.
        </Content>
        <br />
        <Content>
          Before diving into web development, I worked in the non-profit sector
          where I had the privilege of actively supporting causes that deeply
          resonate with me. This experience not only fueled my passion for
          making a positive impact but also honed my skills in communication,
          collaboration, and adaptability.
        </Content>
        <br />
        <Content>
          With a background in English Literature and Philosophy, I have
          developed a unique lens through which I approach my work: the ability
          to fuse creativity with analytical thinking, resulting in digital
          solutions that are not only functional but also aesthetically
          engaging.
        </Content>
        <br />
      </div>
      <TechContainer>
        <h2>My Tech Stack:</h2>
        <IconContainer>
          <FaHtml5 style={iconAttributes} />
          <FaCss3 style={iconAttributes} />
          <FaJsSquare style={iconAttributes} />
          <FaReact style={iconAttributes} />
          <FaGitAlt style={iconAttributes} />
        </IconContainer>
      </TechContainer>
    </Wrapper>
  );
};

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  margin: 0 auto;

  h2 {
    color: var(--light);
    margin-right: 1rem;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    margin: 0;
  }
`;

export default About;
