import { User } from "../../../database/models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import 'dotenv/config'

export const register=async(req,res,next)=>{
    const {username,password}=req.body
    let user=new User(req.body)
    await user.save()
    res.json({message:'success',user})
}

export const login=async(req,res,next)=>{
    const {username,password}=req.body
    const user=await User.findOne({username})
    if(!user){
        return res.status(401).json({message:'user not found'})
    }
    const isMatch= bcrypt.compareSync(password,user.password)
    if(!isMatch){
        return res.status(401).json({message:'invalid username or password'})
    }
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    res.json({message:'success',token})
}