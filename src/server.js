const express = require("express")
const router = express.Router()
const cors = require("cors")
require("dotenv").config()
const nodemailer = require("nodemailer")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/", router)
app.listen(5000, () => console.log("Server Running"))

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready to Send")
    }
})

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName
    const { email, message, phone } = req.body

    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Contato Site",
        html: `<p>Nome: ${name}</p>
        <p>Email: ${email}</p>
        <p>Telefone: ${phone}</p>
        <p>Mensagem: ${message}</p>`
    }

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.status(400).json({ success: false, message: error.message })
        } else {
            res.status(200).json({ success: true, message: "Mensagem enviada" })
        }
    })
})