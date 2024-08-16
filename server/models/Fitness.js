import { Schema,model } from "mongoose";

const fitnessSchema = new Schema({
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
    reps:{
        type:String,
        default:0
    },
    yoga:{
        type: String,
        default: "others"
    },
    bodyweight:{
        type:String,
        default:0,
    },
    distance:{
        type: String,
        default:true
    }
},{

},
{
    timestmps:true
});

const Fitness = model("Fitness" , fitnessSchema);

export default Fitness;