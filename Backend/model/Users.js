import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    address:String,
    username:String,
    password:String
    
})

   export const Users = mongoose.model("Users",usersSchema)
    




