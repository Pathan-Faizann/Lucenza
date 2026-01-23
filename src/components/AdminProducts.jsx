import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
// import { removeProduct } from "../redux/slice"; // 🔹 apne redux slice me action banana hoga
// import { remProduct } from "../redux/slice";
import { toUpdatePro } from "../redux/slice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const AdminProducts = () => {
  const [products,setProducts] = useState([]) 
  const dis = useDispatch();
  const navigate = useNavigate()

  let getProducts = async()=>{
    let res =await axios.get("http://localhost:3000/lucenzaProducts/getProducts")
    setProducts(res.data)
    console.log(res.data);

  }

  useEffect(() => {
    getProducts()
    
   
  }, [])

  function handleUpdate(item){
    dis(toUpdatePro(item))
    navigate("/updatePro")
  }
  

  const handleRemove = async(id) => {
    if (window.confirm("Are you sure you want to remove this product?")) {
     
      await axios.delete(`http://localhost:3000/lucenzaProducts/deleteProducts/${id}`)
      getProducts()
    }
  };

  return (
    <div className="bg-dark pblock">
            <button className="btn border bg-dark text-white p-2 m-4 position-absolute start-0" onClick={()=>navigate(-1)}>Back</button>

    <div className="container py-5">
        <div className="d-flex justify-content-end me-5">
      <button onClick={()=>navigate("/addproducts")} className="btn border text-white text-decoration-none">Add Products </button>

        </div>
      <h2 className="text-center fw-bold mb-4 text-light bg-dark p-3 rounded">
        All Products
      </h2>

      {products && products.length > 0 ? (
            <div className="table-responsive">
          <table className="table table-dark table-hover table-bordered align-middle shadow-lg">
            <thead className="table-primary text-center">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price (₹)</th>
                <th>Description</th>
                <th>Action</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod, index) => (
                <tr key={prod._id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      width="130"
                      height="130"
                      className="rounded shadow-sm"
                      style={{ objectFit: "cover" }}
                    />
                  </td>
                  <td className="text-center">{prod.name}</td>
                  <td className="text-center">{prod.category}</td>
                  <td className="text-center fw-semibold text-success">
                    ₹{prod.price}
                  </td>
                  <td className="text-center">{prod.desc}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger btn-sm px-3 fw-semibold"
                      onClick={() => handleRemove(prod._id)}
                    >
                      Remove
                    </button>
                  </td>
                   <td className="text-center">
                    <button
                      className="btn btn-primary btn-sm px-3 fw-semibold"
                      onClick={() => handleUpdate(prod)}
                    >
                      update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
          <p className="text-center text-muted fs-5">No products found</p>
        ) }
    </div>
    </div>
  );
};

export default AdminProducts;
