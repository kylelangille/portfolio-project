import styled from "styled-components";

const DropdownNav = () => {
  return (
    <nav>
      <NavList>
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
      </NavList>
    </nav>
  );
};

const NavList = styled.ul`
  position: fixed;
  right: 0;
  top: 4rem;
  list-style-type: none;
  background: #1e2022;
  padding-right: 40px;
  text-align: left;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
  z-index: 9;
  border-bottom-left-radius: 12px;

  li {
    margin: 5px;
  }

  a {
    text-decoration: none;
    color: #ececec;
    font-size: 1.2rem;
    transition: 0.3s all ease-in-out;
  }

  a:hover {
    color: #fff;
  }
`;

export default DropdownNav;
