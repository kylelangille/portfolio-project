import { styled } from "styled-components";
import Wrapper from "./UI/Wrapper";

const Contact = () => {
  return (
    <Wrapper>
      <section id="contact">
        <h2>Contact</h2>
        <p>Have a question? Want to work with me?</p>
        <a href="mailto:kyle.a.langille@gmail.com">
          <Button>Email me!</Button>
        </a>
      </section>
    </Wrapper>
  );
};

const Button = styled.button`
  width: 10rem;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  color: var(--darkest);
  background: var(--lightest);
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  margin-top: 2rem;

  &:hover {
    color: var(--lightest);
    background: var(--darkest);
    transform: scale(1.1);
  }
`;

export default Contact;
