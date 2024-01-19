import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Enviar')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonText('Enviando...')
        const res = await fetch(`${process.env.REACT_APP_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDetails)
        })

        setButtonText('Enviado')

        const result = await res.json()
        console.log(result)
        setFormDetails(formInitialDetails)
        if (result.success === true) {
            setStatus({
                success: true,
                message: result.message
            })
        } else {
            setStatus({
                success: false,
                message: "Algo deu errado, tente novamente!"
            })
        }
    }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Nos contate" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Entrar em contato</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className='px-l'>
                                                <input type='text' value={formDetails.firstName} placeholder='Nome' onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                                            </Col>
                                            <Col size={12} sm={6} className='px-l'>
                                                <input type='text' value={formDetails.lastName} placeholder='Sobrenome' onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                                            </Col>
                                            <Col size={12} sm={6} className='px-l'>
                                                <input type='email' value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)} required />
                                            </Col>
                                            <Col size={12} sm={6} className='px-l'>
                                                <input type='tel' value={formDetails.phone} placeholder='Telefone' onChange={(e) => onFormUpdate('phone', e.target.value)} required />
                                            </Col>
                                            <Col size={12} sm={6} className='px-l'>
                                                <textarea row="6" value={formDetails.message} placeholder='Mensagem' onChange={(e) => onFormUpdate('message', e.target.value)} required />
                                            </Col>
                                            {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            }
                                            <button type='submit'><span>{buttonText}</span></button>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}