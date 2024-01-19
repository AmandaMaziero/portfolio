import { useState, useEffect } from 'react'
import { Container, Col, Row } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { HashLink } from "react-router-hash-link"
import { BrowserRouter as Router } from 'react-router-dom'
import TrackVisibility from 'react-on-screen'
import headerImg from '../assets/img/header-img.svg'
import "animate.css"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Desenvolvedora Backend", "Desenvolvedora Web", "Desenvolvedora Fullstack"]
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    const getAge = () => {
        let age = 0
        const today = new Date()
        const birthDate = new Date("2002-06-10")
        age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }

        return age
    }

    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline">Seja Bem-Vindo ao meu Portfólio</span>
                                        <h1>{`Oi! Eu sou Amanda `}<span className="wrap">{text}</span></h1>
                                        <p>Tenho {getAge()} anos, sou técnica em informática e tecnóloga em Análise e Desenvolvimento de Sistemas em formação. Atuo principalmente com NodeJS. Vamos trabalhar juntos?</p>
                                        <HashLink to='#connect'>
                                            <button>Entre em contato <ArrowRightCircle size={25} /></button>
                                        </HashLink>
                                    </div>
                                }
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>
    )
}