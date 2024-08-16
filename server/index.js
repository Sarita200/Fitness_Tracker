import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import User from './models/user.js'
import Fitness from './models/Fitness.js'
import { PostLogin, PostRegister } from './controllers/user.js'
import { PostFitnessData } from './controllers/fitness.js'

const app = express()
app.use(express.json());
app.use(cors());

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URL)
    if(conn){
        console.log("MongoDB Connected Successfully..📦");
    }
    else{
        console.log("Error Connecting to MongoDB");
    }
}
connectDB();

app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to fitness Tracker",
        success:true
    })
})
app.post('/register',PostRegister)
app.post('/login',PostLogin)
app.post('/fitness',PostFitnessData)


const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
})