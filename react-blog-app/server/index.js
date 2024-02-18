import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

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
const PORT = 3000
app.use(express.json())

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


})