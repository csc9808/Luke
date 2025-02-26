import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Seong Chan Cho_Resume.pdf";
import Hankook from "../../Assets/hankook.svg";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
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
          <div className="col-lg-3 col-md-3">
            <li>
            <a href="https://www.hankookandcompany.com/en.do"><img src={Hankook} /></a>

            </li>
          </div>
          <b style={{ textAlign: "left", position: "sticky" }}>Hankook & Company ES America Corp</b>
          <b style={{ textAlign: "left", position: "sticky" }}>World Vision</b>
          <b style={{ textAlign: "left", position: "sticky" }}>SoftIn</b>
          <b style={{ textAlign: "left", position: "sticky" }}>ISU System</b>
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
