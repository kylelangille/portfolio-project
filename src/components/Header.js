import { styled } from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <h2>Kyle Langille</h2>
        <NavList>
          <a href="#hero">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: #1e2022;
  position: sticky;
  top: 0;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
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

  a {
    color: var(--light);
  }

  li {
    float: left;
    margin-right: 2rem;
    transition: 0.2s all ease-in-out;
  }

  li:hover {
    transform: scale(1.1);
  }
`;

export default Header;
