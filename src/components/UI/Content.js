import { styled } from "styled-components";

const Content = ({ children }) => {
  return <Text>{children}</Text>;
};

const Text = styled.p`
  color: var(--lightest);
  font-size: 1.2rem;
  align-self: flex-start;
`;

export default Content;
