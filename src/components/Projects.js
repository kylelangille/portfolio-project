import { styled } from "styled-components";
import Wrapper from "./UI/Wrapper";
import Heading from "./UI/Heading";
import ProjectCard from "./UI/ProjectCard";
import Content from "./UI/Content";
import { projectData } from "../projectData";

const Projects = () => {
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 1rem;
  align-self: flex-start;

  @media (max-width: 1110px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export default Projects;
