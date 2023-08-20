import { styled } from "styled-components";
import { Menu } from "./UI/Icons";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <h2>Kyle Langille</h2>
        <IconWrapper>
          <Menu />
        </IconWrapper>
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
  position: fixed;
  top: 0;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
  min-width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  color: var(--light);

  h2 {
    margin-left: 2rem;
    font-size: 2.2rem;
  }
`;

const IconWrapper = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    position: absolute;
    right: 20px;
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
    font-size: 1.2rem;

    @media (max-width: 800px) {
      display: none;
    }
  }

  li:hover {
    transform: scale(1.1);
  }
`;

export default Header;
