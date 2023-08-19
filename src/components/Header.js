import { styled } from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <h2>Kyle Langille</h2>
        <NavList>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: #1e2022;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  color: var(--light);

  h2 {
    margin-left: 2rem;
  }
`;

const NavList = styled.ul`
  list-style-type: none;

  li {
    float: left;
    margin-right: 2rem;
  }
`;

export default Header;
