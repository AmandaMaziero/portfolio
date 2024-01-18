import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5,
        },
    }

    return (
        <section className="skill" id="skills">
            <Container className="container">
                <Row className="row">
                    <Col className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>
                                Habilidades
                            </h2>
                            <p>Confira abaixo a lista de algumas habilidades que eu possuo:</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>NoSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>AWS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="" />
                                    <h5>PHP</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}