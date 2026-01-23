import { Users } from "../model/Users.js";
import bcrypt from "bcrypt"


export const addUser = async(req,res)=>{
    try {
        let {name,phone,email,address,username,password} = req.body;
        let givenUsername = await Users.findOne({username})
        console.log(givenUsername);
        
        if(givenUsername){
            return res.status(409).json({success:false,message:"User Exist with this username"})
        }
        let modified = await bcrypt.hash(password,10)
        let data = new Users({name,phone,email,address,username,password:modified}) ;
        let saved = await data.save()
        res.status(201).json(saved)
        
        
    } catch (error) {
        console.log(error)
    }
}


export const getUsers = async (req,res)=>{
    try {
        let data = await Users.find();
        res.json(data)
        
        
        
        
    } catch (error) {
        console.log(error)
        
    }

}
export const deleteUser = async (req,res)=>{
    try {
        let data = await Users.findByIdAndDelete(req.params.id)
        res.json({message:"Your entry is deleted",data})
        
        
    } catch (error) {
        console.log(error);
        
        
    }

}