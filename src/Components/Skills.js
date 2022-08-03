import reactLogo from "../assets/img/reactLogo.png";
import jsLogo from "../assets/img/jsLogo.png";
import nodejsLogo from "../assets/img/nodejsLogo.png";
import mongodbLogo from "../assets/img/mongodbLogo.png";
import expressjsLogo from "../assets/img/expressjsLogo.png";
import bootstrapLogo from "../assets/img/bootstrapLogo.png";
import htmlLogo from "../assets/img/htmlLogo.png";
import cssLogo from "../assets/img/cssLogo.png";
import iphoneIcon from "../assets/img/iphoneIcon.png";
import axiosLogo from "../assets/img/axiosLogo.png";
import jasmineLogo from "../assets/img/jasmineLogo.png";
import herokuLogo from "../assets/img/herokuLogo.png";
import restapiLogo from "../assets/img/restapiLogo.png";
import passportjsLogo from "../assets/img/passportjsLogo.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills & Technologies</h2>
                        <p>Having completed the Ironhack Full-Stack Web Development program,
                        <br></br>
                        I have project experience with building full stack React SPAs, modern JavaScript applications, RESTful APIs, + more</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactLogo} alt="React Logo" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={jsLogo} alt="JavaScript Logo" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={nodejsLogo} alt="Node.js Logo" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={mongodbLogo} alt="MongoDB Logo" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={expressjsLogo} alt="Express.js Logo" />
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrapLogo} alt="bootstrap Logo" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={restapiLogo} alt="REST API Logo" />
                                <h5>REST API</h5>
                            </div>
                            <div className="item">
                                <img src={passportjsLogo} alt="passport.js Logo" />
                                <h5>Passport.js (auth)</h5>
                            </div>
                            <div className="item">
                                <img src={axiosLogo} alt="axios Logo" />
                                <h5>Axios</h5>
                            </div>
                            <div className="item">
                                <img src={htmlLogo} alt="html Logo" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={cssLogo} alt="bootstrap Logo" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={jasmineLogo} alt="jasmine Logo" />
                                <h5>Jasmine Unit testing</h5>
                            </div>
                            <div className="item">
                                <img src={herokuLogo} alt="heroku Logo" />
                                <h5>Heroku</h5>
                            </div>
                            <div className="item">
                                <img src={iphoneIcon} alt="iphone Icon" />
                                <h5>Responsive design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}