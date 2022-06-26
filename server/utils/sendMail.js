// // using Twilio SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs

// const sgMail = require('@sendgrid/mail')
// const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//     host: 'smtp.sendgrid.net',
//     port: 587,
//     auth: {
//         user: "apikey",
//         pass: process.env.SENDGRID_API_KEY
//     }
//  })

//  transporter.sendMail({
//     from: "SENDER_EMAIL", // verified sender email
//     to: "RECIPIENT_EMAIL", // recipient email
//     subject: "Test message subject", // Subject line
//     text: "Hello world!", // plain text body
//     html: "<b>Hello world!</b>", // html body
//   }, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY); //your sendgrid api key

const sendMail = (email, message, subject) => {
  console.log({ email, message, subject });
  sgMail.send({
    To: email, // receiver email address
    from: process.env.MAIL_FROM,
    subject: subject,
    text: message,
  });
};

module.exports = {
  sendMail,
};
