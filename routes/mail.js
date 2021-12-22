require("dotenv").config();
const router = require("express").Router();

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname'
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post("/send", (req, res) => {
  /* const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `; */

  // create reusable transporter object using the default SMTP transport

  // setup email data with unicode symbols
  const name = req.body.name;
  const email = req.body.email;
  const title = req.body.title;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n title: ${title} \n message: ${message} `;
  const mail = {
    from: '"PortFolio" <shittutaofeek009@outlook.com>', // sender address
    to: "shittutaofeek009@gmail.com",
    subject: `[PORTFOLIO] - ${title}`,
    text: content,
  };

  // send mail with defined transport object
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err),
        res.json({
          status: "fail",
        });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

module.exports = router;
