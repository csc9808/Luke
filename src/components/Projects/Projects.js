import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Disaster from "../../Assets/Projects/disaster.png";
import Coffee from "../../Assets/Projects/coffee.jpg";
import Angrynorman from "../../Assets/Projects/angrynorman.png";
import Solution from "../../Assets/Projects/Solution.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Solution} // Corrected variable name to match import
              isBlog={false}
              title="Accounting System Solution" 
              description="This project was built as a solution to a real-world problem. It was designed to help small businesses manage their finances more efficiently."
              ghLink="https://github.com/csc9808/Alpha?tab=readme-ov-file"
              demoLink = "https://lukecho.vercel.app/dashboard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Disaster} // Corrected variable name to match import
              isBlog={false}
              title="Disaster AI"
              description="The purpose of this project was to build a model that determines whether or not the given tweet indicates a real disaster."
              ghLink="https://github.com/csc9808/Machine-Learning/tree/main/Kaggle%20Competition"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coffee}
              isBlog={false}
              title="Coffee App"
              description="App created using react-native to simulate remote ordering app for coffee shop"
              ghLink="https://github.com/calvin-cs262-fall2022-teamG/Client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Angrynorman}
              isBlog={false}
              title="Mini Game:Run from Professor"
              description="Angular web-based mini game created in light of Prof.Norman"
              ghLink="https://github.com/RunFromNorman/AngryNorman?tab=readme-ov-file"
              demoLink="https://angrynorman-1bd08.web.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
