import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import User from './models/user.js'
import Fitness from './models/Fitness.js'

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

app.post('/register',async(req,res) =>{
    const {fullName,email,mobileNo,dob,password} = req.body;

    const user = new User({
        fullName:fullName,
        email:email,
        mobileNo:mobileNo,
        dob: new Date(dob),
        password:password
    })
    

    try{
        const savedUser = await user.save();
        res.json({
            message:"User Registered Successfully",
            success:true,
            user:savedUser
            })
    }
    catch(e){
        res.json({
            message:e.message,
            success:false,
            data:null
        })
    }
})

app.post('/login',async(req,res) =>{
    const {email,password} = req.body;

    const user = await User.findOne({
        email:email,
        password:password
    })

    if(!user){
        return res.json({
        success:false,
        message:"Invalid User",
        data:null
        })
    }
    else{
        return res.json({
            success: true,
            message:"User Loged in successfully",
            data:user
        })
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
})