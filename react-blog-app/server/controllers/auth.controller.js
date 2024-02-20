import User from '../models/user.model.js'
import {errorHandler}from '../utils/error.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async (req,res, next) => {
  const { username, email, password} = req.body

  if (!username, !email, !password){
    return next(errorHandler(400, 'All fields are required'))
  }
    
  const hashedPassword = bcryptjs.hashSync(password, 10)
  
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  })

  try {
    await newUser.save()
    res.json({ message: 'Signup successfull'}) 
  } catch (err) {
    res.status(401).json({ message: err.message, success: false}) 
  }
}

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await User.findOne({ email: email });
    if (validUser === null) {
      return next(errorHandler(400, 'User not found'))
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'))
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(err)
  }
}
