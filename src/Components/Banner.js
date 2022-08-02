import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img2.svg";
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
                            <p>Born and raised in Toronto, Canada, now in Berlin. I'm a full-stack developer with a focus on front-end. Having experience in digital content creation, I understand the digital landscape and can help apply a brands’ aesthetic on any online platform.
                            <br></br>
                            <br></br>
                            Want to make a website? You'll be working both with me, as well as my senior web dev mentor who has over 6 years of professional experience in the industry! Together, we can help you create your ideal website.</p>

                            <a href="mailto:adamalfraih@gmail.com">
                            <button>Let's connect <ArrowRightCircle size={25}/></button>
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