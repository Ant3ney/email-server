let express = require('express');
const nodemailer = require('nodemailer');

//#region routs
let portfolioRouts = require('./pojects/Portfolio');
//#endregion

module.exports = app => {
	app.get('/', (req, res) => {
		res.send('index route works');
	});
	app.post('/sendMail', async (req, res) => {
		let message = req.body.message;
		let fromEmail = req.body.fromEmail;

		let transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.HOST_EMAIL,
				pass: process.env.PASSWORD,
			},
		});
		let info = await transporter.sendMail({
			from: `${fromEmail} via Portfolio site`,
			to: 'anthonycavuoti@gmail.com',
			subject: 'Portfolio Mail',
			text: message,
		});
		res.status(200).json({ message: message });
	});
	app.use('/test', portfolioRouts);
};
