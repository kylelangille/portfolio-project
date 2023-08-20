import { styled } from "styled-components";
import Wrapper from "./UI/Wrapper";
import Heading from "./UI/Heading";
import Content from "./UI/Content";

const About = () => {
  return (
    <Wrapper>
      <section id="about">
        <Heading>About me</Heading>
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
      </section>
    </Wrapper>
  );
};

export default About;
