import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Vaibhav Gaikwad </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I am an aspiring Full Stack Web Developer,
            <br />
            My technical skillsets are primarily focused on the MERN stack and problem solving is my passion. I've got a curious mind and I'm a quick learner, hence I'm always looking for newer challenges. 
            
            <br />
            <br />
            Apart from coding, some of the other activities that I really enjoy are :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Music & Movies
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vaibhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
