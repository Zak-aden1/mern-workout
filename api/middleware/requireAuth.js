require('dotenv').config();
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { auth } = req.headers
  
  if(!auth) return res.status(401).json({error: 'auth token reqiured'})

  const token = auth.split(' ')[1]
  try {
    const { _id } = jwt.verify(token, process.env.SECRET)
    req.user = await User.findById(_id)
    next()
  } catch (error) {
    res.status(401).json({error: 'Request is not authorized'})
  }

}

module.exports = requireAuth