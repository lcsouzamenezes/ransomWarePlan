const router = require('express').Router();
const mailer = require('nodemailer');

router.get("/", (req, res) => {
    console.log('send mail stuff here');
})

module.exports = router;