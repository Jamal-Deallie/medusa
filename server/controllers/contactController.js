const sgMail = require('@sendgrid/mail');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.contactus = catchAsync(async (req, res, next) => {
  const { email, name, inquiry } = req.body;
  if (!email || !name || !inquiry) {
    return next(new AppError('Please complete all required fields!', 400));
  }
  try {
    const message = `${name}, at ${email} has the following inquiry: ${inquiry}`;
    const subject = `${name} has an inquiry - Medusa Gardens`;

    sgMail.send({
      To: process.env.MAIL_TO, // receiver email address
      from: process.env.MAIL_FROM,
      subject: subject,
      text: message,
    });
  } catch (err) {
    alert(err);

    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500
    );
  }

  res.status(200).json({
    status: 'success',
    message: 'Contact Form Sent Successfully!',
  });
});
