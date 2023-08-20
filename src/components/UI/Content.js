import { styled } from "styled-components";

const Content = ({ children }) => {
  return <Text>{children}</Text>;
};

const Text = styled.p`
  color: var(--lightest);
`;

export default Content;
