import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

import Hankook from "../../Assets/hankook.svg";
import WorldVision from "../../Assets/World Vision.png";
import Softin from "../../Assets/Softin.svg";
import ISU from "../../Assets/ISU.png";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading">
          <strong className="purple">CV</strong>
        </h1>
        <Row className="resume">
          <h2 style={{ textAlign: "left", position: "sticky" }} className="purple">
            Work Experience
          </h2>
          <br />
          
          <div className="resume-item-container" style={{ textAlign: "left" }}>
            <img className="resume-company-logo" src={Hankook} />
            <a href="https://www.hankookandcompany.com/en.do" target="_blank" className="resume-item">Hankook & Company ES America Corp</a>
          </div>
          
          <div className="resume-item-container" style={{ textAlign: "left" }}>
            <img className="resume-company-logo" src={WorldVision} />
            <a href="https://www.worldvision.org/" target="_blank" className="resume-item">World Vision</a>
          </div>
          
          <div className="resume-item-container" style={{ textAlign: "left" }}>
            <img className="resume-company-logo" src={Softin} />
            <a href="https://softin.co.kr/" target="_blank" className="resume-item">SoftIn</a>
          </div>
          
          <div className="resume-item-container" style={{ textAlign: "left" }}>
            <img className="resume-company-logo" src={ISU} />
            <a href="https://www.isusystem.com/eng/index.do" target="_blank" className="resume-item">ISU System</a>
          </div>
        </Row>
      </Container>

    </div>
  );
}

export default ResumeNew;
