const nodemailer = require('nodemailer');
const Alarm = require('../models/Alarm');
const Usuario = require('../models/Usuario');


exports.sendEmail = async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
       auth: {
           user: 'rodriguezsofiaf@gmail.com',
           pass: 'Rs220823'
       }
    });

    let mailOptions = {
        from: "HORNBIRD",
        to: `${req.body.email}`,
        subject: `Hi ${req.body.name}`,
        html: `<b>Email: ${req.body.email}</b><br/> 
        <b>Message:</b><br/>${req.body.message}`
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.send(error);
        }
        else{
            let email = req.body.email;
            let usuario = Usuario.find({email: email}, { "name": 1});
            let name = usuario.name;
            let update = { assignTo : name , assignDate :  Date.now()};
            let alarm = Alarm.findOneAndUpdate(email,update);
            res.send('Message sent');
        }
    });
    
}

exports.createAlarm = async(req, res) => {
    const { message, start, status } = req.body;
    try{
        // crear alarma
        alarm = new Alarm(req.body);


        // guardar alarma
        await alarm.save();

        
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

exports.getAlarms = async (req, res) => {
    try {
        const alarms = await Alarm.find().sort({ date: 1 });
        res.json({ alarms });

      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
}