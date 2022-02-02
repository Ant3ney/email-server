let express = require('express');
const nodemailer = require('nodemailer');

//#region routs
let portfolioRouts = require('./pojects/Portfolio');
//#endregion

module.exports = app => {
   app.get('/', (req, res) => {
      console.log('in route');
      res.send('index route works');
   });
   app.post('/sendMail', async (req, res) => {
      console.log('Sending mail');
      let message = req.body.message || 'unset';
      let fromEmail = req.body.fromEmail || 'unset';
      let subject = req.body.subject || 'unset';
      let toEmail = req.body.toEmail || 'anthonycavuoti@gmail.com';

      let transporter = nodemailer.createTransport({
         host: 'smtp.gmail.com',
         port: 465,
         secure: true,
         auth: {
            user: process.env.HOST_EMAIL,
            pass: process.env.PASSWORD,
         },
      });
      transporter
         .sendMail({
            from: process.env.HOST_EMAIL,
            to: toEmail,
            subject: subject,
            text: message,
         })
         .then(data => {
            console.log(data);
            res.status(200).json({ message: 'Sent email sucessfully' });
         })
         .catch(err => {
            res.status(500).json(err);
         });
   });
   app.use('/test', portfolioRouts);
};
