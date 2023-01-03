const Product = require('./../models/productModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');

exports.getAllProducts = factory.getAll(Product);
exports.getProduct = factory.getOne(Product);
exports.createProduct = factory.createOne(Product);
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);

exports.getProductsBySearch = catchAsync(async (req, res) => {
  console.log('testing');
  const { term } = req.query;
  console.log(term);

  try {
    const query = new RegExp(term, 'i');

    const products = await Product.find({
      $and: [{ $or: [{ name: query }, { description: query }] }],
    });

    const doc = products;
    res.status(200).json({
      status: 'success',
      results: doc.length,
      doc,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
