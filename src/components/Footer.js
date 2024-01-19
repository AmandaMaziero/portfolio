import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row className="aligm-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="www.linkedin.com/in/amanda-aparecida-julio-maziero"><img src={navIcon1} alt="Linkedin" /></a>
                            <a href="https://www.facebook.com/amandajuliomaziero/"><img src={navIcon2} alt="Facebook" /></a>
                            <a href="https://www.instagram.com/mandymaziero/"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <p>© {year} Amanda Maziero Tecnologias. Todos os direitos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}