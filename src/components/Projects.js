import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
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
import { AwardFill } from "react-bootstrap-icons";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-bootstrap/Carousel";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div>
                <h2>Projects</h2>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Store</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Back-office</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Blog app</Nav.Link>
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
                                  alt="img"
                                />
                                <Carousel.Caption></Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img src={registre} alt="img" />
                                <Carousel.Caption></Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  src={shop}
                                  className="carousel-img"
                                  alt="img"
                                />
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  src={grid}
                                  className="carousel-img"
                                  alt="img"
                                />
                                <Carousel.Caption></Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  src={home}
                                  className="carousel-img"
                                  alt="img"
                                />
                                <Carousel.Caption></Carousel.Caption>
                              </Carousel.Item>
                            </Carousel>
                          </div>
                          <div className="col-md-5 d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between">
                              <h4>Fonctionnalities : </h4>
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
                              <AwardFill color="#168bf7" /> Technologies Used :{" "}
                              <br /> React , Node, ExpressJs , MongoDb ,
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
                                <img
                                  src={logout}
                                  className="carousel-img"
                                  alt="img"
                                />
                                <Carousel.Caption></Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  src={dashbord}
                                  alt="img"
                                  className="carousel-img"
                                />
                                <Carousel.Caption></Carousel.Caption>
                              </Carousel.Item>

                              <Carousel.Item>
                                <img
                                  src={products}
                                  alt="img"
                                  className="carousel-img"
                                />
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  src={DarkMode}
                                  alt="img"
                                  className="carousel-img"
                                />
                                <Carousel.Caption></Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  src={newUser}
                                  className="carousel-img"
                                  alt="img"
                                />
                                <Carousel.Caption></Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  src={userProfil}
                                  className="carousel-img"
                                  alt="img"
                                />
                                <Carousel.Caption></Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  src={orders}
                                  className="carousel-img"
                                  alt="img"
                                />
                                <Carousel.Caption></Carousel.Caption>
                              </Carousel.Item>
                            </Carousel>
                          </div>
                          <div className="col-md-5 d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between">
                              <h4>Fonctionnalities : </h4>
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
                              <AwardFill color="#168bf7" /> Technologies Used :{" "}
                              <br /> React , Node, ExpressJs , MongoDb ,
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
                              alt="img"
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
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img" />
    </section>
  );
};
