const nodemailer = require('nodemailer');
const Alarm = require('../models/Alarm');
const datasetController = require('./datasetController');

exports.sendEmail = async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
       auth: {
           user: process.env.email,
           pass: process.env.password
       }
    });
    let mailOptions = {
        from: process.env.email,
        to: `${req.body.email}`,
        subject: `ALARM ASSIGNED TO YOU`,
        html: `<b>Email: ${req.body.email}</b><br/> 
        <b>Message:</b><br/>${req.body.message}`
    };

    let id = req.body.id;
    let email = req.body.email;  // dejo de andar el update en la bd!! 
    var ObjectId = require('mongodb').ObjectId; 

    var o_id = new ObjectId(id);
    let update = { 'assignTo' : email, 'assignDate' :  Date.now() };
    let filter = {_id : o_id};
    let alarm = await Alarm.findOneAndUpdate(filter,{ $set: update });
    let thisalarm = await Alarm.findById(o_id); // to check that it was updated i console.log(thisalarm)
    console.log(thisalarm);
            
   transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
            return  res.status(500).send("Error");
        }
        else{        
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