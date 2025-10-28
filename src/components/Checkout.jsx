import React, { useState ,useEffect} from "react";
import "./check.css"; 
import { useSelector ,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../redux/slice";

const Checkout = () => {
  const user = useSelector((state) => state.slice.Logged);
  const amount = useSelector((state)=>state.slice.totalAm)
  const ord = useSelector((state)=>state.slice.orders)
  const dis = useDispatch()
  const [order,setOrder] = useState({})
  const [Sorder,setSOrder] = useState({})
  useEffect(() => {
    // console.log(order);
    console.log(Sorder)
    console.log(ord);
    
    
    
  }, [order,Sorder,ord])
  
  const navigate = useNavigate()
  const [payType, setPayType] = useState("cod");
   function save(e){
    e.preventDefault()
    if(payType==="card"){
      setOrder({...order,type:payType})
    }
    else if(payType === "upi"){
      setOrder({...order,type:payType})
    }
    else{
      setOrder({...order,type:payType})
    }

    let OrderDetails={...user,payment:order,amt:amount}
    setSOrder(OrderDetails)
    dis(addOrder(OrderDetails))


  }

  function get(e){
    setOrder({...order,[e.target.name]:e.target.value})
  }

  return (
    <>
        <button className="btn border p-2 m-4 bc" onClick={()=>navigate(-1)}>Back</button>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7 shadow-lg p-4 rounded bg-light">
         
          <div className="mb-4 text-center">
            <h4 className="fw-bold  text-start" style={{ color: "#344966" }}>
              Delivery Address
            </h4>
            <p className="text-muted text-start mb-5 mb-0">
              {user.address || "A-202, Skyline Apartment, Surat, Gujarat"}
            </p>
          </div>

        
          <h5 className="fw-semibold mt-5 mb-5" style={{ color: "#263c5cff" }}>
            Deliver to: {user.name}
          </h5>

        
          <form>
            <div className="mb-3">
              <label htmlFor="">Amount Payable : ₹{amount}</label> <br /> <br />
              <label className="form-label fw-semibold" style={{ color: "#344966" }}>
                Select Payment Type
              </label>
              <select
                className="form-select border-primary"
                value={payType}

                onChange={(e) => setPayType(e.target.value)}
              >
                <option  value="cod">Cash on Delivery</option>
                <option  value="card">Credit / Debit Card</option>
                <option  value="upi">UPI</option>
              </select>
            </div>

           
            {payType === "card" && (
              <div className="p-3 rounded" style={{ background: "#f6f9fc" }}>
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input type="text" value={order.cardno||""} name="cardno" onChange={(e)=>get(e)}  className="form-control" maxLength={16 } placeholder="XXXX-XXXX-XXXX-XXXX" />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiry Date</label>
                    <input type="month" value={order.cdate||""} name="cdate" onChange={get} className="form-control" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV</label>
                    <input type="password" value={order.cvv||""} name="cvv" onChange={get} className="form-control" maxLength={3} placeholder="***" />
                  </div>
                </div>
              </div>
            )}

            {payType === "upi" && (
              <div className="mb-3 p-3 rounded" style={{ background: "#f6f9fc" }}>
                <label className="form-label">UPI ID</label>
                <input type="text" value={order.upid||""} name="upid" onChange={get} className="form-control" placeholder="example@upi" />
              </div>
            )}

           

         
            <div className="text-center mt-4">
              <button
              onClick={save}
                type="submit"
                className="btn btn-1 w-25 text-white border px-4 py-2"
                style={{ backgroundColor: "#969695ff" }}
              >
                <span>
                  Place Order
                  </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Checkout;
