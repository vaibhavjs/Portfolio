import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import chatify from "../../Assets/Projects/chatify.png";
import amazonClone from "../../Assets/amazonClone.png";
import foodDelivery from "../../Assets/foodDelivery.png";
import ecom from "../../Assets/ecom.png";

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
              imgPath={ecom}
              isBlog={false}
              title="E-com clothing store"
              description="A simple e-commerce clothing application created using ReactJs with simple but effective UI & UX."
              link="https://github.com/vaibhavjs/react-ecom-store.git"
              link1="https://gregarious-sprite-e48322.netlify.app/"
            />
          </Col>

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
              imgPath={amazonClone}
              isBlog={false}
              title="Amazon Clone"
              description="This clone of popular e-commerce website - amazon.com is created using ReactJS & includes all the basic features of an e-commerce website"
              link="https://github.com/vaibhavjs/clone-amazzon.git"
              link1="https://clone-amazzon.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodDelivery}
              isBlog={false}
              title="Food Delivery App"
              description="Developed using Redux + ReactJs, this food delivery application emulates the functionalities of popular indian food delivery applications."
              link="https://github.com/vaibhavjs/redux-food-delivery-app.git"
              link1="https://redux-food-delivery-app.vercel.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Drawing Application"
              description="Focusing on Vanilla Javascript + P5.js library, this drawing application replicates the the features of a classic drawing application - MS Paint."
              link="https://github.com/vaibhavjs/DrawingApp.git"
              link1="https://focused-morse-d9cbf0.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
