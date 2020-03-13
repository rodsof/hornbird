const nodemailer = require('nodemailer');
const Alarm = require('../models/Alarm');




exports.sendEmail = async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
       auth: {
           user: 'rodriguezsofiaf@gmail.com',
           pass: 'Universidad17'
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
         //   res.send('Message sent');
        }
    });
  
        let id = { _id : req.body.id};
        let userName = req.body.userName;
        let update = { assignTo : userName , assignDate :  Date.now()};
        let alarm = await Alarm.findOneAndUpdate(id,update);
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
        const alarms = await Alarm.find().sort({ date: -1 });
        res.json({ alarms });

      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
}