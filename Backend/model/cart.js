import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },

    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Products",
                required:true
            },
            qty:{
                type:Number,
                default:1
            }
        }
    ]
},{timestamps:true})

export const Cart = mongoose.model("Cart",CartSchema)