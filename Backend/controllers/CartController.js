import { Cart } from "../model/cart";

export const AddtoCart = async()=>{
    try {
        let userID = req.session.user
        let {product_id}= req.body;

        let cart = await Cart.findOne({user})
        if(!cart){
            cart = new Cart({
                user:userID,
                items:[{product:product_id,qty:1}]
            })
        }
        else{
            const index = cart.items.findIndex(i=>{
                i.product.toString() === product_id
            })
            if(index > -1){
                cart.items[index].qty += 1
            }
            else{
                cart.items.push({product:product_id,qty:1})
            }
        }
        await cart.save();
        res.json({success:true,cart})
        
    } catch (error) {
        console.log(error,"error in carting");
        
        
    }
}