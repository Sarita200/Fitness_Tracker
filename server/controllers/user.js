import User from "../models/user.js";

const PostRegister =async(req,res) =>{
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
}

const PostLogin =async(req,res) =>{
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
}

export {
  PostRegister,
  PostLogin
}