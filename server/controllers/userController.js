const User = require('./../models/userModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
  //create empty object
  const newObj = {};
  //loop though the fields to check to see if its allowed and add it to the newObj
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.getMe = catchAsync(async (req, res) => {
  const user = req.user;

  let userData = {
    id: user._id,
    firstName: user.firstName,
    email: user.email,
    passwordResetToken: user.passwordResetToken,
    roles: user.roles,
  };

  res.status(200).json({
    status: 'success',
    data: { userData },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  //create an error if user attempts to update password
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for updating password', 400));
  }
  //filter object, so only the eligible fields listed below are updated
  const filteredBody = filterObj(req.body, 'firstName', 'lastName', 'email');
  //update user document

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  //send update user
  res.status(200).json({
    status: 'success',
    updatedUser,
  });
});
