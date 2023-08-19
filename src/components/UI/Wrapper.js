import { styled } from "styled-components";

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 5rem;
`;

export default Wrapper;
