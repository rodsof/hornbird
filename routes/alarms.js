const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
router.post('/',
    (req, res) => {
        let transporter = nodemailer.createTransport({
            service: contactService,
            auth: {
                user: "sofia9803@hotmail.es",
                pass: "123456"
            }
        });

        let mailOptions = {
            from: `"HORNBIRD" <${contactUser}>`,
            to: "sofia9803@hotmail.es",
            subject: "ALARM",
            html: `<b>Email: ${req.body.email}</b><br/> 
            <b>Message:</b><br/>${req.body.message}`
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                return res.send(error);
            }
            res.send('Message sent');
        });
    }
);
