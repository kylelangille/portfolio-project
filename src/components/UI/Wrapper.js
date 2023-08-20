import { styled } from "styled-components";

const Wrapper = ({ children, id }) => {
  return <StyledWrapper id={id}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.section`
  width: 70%;
  margin: auto;
  margin-bottom: 5rem;
`;

export default Wrapper;
