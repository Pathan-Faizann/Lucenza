import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const UpdateProduct = () => {
    const product = useSelector((state)=>state.slice.toUpdate)
    const [updated,setupdated] = useState(product)
    const navigate = useNavigate()
   
    useEffect(() => {
    console.log(updated);
    
    }, [])
    

    function handleChange(e){
        setupdated({...updated,[e.target.name]:e.target.value})
        
    }
    async function handleSubmit(e){
        e.preventDefault()
        console.log(updated);
        await axios.put(`http://localhost:3000/lucenzaAdmin/updateProducts/${updated._id}`,updated)
        alert("Product has been updated!")
        setupdated({})
        
    }


  return (
    <div>
         <div>
      <button className="btn border bg-dark text-white p-2 m-4 position-absolute start-0" onClick={()=>navigate(-1)}>Back</button>
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#1e1e1e" }}
    >

      <div className="col-md-6 col-lg-4 bg-dark text-light rounded shadow-lg p-4">
        <h3 className="text-center mb-4" style={{ color: "#a5c9f8" }}>
           Update Product
        </h3>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-3">
            <label className="form-label fw-semibold">Product Name</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              name="name"
              value={updated.name || ""}
              onChange={handleChange}
              placeholder="Enter updated name"
              required
            />
          </div>

        
          <div className="mb-3">
            <label className="form-label fw-semibold">Image URL</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              name="image"
              value={updated.image || ""}
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
              value={updated.price || ""}
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
              value={updated.category || ""}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Category --</option>
              <option value="Jeans">Jeans</option>
              <option value="Tshirt">T-shirt</option>
              <option value="Shoes">Shoes</option>
            
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              name="desc"
              value={updated.desc || ""}
              onChange={handleChange}
              placeholder="Description"
              required
            />
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
              Update 
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
      
    </div>
  )
}

export default UpdateProduct
