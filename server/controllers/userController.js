const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');






exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);

// Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
// exports.getAllUsers = (req, res) => {
//     res.status(500).json({
//       status: 'error',
//       message: 'This route is not yet defined!'
//     });
//   };
//   exports.getUser = (req, res) => {
//     res.status(500).json({
//       status: 'error',
//       message: 'This route is not yet defined!'
//     });
//   };
  exports.createUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
  };
//   exports.updateUser = (req, res) => {
//     res.status(500).json({
//       status: 'error',
//       message: 'This route is not yet defined!'
//     });
//   };
//   exports.deleteUser = (req, res) => {
//     res.status(500).json({
//       status: 'error',
//       message: 'This route is not yet defined!'
//     });
//   };
  