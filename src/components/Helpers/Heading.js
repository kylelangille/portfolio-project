import { styled } from "styled-components";

const Heading = ({ children }) => {
  return <Head>{children}</Head>;
};

const Head = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  align-self: flex-start;
  color: ${({ theme }) => theme.headingText};
  -webkit-text-stroke: 1px #000;
  -webkit-text-decoration: ${({ theme }) => theme.accent} double underline;
  text-decoration: ${({ theme }) => theme.accent} double underline;
  -webkit-text-underline-position: under;
  text-underline-position: under;

  @media (max-width: 400px) {
    font-size: 2.4rem;
  }
`;

export default Heading;
