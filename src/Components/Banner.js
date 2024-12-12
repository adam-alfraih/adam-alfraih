import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


/* Beginning of the typing animation code */
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    /* Chosen text that will be animated */
    const toRotate = ["Web Developer.", "Frontend Developer.", "Fullstack Developer."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };
    /* End of the typing animation code */

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>
                                        {`Hi I'm Adam, a `} <span className="wrap">{text}<span className="blink">|</span></span>
                                        
                                    </h1>
                                    <p>
                                        Born and raised in Toronto, Canada, I recently returned home after living in Berlin. I'm a full-stack web developer with a strong focus on frontend development and crafting seamless user experiences.
                                        <br />
                                        <br />
                                        {/* <h2>Want a hand with your website?</h2> */}
                                        This website showcases projects that highlight my technical expertise, creative problem-solving, and dedication to delivering user-focused solutions. Each project reflects my commitment to detail and my ability to translate complex ideas into functional, visually appealing applications. I even coded this website using React!
                                        <br />
                                        <br />
                                        Feel free to explore my projects and see how I’ve applied my skills to deliver exceptional results. Let’s connect to discuss how I can contribute to your team.
                                    </p>

                                    <a href="mailto:adamalfraih@gmail.com">
                                        <button>Let's connect <ArrowRightCircle size={25} /></button>
                                    </a>

                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}