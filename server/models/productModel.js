const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The product must have a name'],
    unique: true,
  },
  slug: {
    type: String,
    required: [true, 'The product must have a slug'],
    unique: true,
  },
  size: {
    type: String,
    required: [true, 'The product must have a size'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'The product must have a description'],
    unique: true,
  },
  price: { type: Number, required: [true, 'A tour must have a price'] },
  category: {
    type: [String],
    required: [true, 'The product must have a category'],
  },
  image: {
    type: String,
    required: [true, 'The product must have a image'],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
