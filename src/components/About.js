import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div>
        <h2>About</h2>
        <p>
          I am web developer who is passionate about life-long learning,
          building things, and solving intricate problems.
        </p>
        <br />
        <p>
          Before diving into web development, I worked in the non-profit sector
          where I had the privilege of actively supporting causes that deeply
          resonate with me. This experience not only fueled my passion for
          making a positive impact but also honed my skills in communication,
          collaboration, and adaptability.
        </p>
        <br />
        <p>
          With a background in English Literature and Philosophy, I have
          developed a unique lens through which I approach my work: the ability
          to fuse creativity with analytical thinking, resulting in digital
          solutions that are not only functional but also aesthetically
          engaging.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  margin: auto;
`;

export default About;
