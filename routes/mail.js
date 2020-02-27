const router = require('express').Router();
const mailer = require('nodemailer');

// dev only - these creds should be stored app-side for Heroku and loaded via process.env.USER / process.env.PASSWORD
const auth = require('../config/mailcreds');

const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: auth.user,
		pass: auth.pass
	}
});

router.post("/", (req, res) => {
    console.log('send mail stuff here');

    console.log('body: ', req.body);

	// get the mail options from the form -> the url params using bodyParser middleware

	const mailOptions = {
		from: "Disaster Recovery Microsite",
		to: 'devon@in2communications.com',
		replyTo: req.body.usermail,
		subject: `From DRM site: Subject = ${req.body.subject || 'Request For Access'}`, // Subject line
		text: `Sent from ${req.body.firstname + " " + req.body.lastname + " at " + req.body.companyname}`
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed... ", err);
			res.json(err);
		} else {
			console.log("success! ", info);
			res.json(info);
		}
	});
})

module.exports = router;