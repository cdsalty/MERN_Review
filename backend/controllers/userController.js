const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Register New User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(name, email, password); // make sure to test with x-www-form-urlencoded

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  // check if user already exists
  const userExists = await User.findOne({ email });

  // if user exists, throw error
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  // console.log(user);

  if (user) {
    res.status(201).json({
      _id: user.id, // _id is the default id for mongoose; we want to return this to the client
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Login/Authenticate a User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password); // make sure to test with x-www-form-urlencoded

  // find the user by their email
  const user = await User.findOne({ email });

  // compare the password using bcrypt compare method.
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401); // 401 is unauthorized
    throw new Error('Invalid email or password');
  }

  res.json({ message: 'login User' });
});

// @desc    Get User Data
// @route   GET /api/users/me
// @access  PRIVATE
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'Get User data to display' });
});

// Generate token -> pass back into the user data being generated on login
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
