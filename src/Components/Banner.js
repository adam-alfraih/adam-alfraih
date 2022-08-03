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
                                    <h1>{`Hi I'm Adam, a `} <span className="wrap">{text}</span></h1>
                                    <p>
                                        Born and raised in Toronto, Canada, I'm now living in Berlin. I'm a fullstack web developer with a focus on frontend. I live and breathe the digital landscape, so I can help with your content strategy and applying your unique aesthetic on any online platform.
                                        <br />
                                        <br />
                                        <h2>Want a hand with your website?</h2>
                                        I'm looking to work with creative individuals and small businesses, whether you have a website already or you'd like to build something new together.
                                        <br />
                                        Each project is unique, so let's meet for a one-hour introductory call to discuss what you're after, free of charge. From there I'll send you a proposal tailored to your needs and budget.
                                        <br />
                                        <br />
                                       Send me a message and we'll take it from there.
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