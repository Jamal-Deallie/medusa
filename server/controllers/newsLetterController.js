const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const NewsLetter = require('./../models/newsLetterModel');
const { sendMail } = require('../utils/sendMail');

exports.newsletter = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new AppError('Please enter your email!', 400));
  }

  const letterRecipient = await NewsLetter.findOne({ email });
  //check if user exist send a failed 409 message
  if (letterRecipient) {
    return next(new AppError('The email already exists', 409));
  }
  try {
    const newRecipient = await NewsLetter.create({
      email: email,
    });
    const message =
      'This email serves as confirmation that you have signed up for our newsletter';
    const subject = 'Newsletter Confirmation - Medusa Gardens';

    sendMail(email, message, subject);
    alert('Test email sent successfully');
    res.status(200).json({
      status: 'success',
      message: 'You have successfully signed up for our Newsletter!',
      newRecipient,
    });
  } catch (err) {
    alert('signup error', err);
    res.status(500).json({
      errorMessage: `Server Error: ${err.message}`,
    });
  }
});
