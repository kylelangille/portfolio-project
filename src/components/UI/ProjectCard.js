import { styled } from "styled-components";

const ProjectCard = ({ title, description, src, alt, repoLink, demoLink }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <p>{description}</p>
      <ProjectImg src={src} alt={alt} />
      <BtnContainer>
        <a href={repoLink} target="_blank" rel="noreferrer">
          View Code
        </a>
        <a href={demoLink} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </BtnContainer>
    </Card>
  );
};

const Card = styled.div`
  /* width: 22rem; */
  background: var(--light);
  border-radius: 12px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  color: var(--darkest);
  position: relative;

  a {
    color: var(--darkest);
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid var(--darkest);
    border-radius: 9px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    background: var(--darkest);
    color: var(--lightest);
    transform: scale(1.1);
  }

  p {
    width: 90%;
    text-align: center;
  }
`;

const ProjectImg = styled.img`
  max-width: 20rem;
  max-height: 20rem;
  border-radius: 9px;
  margin-bottom: 2.2rem;

  @media (max-width: 460px) {
    max-width: 15rem;
    max-height: 15rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 50px;
  position: absolute;
  bottom: -10px;
  margin-bottom: 1rem;
`;

export default ProjectCard;
