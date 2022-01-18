import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Development Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I've recently worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Myntra Clone"
              description="Focusing on NodeJs, ExpressJs & MongoDB, this clone of Myntra.com is developed primarily using EJS for smooth user experince."
              link="https://github.com/vaibhavjs/MyntraFullstackClone.git"
              link1="https://mysterious-depths-64439.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Drawing Application"
              description="Focusing on Vanilla Javascript + P5.js library, this drawing application replicates the the features of a classic drawing application - MS Paint."
              link="https://github.com/vaibhavjs/DrawingApplication.git"
              link1="https://focused-morse-d9cbf0.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
