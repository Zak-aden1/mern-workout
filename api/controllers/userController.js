const User = require('../models/userModel')

const loginUser = async (req, res) => {
  res.json({msg: 'login'})

};

const signupUser = async (req, res) => {
  try {
    const user = await User.signup(req.body);
    res.status(200).json({email: req.body.email, user})
  } catch (error) {
    res.status(200).json({error: error.message})
  }
}

module.exports = {
  loginUser,
  signupUser
}