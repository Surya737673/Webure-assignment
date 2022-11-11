const AuthModel = require("../models/auth");
const crypto=require("crypto")
const jwt=require("jsonwebtoken")

const signup=async(req,res)=>{
    const {name,email,password}=req.body;
    const check=await AuthModel.findOne({email})
    if(check){
        return res.send({message:"user already exist"})
    }else{
        const hash=crypto.pbkdf2Sync(password,"SECRETSURYA123",60,60,"sha256").toString("hex");
        const user=new AuthModel({name,email,hash});
        user.save();
        return res.json(user)
    }
}
const login=async(req,res)=>{
    
    const {email,password}=req.body;
    const user=await AuthModel.findOne({email})
    const hash=crypto.pbkdf2Sync(password,"SECRETSURYA123",60,60,"sha256").toString("hex");
    if(hash!==user?.hash){
        return res.status(401).send("invalid credentials");
    }else{
            const token=jwt.sign({name:user?.name},"QWERTYQWERTYQWERTYQWERTY",{expiresIn:"1h"})
            const refreshtoken=jwt.sign(user.toJSON(),"QWERTYQWERTYQWERTYQWERTY",{expiresIn:"7d"});
            res.cookie("token",token)
            res.send({name:user?.name,token,refreshtoken,email,uid:user?._id,message:"success"})
    }
       
    
}


module.exports={signup,login}