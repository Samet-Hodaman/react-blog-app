import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'
import cookieParser from "cookie-parser";

dotenv.config()

mongoose
    .connect(
        process.env.CONNECTION_STRING
    )
    .then(() => { 
        console.log('Mongodb is connected')
    })
    .catch( err => {
        console.error(err)
    }
)

const app = express()
const PORT = 8080
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.get("/", (req,res) => {
    res.send("It workeds")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})