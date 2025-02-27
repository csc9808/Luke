import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai"; 
import pdf from "../../Assets/../Assets/Seong Chan Cho_Resume.pdf";
import { companies } from "../../utils/companies";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading">
          <strong className="purple">CV</strong>
        </h1>
        <Row className="resume">
          <h2 className="purple" style={{ textAlign: "left", position: "sticky", width: '100%' }}>
            Work Experience
          </h2>
          <br />
          {companies.map((company, index) => (
            <div key={index} className="resume-item-container" style={{ display: 'flex', width: '100%' }}>
              <div style={{ flex: '3', textAlign: "left", paddingTop: '0', alignItems: 'flex-start' }}>
                <img className="resume-company-logo" src={company.logo} />
                <a href={company.url} target="_blank" className="resume-item">{company.name}</a>
                <br />
                <b className="resume-work-title">{company.title}</b>
                <br />
                <b className="resume-work-date">{company.date}</b>
                <br />
              </div>
              <div style={{ flex: '7', textAlign: "left", paddingTop: '' }}>
                <ul>
                  {company.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
