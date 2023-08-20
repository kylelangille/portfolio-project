import { styled } from "styled-components";
import { GitHubIcon, LinkedInIcon } from "./UI/Icons";

const Footer = () => {
  return (
    <Foot>
      <Link
        href="https://github.com/kylelangille"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </Link>
      <Link
        href="https://www.linkedin.com/in/kyle-langille/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </Link>
    </Foot>
  );
};

const Foot = styled.footer`
  position: sticky;
  bottom: 0;
  margin: 0 auto;
  width: 7rem;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid var(--darkest);
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background: var(--light);
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
`;

const Link = styled.a`
  color: #000;
  padding: 5px 0;
`;

export default Footer;
