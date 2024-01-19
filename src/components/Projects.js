import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/getapet1.jpeg";
import projImg2 from "../assets/img/toughts2.jpeg";
import projImg3 from "../assets/img/loja1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
    const projects = [
        {
            title: "Get A Pet",
            description: "Um projeto realizado em estudos para a adoção de animais. (React e NodeJS)",
            imgUrl: projImg1,
        },
        {
            title: "Toughts",
            description: "Um projeto realizado em estudos para o envio de ideias e pensamentos. (Express Handlebars e NodeJS)",
            imgUrl: projImg2,
        }
    ]

    const schools = [
        {
            title: "Loja",
            description: "Um projeto realizado para a disciplina de Laboratório de Banco de Dados. (PHP e Bootstrap)",
            imgUrl: projImg3,
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projetos</h2>
                                    <p>Confira alguns dos meus projetos:</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Estudos</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Projetos Acadêmicos</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Em breve</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp">
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                            <Row>
                                                    {
                                                        schools.map((school, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...school} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                Aguarde novidades!
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section >
    )
}
