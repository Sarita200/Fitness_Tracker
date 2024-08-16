import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
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


const PORT = process.env.PORT || 6000
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
})