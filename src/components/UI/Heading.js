import { styled } from "styled-components";

const Heading = ({ children }) => {
  return <Head>{children}</Head>;
};

const Head = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  align-self: flex-start;
  color: ${({ theme }) => theme.headingText};
  text-shadow: 3px 1px 2px rgba(0, 0, 0, 1);

  @media (max-width: 400px) {
    font-size: 2.4rem;
  }
`;

export default Heading;
