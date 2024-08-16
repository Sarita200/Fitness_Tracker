import { Schema,model } from "mongoose";

const fitnessSchema = new Schema({
    time :{
        type :String,
        required:true
    },
    exercise :{
        type:String,
        required:true
    },

},{

},
{
    timestmps:true
});

const Fitness = model("Fitness" , fitnessSchema);

export default Fitness;