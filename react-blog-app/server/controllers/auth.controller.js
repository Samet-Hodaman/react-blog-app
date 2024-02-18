import User from '../models/user.model.js'
import {errorHandler}from '../utils/error.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req,res, next) => {
    const { username, email, password} = req.body

    if (!username, !email, !password){
        next(errorHandler(400, 'All fields are required'))
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
        res.status(500).json({ message: err.message})
    }
}