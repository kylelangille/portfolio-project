import { useState } from "react";
import { styled } from "styled-components";
import { Menu, Cross } from "./UI/Icons";
import NavList from "./UI/NavList";
import DropdownNav from "./UI/DropdownNav";
import ThemeToggle from "./UI/ThemeToggle";

const Header = ({ onClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Nav>
          <h2>Kyle Langille</h2>
          <NavWrapper>
            <IconWrapper
              onClick={dropdownOpen ? handleDropdownClose : handleDropdownOpen}
            >
              {dropdownOpen ? <Cross /> : <Menu />}
            </IconWrapper>
            <NavList />
            <ThemeToggle onClick={onClick} />
          </NavWrapper>
        </Nav>
      </Wrapper>
      <IconWrapper>{dropdownOpen && <DropdownNav />}</IconWrapper>
    </>
  );
};

const Wrapper = styled.header`
  background: #1e2022;
  position: fixed;
  top: 0;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
  min-width: 100%;
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  h2 {
    margin-left: 2rem;
    font-size: 2.2rem;
    text-shadow: 3px 1px 2px rgba(0, 0, 0, 1);
    color: #fff;

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }

    @media (max-width: 400px) {
      font-size: 1.6rem;
    }
  }
`;

const NavWrapper = styled.div`
  display: flex;
  margin-right: 2rem;

  @media (max-width: 800px) {
    margin-right: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    position: absolute;
    right: 6rem;
  }

  @media (max-width: 400px) {
    right: 5rem;
  }
`;

export default Header;
