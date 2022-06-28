import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <span class="badge badge-primary font-weight-lighter ml-1">HTML</span> 
        <span class="badge badge-secondary font-weight-lighter ml-1 ">CSS</span> 
        <span class="badge badge-success font-weight-lighter ml-1">JavaScript</span> 
        <span class="badge badge-danger font-weight-lighter ml-1">Node.JS</span> 
        <span class="badge badge-info font-weight-lighter ml-1">Express</span>  */}

        <Button
          variant="primary "
          href={props.link}
          target="_blank"
          className="ml-2 mt-4"
        >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Code"}
        </Button>

        <Button
          variant="primary "
          href={props.link1}
          target="_blank"
          className="ml-4 mt-4"
        >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
