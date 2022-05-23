const express = require('express');
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');

const router = express.Router();

router.route('/').get(productController.getAllProducts);
router.get('/search', productController.getProductsBySearch);

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(
    // authController.protect,
    // authController.restrictTo('admin'),
    productController.updateProduct
  )
  .delete(
    // authController.protect,
    // authController.restrictTo('admin'),
    productController.deleteProduct
  );


module.exports = router;