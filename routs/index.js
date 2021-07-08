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
		let message = req.body.message || 'unset';
		let fromEmail = req.body.fromEmail || 'unset';
		let subject = req.body.subject || 'unset';

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
				from: `anthonycavuoti2@gmail.com`,
				to: 'anthonycavuoti@gmail.com',
				subject: subject,
				text: message,
			})
			.then(() => {
				res.status(200).json({ message: 'Sent email sucessfully' });
			})
			.catch(err => {
				res.status(500).json(err);
			});
	});
	app.use('/test', portfolioRouts);
};
