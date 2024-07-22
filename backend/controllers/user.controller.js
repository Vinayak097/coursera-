import { User } from "../models/usermodel.js";
import { loginTypes } from "../types/LoginType.js";


export const userlogin= async(req , res) => {
    const { username, password } = req.body;
    try{
     
      
      const payload=loginTypes.parse(body);
      if(payload.success){
        const user= await User.findOne({email:body.email});
        const token=jwt.sing(body,process.JWT_SECRET);
     
        if(token!=undefined||null && body.password === user.password){
          res.cookie('username', username, { maxAge: 900000, httpOnly: true });
          res.status(200).json({message:"Login successful and cookie set" , jwt:token});
        }else{
          res.status(401).json({message:"user not exist"});
        }
      }else{
        res.status(411).json({message:'invalid inputs',payload})
      }

  
    }catch(error){
      console.log(error);
      res.status(500).json({message:"Internal server error"});
    }
   
}

export const userSignp=async(req,res)=>{
  
  const body=req.body;
  try{
    console.log("started trye block")
    console.log(body);
    if(!body){
      res.send("nothing got ",body);
      return 
    }
    const payload=loginTypes.parse(body);
    if(payload.success){
      await User.create({
        name:body.name,
        password:body.password
      })
      const token=jwt.sign(body,process.env.JWT_SECRET);
  
      res.status(201).json({message:'user create ',jwt:token})
    }else{
      res.status(411).json({message:'invalid inputs',payload})
    }
  }catch(error){
    console.log(error);
    res.status(500).json({message:"Internal server error"});
  }
 
}
export const checkPoint=(req,res)=>{
    res.send("workign fine ");
}