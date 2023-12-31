import { styled } from "styled-components";
import Wrapper from "../Helpers/Wrapper";
import Heading from "../Helpers/Heading";
import ProjectCard from "../UI/ProjectCard";
import Content from "../Helpers/Content";
import { projectData } from "../../projectData";

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
  max-width: 100%;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export default Projects;
