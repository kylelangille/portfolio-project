import { withBaseIcon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import { linkedin } from "react-icons-kit/icomoon/linkedin";
import { menu } from "react-icons-kit/icomoon/menu";

const IconContainer = withBaseIcon({ size: 24 });

export const GitHubIcon = () => <IconContainer icon={github} />;
export const LinkedInIcon = () => <IconContainer icon={linkedin} />;
export const Menu = () => <IconContainer icon={menu} />;
