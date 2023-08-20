import { styled } from "styled-components";
import Wrapper from "./UI/Wrapper";
import Heading from "./UI/Heading";
import ProjectCard from "./UI/ProjectCard";
import Content from "./UI/Content";

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Page",
      description: "My portfolio page. Made with React and JavaScript.",
      src: "port.png",
      alt: "A screenshot of Kyle Langille's portfolio page",
      repoLink: "https://github.com/kylelangille/portfolio-project",
      demoLink: "https://google.com",
    },
    {
      title: "Fake Windows XP",
      description:
        "A recreation of Windows XP in your browser. Made with HTML, CSS, and vanilla JavaScript.",
      src: "fwin.png",
      alt: "A screenshot of Fake Windows XP",
      repoLink: "https://github.com/kylelangille/windows-xp-v1",
      demoLink: "https://fwindows-xp.netlify.app/",
    },
    {
      title: "Nietzsche Quote Generator",
      description:
        "A quote generator for Friedrich Nietzsche. Made with HTML, CSS, and vanilla JavaScript.",
      src: "quote-generator.png",
      alt: "A screenshot of Nietzsche Quote Generator",
      repoLink: "https://github.com/kylelangille/nietzsche-quote-generator",
      demoLink: "https://kylelangille.github.io/nietzsche-quote-generator/",
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
      <Content>...and more to come!</Content>
    </Wrapper>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 1rem;
`;

export default Projects;
