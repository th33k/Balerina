import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import charactor from "../../../public/girl-base.png";

const About = () => {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col>
            <div>
              <div className="logo">
                <span style={{ color: "black" }}>Home</span>
                <span style={{ color: "green" }}>Servo</span>
              </div>
              <div className="charactor">
                <img src={charactor} alt="Character Image" />
              </div>
            </div>
          </Col>
          <Col>
            <h2>Use cases</h2>
            <p>UI design</p>
            <p>UX design</p>
            <p>Wireframing</p>
            <p>Diagramming</p>
            <p>Brainstorming</p>
            <p>Online whiteboard</p>
            <p>Team collaboration</p>
          </Col>
          <Col>
          <h2>Use cases</h2>
            <p>UI design</p>
            <p>UX design</p>
            <p>Wireframing</p>
            <p>Diagramming</p>
            <p>Brainstorming</p>
            <p>Online whiteboard</p>
            <p>Team collaboration</p></Col>
          <Col>Social links</Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
