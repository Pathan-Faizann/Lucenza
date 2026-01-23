import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import "./view.css";
import { useNavigate, useParams } from "react-router-dom";
import { addCart } from "../redux/slice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

const View = () => {
  const [selected, SetSelected] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const dis = useDispatch();
  const [click, setClick] = useState(false);
  const [islog,SetIslog] = useState(false)

  useEffect(() => {
    async function getPro() {
      let res = await axios.get(
        `http://localhost:3000/lucenzaProducts/product/${id}`,{withCredentials:true}
      );
      SetSelected(res.data.data);
      console.log(res);
    }
    getPro();
    check()
  }, []);

  async function check() {
    let result = await axios.get("http://localhost:3000/lucenzaProducts/view",{withCredentials:true})
    console.log(result);
    if(result.data.success){
      SetIslog(true)
    }
    
    
  }

  function Carting(item) {
    if (click == false) {
      if(islog){
        setClick(true);
        let Qitem = { ...item, qty: 1 };
        dis(addCart(Qitem));
        console.log(Qitem);

      }
      else{
        toast.warning("Login First Please!");

      }
      
   
        
   
        // alert("Login First")
        //  navigate("/cart");
    }
  }
  return (
   <div className="pb container py-4">
  <div className="row justify-content-center align-items-center product-card shadow-lg rounded-4 p-3 p-md-4">

    {/* IMAGE */}
    <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
      <img className="img-fluid view-img" src={selected.image} alt="product" />
    </div>

    {/* DETAILS */}
    <div className="col-12 col-md-7">
      <div className="d-flex flex-column h-100 justify-content-between">

        <div>
          <h2 className="fw-bold mb-3 text-center text-md-start">
            {selected.name}
          </h2>

          <h4 className="price mb-2 text-center text-md-start">
            ₹ {selected.price}
            <span className="ms-3 fs-6 off">15% OFF</span>
          </h4>

          <p className="text-muted small mb-4 text-center text-md-start">
            {selected.desc}
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
          <button
            onClick={() => Carting(selected)}
            className="btn btn-dark px-4 py-2 rounded-pill"
          >
            {click === false ? "Add to Cart" : "Go to Cart"}
          </button>

          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-secondary px-4 py-2 rounded-pill"
          >
            Back
          </button>
        </div>

      </div>
    </div>

  </div>
</div>


  );
};

export default View;
