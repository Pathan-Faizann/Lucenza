import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    category:String,
    desc:String

})

export const Products = mongoose.model("Products",schema)
