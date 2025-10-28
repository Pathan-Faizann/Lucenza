import React, { useState } from 'react'
import "./pro.css"
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addSelected } from '../redux/slice'

const Products = () => {
  const [filtered,setFiltered] = useState([])
  const [selected,setSelected] = useState("")
  const products = useSelector((state)=>state.slice.products)
  const InView = useSelector((state)=>state.slice.selected)
  const dispatch = useDispatch()
  function handle(e){
    let value = e.target.value
    setSelected(value)
    value === "None"?setFiltered([]): setFiltered(products.filter((item)=>item.category === value))
  }
  function sendV(item){
    dispatch(addSelected(item))
  }
  return (
    <div className='conL'>
       <div className="dropdown btn-group m-3">
        <label className=' btn btn-secondary ' >Filter</label>
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   {selected || "None"}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <option className="dropdown-item" value="None" onClick={(e)=>handle(e)} >None</option>
    <option className="dropdown-item" value="Tshirt" onClick={(e)=>handle(e)} >T-shirts</option>
    
    <option className="dropdown-item" value="Jeans" onClick={(e)=>handle(e)}>Jeans</option>
  </div>
</div>
     <div className="container">
        <div className="row g-4">
         
  {filtered.length===0?
  products.map((item,i)=>(
    <div key={i} className="col-md-6">
      <div className="card shadow-sm h-100 border-0">
        <div className='d-flex justify-content-center'>
        <img src={item.image} className="card-img-top img-fluid imgP" alt="Product" />

        </div>
        <div className="card-body text-start">
          <div className='ms-5'>
          <h5 className="card-title fw-bold">{item.name}</h5>
          <p className="card-text fs-5">Price : ₹{item.price}</p>
          </div>
          <div className='d-flex justify-content-center'>

          
          <Link className='btn btn-1 border' onClick={()=>sendV(item)} to="/view" ><span>View</span></Link>
          </div>
        </div>
      </div>
      </div>
       )):
        filtered.map((item,i)=>(
    <div key={i} className="col-md-6">
      <div className="card shadow-sm h-100 border-0">
        <img src={item.image} className="card-img-top img-fluid imgP" alt="Product" />
        <div className="card-body text-start">
          <h5 className="card-title text-start fw-bold">{item.name}</h5>
          <p className="card-text fs-5">Price :₹{item.price}</p>
         <Link className='btn border' onClick={()=>sendV(item)} to="/view" >View</Link>
        </div>
      </div>
      </div>
       ))
       
       
       }
  </div>
      </div>
      
    </div>
  )
}

export default Products
