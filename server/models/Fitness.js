import { Schema,model } from "mongoose";
import User from "./user.js";

const fitnessSchema = new Schema({
    workoutNo:{
        type:Number,
        required:true,
        unique:true
    },
    duration :{
        type :String,
        required:true
    },
    exercise :{
        type:String,
        default: "others"
    },
    date: {
        type: Date,
        required: true
    },
    weight:{
        type:String,
        default:0,
    },
    
    bodyweight:{
        type:String,
        default:0,
    },
    distance:{
        type: String,
        default:true
    },
    user :{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
},{

},
{
    timestmps:true
});

const Fitness = model("Fitness" , fitnessSchema);

export default Fitness;