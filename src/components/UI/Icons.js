import { withBaseIcon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import { linkedin } from "react-icons-kit/icomoon/linkedin";

const IconContainer = withBaseIcon({ size: 24 });

export const GitHubIcon = () => <IconContainer icon={github} />;
export const LinkedInIcon = () => <IconContainer icon={linkedin} />;
