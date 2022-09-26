const user = require('../models/userModel')

const loginUser = async (req, res) => {
  res.json({msg: 'login'})

};

const signupUser = async (req, res) => {
  res.json({msg: 'signup'})
}

module.exports = {
  loginUser,
  signupUser
}