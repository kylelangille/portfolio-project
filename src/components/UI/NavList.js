import { styled } from "styled-components";

const NavList = () => {
  return (
    <Nav>
      <li>
        <a href="#hero">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </Nav>
  );
};

const Nav = styled.ul`
  list-style-type: none;

  a {
    color: #ececec;
    text-decoration: none;
    transition: 0.2s all ease-in-out;
  }

  a:hover {
    color: #fff;
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

export default NavList;
