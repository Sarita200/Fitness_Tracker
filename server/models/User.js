import { Schema , model } from "mongoose";

const userSchema = new Schema({
    fullName :{
        type:String,
        required:[ true ,"Please Enter  Email"],
    },
    email :{
        type:String,
        required:[ true ,"Please Enter  Email"],
        unique:true
    },
    mobileNo :{
        type : Number,
        required : [true,"Please Enter  mobile Number"],
        unique:true
    },
    password :{
        type :String,
        required:[true,"Please Enter password"]
    },
    dob :{
        type:Date,
        required:[true,"Please Enter Date of Birth"]
    }
},
{
    timestamps:true
});

const User = model('User',userSchema);

export default User;