import nodejs from "../assets/img/nodejs-logo.png";
import react from "../assets/img/React-icon.svg.png";
import express from "../assets/img/express-logo.png";
import mongodb from "../assets/img/mongodb-logo.png";
import redux from "../assets/img/redux-logo1.png";
import javascript from "../assets/img/JavaScript-logo.png";
import typescript from "../assets/img/Typescript-logo.png";
import java from "../assets/img/java.png";
import spring from "../assets/img/spring-logo.svg";
import angular from "../assets/img/Angular-logo.png";
import git from "../assets/img/Git-logo.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Proficient in the MERN stack and with basic knowledge in
                Java/Angular, <br></br>I offer a varied skill set that supports
                smooth development and collaboration.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={javascript} alt="skill" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="skill" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="skill" />
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <img src={express} alt="skill" />
                  <h5>Express Js</h5>
                </div>
                <div className="item">
                  <img src={react} alt="testing" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="testing" />
                  <h5>Node js</h5>
                </div>

                <div className="item">
                  <img src={redux} alt="skill" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={java} alt="skill" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={spring} alt="skill" />
                  <h5>Spring Boot</h5>
                </div>

                <div className="item">
                  <img src={angular} alt="skill" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={git} alt="skill" />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="skill" />
    </section>
  );
};
