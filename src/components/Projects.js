import { styled } from "styled-components";
import Wrapper from "./UI/Wrapper";
import Heading from "./UI/Heading";
import ProjectCard from "./UI/ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "Fake Windows XP",
      description:
        "A recreation of Windows XP in your browser. Made with HTML, CSS, and vanilla JavaScript.",
      src: "fwindows.png",
      alt: "A screenshot of Fake Windows XP",
      repoLink: "https://github.com/kylelangille/windows-xp-v1",
      demoLink: "https://fwindows-xp.netlify.app/",
    },
  ];

  return (
    <Wrapper id="projects">
      <Heading>Projects</Heading>
      <ProjectContainer>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            src={project.src}
            alt={project.alt}
            repoLink={project.repoLink}
            demoLink={project.demoLink}
          />
        ))}
      </ProjectContainer>
    </Wrapper>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default Projects;
