import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addPro } from "../redux/slice";

const AddProducts = () => {
    const dis = useDispatch()
  const [product, setProduct] = useState({
    id: Date.now(),
    name: "",
    image: "",
    price: "",
    category: "",
  });
  const products = useSelector((state)=>state.slice.products)

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product Added:", product);
    alert("Product Added Successfully!");
    dis(addPro(product))
    setProduct({
      id: Date.now(),
      name: "",
      image: "",
      price: "",
      category: "",
    });
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#1e1e1e" }}
    >
      <div className="col-md-6 col-lg-4 bg-dark text-light rounded shadow-lg p-4">
        <h3 className="text-center mb-4" style={{ color: "#a5c9f8" }}>
          Add New Product
        </h3>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-3">
            <label className="form-label fw-semibold">Product Name</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />
          </div>

        
          <div className="mb-3">
            <label className="form-label fw-semibold">Image URL</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="Paste image link"
              required
            />
          </div>

       
          <div className="mb-3">
            <label className="form-label fw-semibold">Price (₹)</label>
            <input
              type="number"
              className="form-control bg-dark text-light border-secondary"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
            />
          </div>

  
          <div className="mb-4">
            <label className="form-label fw-semibold">Category</label>
            <select
              className="form-select bg-dark text-light border-secondary"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Category --</option>
              <option value="Jeans">Jeans</option>
              <option value="Tshirt">T-shirt</option>
              <option value="Shoes">Shoes</option>
            
            </select>
          </div>

   
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn text-white px-4 py-2"
              style={{
                backgroundColor: "#344966",
                borderRadius: "8px",
                fontWeight: "600",
              }}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
