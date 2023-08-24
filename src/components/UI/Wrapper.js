import { styled } from "styled-components";

const Wrapper = ({ children, id }) => {
  return <StyledWrapper id={id}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: auto auto 5rem auto;
  padding: 0 20rem;

  @media (max-width: 1300px) {
    padding: 0 10rem;
  }

  @media (max-width: 800px) {
    padding: 0 5rem;
  }

  @media (max-width: 400px) {
    padding: 0 2rem;
  }
`;

export default Wrapper;
