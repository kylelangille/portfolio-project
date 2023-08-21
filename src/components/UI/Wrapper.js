import { styled } from "styled-components";

const Wrapper = ({ children, id }) => {
  return <StyledWrapper id={id}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.section`
  display: block;
  width: 70%;
  margin: auto;
  margin-bottom: 5rem;
  padding: 0 20px;
`;

export default Wrapper;
