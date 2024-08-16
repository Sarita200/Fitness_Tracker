import Fitness from "../models/Fitness.js";

const PostFitnessData = async (req,res)=>{
    const { duration, exercise, date, weight, bodyweight, distance, user } = req.body;

    const fitnessdata = new Fitness({
        duration,
        exercise,
        date,
        weight,
        bodyweight,
        distance,
        user
    })

    try{
        const savedFitness = await fitnessdata.save()
        res.json({
            succes: true,
            message: "Fitness data saved successfully",
            data: savedFitness
        })
    }
    catch(err){
        res.json({
            succes: false,
            message:e.message,
            data:null
        })
    }
}

export {
    PostFitnessData
}