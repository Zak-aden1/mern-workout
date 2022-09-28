const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});
}

const loginUser = async (req, res) => {
  res.json({msg: 'login'})

};

const signupUser = async (req, res) => {
  try {
    const user = await User.signup(req.body);

    // create token
    const token = createToken(user._id)

    res.status(200).json({email: req.body.email, token})
  } catch (error) {
    res.status(200).json({error: error.message})
  }
}

module.exports = {
  loginUser,
  signupUser
}