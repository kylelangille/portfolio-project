import { styled } from "styled-components";

const Heading = ({ children }) => {
  return <Head>{children}</Head>;
};

const Head = styled.h2`
  color: var(--light);
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export default Heading;
