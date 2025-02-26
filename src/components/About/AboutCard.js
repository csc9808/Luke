import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Luke Cho </span>
            from <span className="purple"> Seoul, South Korea.</span>
            <br />
            I am currently employed as a <span className="purple">Infrastructure Engineer</span> at
            
            <br />
            <span className="purple">Hankook & Company ES America Corp</span> in Clarksville, TN.
            <br />
            <br />
            I have completed Computer Science at Calvin University in Grand Rapids, MI.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontSize: 17 }}>
            "Debugging is like eating your own cooking and wondering why it tastes weird."
          </p>
          <footer className="blockquote-footer">Luke</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
