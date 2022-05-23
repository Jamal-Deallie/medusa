const express = require("express");
const User = require("../models/userModel");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const authController = require("./../controllers/authController");
const userController = require('./../controllers/userController');
const {
    getToken,
    COOKIE_OPTIONS,
    getRefreshToken,
    verifyUser,
  } = require("../authenticate");
const router = express.Router();

router.post('/signup', authController.signup);

router.post("/signin", passport.authenticate("local"), (req, res, next) => {
    const token = getToken({ _id: req.user._id });
    const refreshToken = getRefreshToken({ _id: req.user._id });
    User.findById(req.user._id).then(
      (user) => {
        user.refreshToken.push({ refreshToken });
        user.save((err, user) => {
          if (err) {
            res.statusCode = 500;
            res.send(err);
          } else {
            res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
            res.send({ success: true, token });
          }
        });
      },
      (err) => next(err)
    );
  });
  

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
