import styled from "styled-components";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const ThemeToggle = ({ onClick }) => {
  return (
    <>
      <Input type="checkbox" id="toggle" onClick={onClick} />
      <Label htmlFor="toggle">
        <FaSun style={{ color: "#f39c12" }} />
        <FaMoon style={{ color: " #f1c40f" }} />
        <Ball />
      </Label>
    </>
  );
};

const Label = styled.label`
  background-color: #333;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ball = styled.span`
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${Label} ${Ball} {
    transform: translateX(24px);
  }
`;

export default ThemeToggle;
