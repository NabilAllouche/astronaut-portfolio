import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Maintenance from "../assets/img/Maintenance-bro.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import logout from "../assets/img/projects/Logout.png";
import DarkMode from "../assets/img/projects/DarkMode.png";
import products from "../assets/img/projects/ManageProducts.png";
import dashbord from "../assets/img/projects/dashbord.png";
import orders from "../assets/img/projects/orders.png";
import userProfil from "../assets/img/projects/userProfil.png";
import newUser from "../assets/img/projects/createNewUser.png";
import home from "../assets/img/projects/Home.png";
import grid from "../assets/img/projects/grid.png";
import shop from "../assets/img/projects/shop.png";
import registre from "../assets/img/projects/registre.png";
import featured from "../assets/img/projects/featured1.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { AwardFill, ArrowUpRightCircleFill } from "react-bootstrap-icons";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-bootstrap/Carousel";

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="tabs"
                      className="w-100 nav-pills mb-5 justify-content-center align-items-center flex-column flex-md-row"
                      id="pills-tab"
                    >
                      <Nav.Item className="nav-item">
                        <Nav.Link eventKey="first" className="">
                          E-commerce Store
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          E-commerce Back-Office
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Blog App</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-7">
                              <Carousel className="carousel-projects">
                                <Carousel.Item>
                                  <img
                                    src={featured}
                                    className="carousel-img"
                                  />
                                  <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img
                                    src={registre}
                                    className="carousel-img"
                                  />
                                  <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img src={shop} className="carousel-img" />
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img src={grid} className="carousel-img" />
                                  <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img src={home} className="carousel-img" />
                                  <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                              </Carousel>
                            </div>
                            <div className="col-md-5 d-flex flex-column gap-3">
                              <div className="d-flex justify-content-between">
                                <h4>Fonctionnalities : </h4>

                                <a href="#" className="project-link">
                                  {" "}
                                  Live Demo <ArrowUpRightCircleFill />
                                </a>
                              </div>
                              <span>
                                <AwardFill color="#168bf7" /> Secure Customer
                                Authentication
                              </span>
                              <span>
                                <AwardFill color="#168bf7" /> Browse products,
                                filtre and search for products , check out the
                                order , shoping cart and wish list
                              </span>
                              <span>
                                <AwardFill color="#168bf7" /> Customer Profile
                                Management
                              </span>
                              <span>
                                <AwardFill color="#168bf7" /> Technologies Used
                                : <br /> React , Node, ExpressJs , MongoDb ,
                                Shadcn/ui
                              </span>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-7">
                              <Carousel className="carousel-projects">
                                <Carousel.Item>
                                  <img src={logout} className="carousel-img" />
                                  <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img
                                    src={dashbord}
                                    className="carousel-img"
                                  />
                                  <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                  <img
                                    src={products}
                                    className="carousel-img"
                                  />
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img
                                    src={DarkMode}
                                    className="carousel-img"
                                  />
                                  <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img src={newUser} className="carousel-img" />
                                  <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img
                                    src={userProfil}
                                    className="carousel-img"
                                  />
                                  <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img src={orders} className="carousel-img" />
                                  <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                              </Carousel>
                            </div>
                            <div className="col-md-5 d-flex flex-column gap-3">
                              <div className="d-flex justify-content-between">
                                <h4>Fonctionnalities : </h4>

                                <a href="#" className="project-link">
                                  {" "}
                                  Live Demo <ArrowUpRightCircleFill />
                                </a>
                              </div>
                              <span>
                                <AwardFill color="#168bf7" /> Secure User
                                Authentication
                              </span>
                              <span>
                                <AwardFill color="#168bf7" /> Product, Order,
                                Review, Category, User, and Customer Management
                              </span>
                              <span>
                                <AwardFill color="#168bf7" /> User Profile
                                Management
                              </span>
                              <span>
                                <AwardFill color="#168bf7" /> Dark Mode
                              </span>
                              <span>
                                <AwardFill color="#168bf7" /> Technologies Used
                                : <br /> React , Node, ExpressJs , MongoDb ,
                                Shadcn/ui
                              </span>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6">
                              <img
                                src={Maintenance}
                                className="under-maintenance-img"
                              />
                            </div>
                            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                              <h1> Under Maintenance</h1>
                              <h4>Please check back later</h4>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
