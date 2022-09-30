const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login({email, password})
    // create token
    const token = createToken(user._id)

    res.status(200).json({email: req.body.email, token})
    } catch (error) {
    res.status(400).json({error: error.message})
  }

};

const signupUser = async (req, res) => {
  const errorFields = [];
  const {email, password, username} = req.body;
  if(!email) errorFields.push('email')
  if(!username) errorFields.push('username')
  if(!password) errorFields.push('password')

  // if(errorFields.length > 0) return res.status(400).json({error: 'please'})

  try {
    const user = await User.signup(req.body);

    // create token
    const token = createToken(user._id)

    res.status(200).json({email: req.body.email, token, username: req.body.username})
  } catch (error) {
    res.status(400).json({error: error.message, errorFields})
  }
}

module.exports = {
  loginUser,
  signupUser
}