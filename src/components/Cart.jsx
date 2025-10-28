import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import "./cart.css"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { addQty ,addTotal,minQty, remC } from '../redux/slice'
import { RiDeleteBin7Line } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";


const Cart = () => {
    const cart = useSelector((state)=>state.slice.cart)
    const dis = useDispatch()
    const navigate = useNavigate()
    const grandTotal = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );
    function checkout(){
      dis(addTotal(grandTotal))
      navigate("/checkout") 
    }
    useEffect(() => {
      console.log(cart);
      
    }, [cart])
     
    
  return (
    <>
         <button className="btn border p-2 m-4 bc" onClick={()=>navigate("/products")}>Back</button>
   <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold text-uppercase">Your Cart</h2>

      {cart.length === 0 ? (
        <h4 className="text-center text-muted">Your cart is empty 🛒</h4>
      ) : (
        <div className="table-responsive shadow rounded-3">
          <table className="table align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>Product Name</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-img img-fluid rounded"
                    />
                  </td>
                  <td className="fw-semibold fs-4">{item.name}</td>
                  <td className='fs-4'>₹{item.price}</td>
                  <td className=''>
                    <div className='d-flex justify-content-center'>
                   <span onClick={()=>dis(minQty(item.id  ))} className='btn border'><TiMinus size={20} /></span> 
                   <label className="form-control qty-input "
                      style={{ width: "80px" }}
                    >{item.qty || 1}</label> <span onClick={()=>dis(addQty(item.id))} className='btn border'><TiPlus size={20} /></span> </div>
                  </td>
                  <td className="fw-bold text-success fs-4">
                    ₹{item.price * (item.qty || 1)}
                  </td>
                  <td>
                    <button 
                    onClick={()=>dis(remC(item.id))} 
                    className='btn btn-1 border re' ><span><RiDeleteBin7Line size={27} /></span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-end pe-4 pb-3">
            <h4 className="fw-bold">
              Grand Total: <span className="text-primary">₹{grandTotal}</span>
            </h4>
            <button className='btn border btn-1 ms-5' onClick={checkout}> <span>Checkout </span></button>
          </div>
        </div>
      )}
    </div>

  

       
      
    </>
  )
}

export default Cart
