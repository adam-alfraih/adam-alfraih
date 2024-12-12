import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import project1 from "../assets/img/estoreImg.png"
import project2 from "../assets/img/clubkidImg.png"
import project3 from "../assets/img/jsdjImg.png"
import project4 from "../assets/img/advancedcsswebsite.png"
import project5 from "../assets/img/ralphImg.png"
import project6 from "../assets/img/tipsyImg.png"
export const Projects = () => {
    const projects = [
        {
            title: "eStore",
            description: "A React based E-commerce web store",
            imgUrl: project1,
        },
        {
            title: "clubKid",
            description: "A full-stack CRUD web application",
            imgUrl: project2,
        },
        {
            title: "JS DJ",
            description: "A JavaScript browser game",
            imgUrl: project3,
        },
        {
            title: "Advanced CSS Website",
            description: "An advanced CSS website",
            imgUrl: project4,
        },
        {
            title: "Website Wireframe",
            description: "A Figma Wireframe",
            imgUrl: project5,
        },
        {
            title: "Tipsy Bear Berlin",
            description: "An event platform",
            imgUrl: project6,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            I love building sample projects to keep my skills fresh.
                            <br />
                            Here are some of my experiments.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            <Col sml={6} md={4}>
                                                <a href="https://tipsybearberlin.com/" target="_blank" rel="noreferrer">
                                                    <div className="proj-imgbx">
                                                        <img src={project6} alt="" />
                                                        <div className="proj-txtx">
                                                            <h4>Tipsy Bear Berlin</h4>
                                                            <span>Designed and implemented select pages for the Tipsy Bear Berlin website using Semplice on Wordpress, a no-code drag-and-drop platform.</span>
                                                            <br /><br />
                                                            <span>Click to see Tipsybearberlin.com</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Col>
                                        }
                                        {
                                            <Col sml={6} md={4}>
                                                <a href="https://github.com/adam-alfraih/advanced-css-website" target="_blank" rel="noreferrer">
                                                    <div className="proj-imgbx">
                                                        <img src={project4} alt="" />
                                                        <div className="proj-txtx">
                                                            <h4>Advanced CSS Webiste</h4>
                                                            <span>A website built using advanced CSS and Sass.</span>
                                                            <br /><br />
                                                            <span>Click to see GitHub repo. URL is in the GitHub bio.</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Col>
                                        }
                                        {
                                            <Col sml={6} md={4}>
                                                <a href="https://github.com/adam-alfraih/eStore-finalproject" target="_blank" rel="noreferrer">
                                                    <div className="proj-imgbx">
                                                        <img src={project1} alt="" />
                                                        <div className="proj-txtx">
                                                            <h4>eStore</h4>
                                                            <span>A responsive fullstack React based web app that mimics an E-commerce web store using an API. This is a CRUD application with authentification.</span>
                                                            <br /><br />
                                                            <span>Click to see GitHub repo. URL is in the GitHub bio.</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Col>
                                        }
                                        {
                                            <Col sml={6} md={4}>
                                                <a href="https://www.figma.com/file/WhZHib5DMYYz3jvoJmeldq/Project%3A-Ralph-Remstedt-Wireframe-v1.0?type=design&node-id=0%3A1&mode=design&t=DZtAncHrqbLO6dSW-1" target="_blank" rel="noreferrer">
                                                    <div className="proj-imgbx">
                                                        <img src={project5} alt="" />
                                                        <div className="proj-txtx">
                                                            <h4>Website Wireframe</h4>
                                                            <span>Designed a user-friendly wireframe to streamline website navigation and blueprint the visual layout of the live website.
                                                            </span>
                                                            <br /><br />
                                                            <span>Click to see the figma project</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Col>
                                        }
                                        {/* { 
                                            <Col sml={6} md={4}>
                                                <a href="https://github.com/adam-alfraih/clubKid-project2" target="_blank" rel="noreferrer">
                                                    <div className="proj-imgbx">
                                                        <img src={project2} alt="" />
                                                        <div className="proj-txtx">
                                                            <h4>clubKid</h4>
                                                            <span>A fullstack CRUD web application where users can sign up, log in,create, view, and filter local events. This app also uses Mapbox.</span>
                                                            <br /><br />
                                                            <span>Click to see GitHub repo. URL is in the GitHub bio.</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Col>
                                        } */}

                                        {
                                            <Col sml={6} md={4}>
                                                <a href="https://github.com/adam-alfraih/js-dj" target="_blank" rel="noreferrer">
                                                    <div className="proj-imgbx">
                                                        <img src={project3} alt="" />
                                                        <div className="proj-txtx">
                                                            <h4>JavaScript DJ</h4>
                                                            <span>A JavaScript browser game created using p5.js, a JavaScript library. An algorithm randomly shuffles 3 CD's. Only one random CD hold the correct song choice.</span>
                                                            <br /><br />
                                                            <span>Click to see GitHub repo. URL is in the GitHub bio.</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Col>
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">As you are reading this, I am already working on new projects to post here! More projects coming soon.</Tab.Pane>
                                <Tab.Pane eventKey="third">As you are reading this, I am already working on new projects to post here! More projects coming soon.</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}