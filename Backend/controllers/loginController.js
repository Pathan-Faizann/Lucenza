import express from "express";
import { Users } from "../model/Users.js";
import bcrypt from "bcrypt"
 export async function checkUser(req,res){
    try {
        let {username,password} = req.body;  
        const user = await Users.findOne({username})
        if (!user){
           return res.status(404).json({success:false,message:"Invalid Input"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
           return res.status(401).json({success:false,message:"Invalid Input"})
        }
        req.session.user = user._id
        console.log(req.session.user);
        
        res.json({success:true,user:user._id})
    } catch (error) {
        console.log(error,"error in login");
         res.status(500).json({ success: false, message: "Server error" });
        
        
    }
}

export async function LoggedinUser(req,res){
   try {
      let id = req.session.user
      if(!id){
       return  res.status(401).json({success:false,message:"Login First"})
      }
      console.log("Session id :",id);
      
      let data = await Users.findById(id)
      res.json(data)
   
   } catch (error) {
      console.log(error,"in fetching logged user");
      
      
   }
}