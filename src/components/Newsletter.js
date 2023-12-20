import { useState, useEffect } from "react";
import { Col, Row, Alert, Button } from "react-bootstrap";
import { EnvelopeFill, Linkedin, Github } from "react-bootstrap-icons";
import url from "../assets/nabilAllouche-resume.pdf";

export const Newsletter = ({ status, message, onValidated }) => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "nabil-allouche-resume";
        alink.click();
      });
    });
  };

  return (
    <Col lg={12}>
      <div className=" newsletter-bx wow slideInUp  ">
        <h2 className="mb-5 text-center">Contact</h2>
        <div className="d-flex justify-content-evenly ">
          <div>
            <EnvelopeFill size={36} />
            <span className="email"> nabilallouche49@gmail.com</span>
          </div>
          <div>
            <a href="" _blank>
              <Github size={36} color="black" />
            </a>{" "}
            <a href="" _blank>
              <Linkedin size={36} />
            </a>{" "}
            <Button
              className="btn btn-outline-dark text-white border-0"
              onClick={onButtonClick}
            >
              Download resume
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
