const mongoose = require('mongoose');
const validator = require('validator');

const newsLetterSchema = new mongoose.Schema({
  email: {
    type: String,
    default: '',
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
});

const NewsLetter = mongoose.model('NewsLetter', newsLetterSchema);
module.exports = NewsLetter;
