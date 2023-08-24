import { styled } from "styled-components";
import Wrapper from "./UI/Wrapper";
import Heading from "./UI/Heading";
import Content from "./UI/Content";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Heading>Contact</Heading>
      <Content>Have a question? Want to work with me?</Content>
      <Content>
        <a href="mailto:kyle.a.langille@gmail.com">
          <Button>Email me!</Button>
        </a>
      </Content>
    </Wrapper>
  );
};

const Button = styled.button`
  width: 10rem;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.buttonText};
  background: ${({ theme }) => theme.button};
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  margin-top: 2rem;
  font-size: 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.buttonText};
    transform: scale(1.1);
  }
`;

export default Contact;
