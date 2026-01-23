import { Products } from "../model/Products.js";

export const addProduct = async (req,res)=>{
    let {name,image,price,category,desc} = req.body;
    let data = new Products({name,image,price,category,desc});
    let saved = data.save();
    res.json(saved)
}

export const getProducts = async (req,res)=>{
    try {
        let data = await  Products.find();
        res.json(data);
        
    } catch (error) {
        console.log("error in getting products",error);
        
        
    }
}

export const deleteProduct = async(req,res)=>{
try {
        let data = await Products.findByIdAndDelete(req.params.id);
        res.json({"message":"entry is deleted",data})
    }
    catch (error) {
        console.log(error,"in deleting");
        
        
    }
    
} 

export const updateProduct = async (req,res)=>{
    try {
        let data = await Products.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({data,"updated":"success"})
    } catch (error) {
        console.log(error,"Error in updating product");
        
        
    }
}

export async function FetchOne(req,res) {
    try {
        let data = await Products.findById(req.params.id)
        res.json({success:true,data:data})
    } catch (error) {
        console.log(error,"error in viewing");
        
        
    }
    
}