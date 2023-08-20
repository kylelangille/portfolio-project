import { styled } from "styled-components";

const ProjectCard = ({ title, description, src, alt, repoLink, demoLink }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <p>{description}</p>
      <ProjectImg src={src} alt={alt} />
      <BtnContainer>
        <a href={repoLink}>View Code</a>

        <a href={demoLink}>Demo</a>
      </BtnContainer>
    </Card>
  );
};

const Card = styled.div`
  width: 30rem;
  background: var(--light);
  border-radius: 12px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;

  a {
    color: var(--darkest);
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid var(--darkest);
    border-radius: 9px;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    background: var(--darkest);
    color: var(--lightest);
    transform: scale(1.1);
  }
`;

const ProjectImg = styled.img`
  max-width: 25rem;
  max-height: 25rem;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export default ProjectCard;
