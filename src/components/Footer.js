import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import { EnvelopeCheckFill } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="#home" className="logo">
              Nabil.Dev
            </a>
            <div className="mt-4">
              <a href="mailto: nabilallouche49@gmail.com" className="email">
                {" "}
                <EnvelopeCheckFill size={30} /> nabilallouche49@gmail.com{" "}
              </a>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/nabil-allouche/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://github.com/NabilAllouche"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
