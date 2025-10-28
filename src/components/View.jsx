import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./view.css"
import { useNavigate } from 'react-router-dom'
import { addCart} from '../redux/slice'

const View = () => {
    const selected = useSelector((state)=>state.slice.selected)
    const isAuth = localStorage.getItem("auth")
    const navigate = useNavigate();
    const dis = useDispatch()
    const [click,setClick]=useState(false)
    const j = `Premium stretch denim with a modern fit, designed for all-day comfort and timeless style.`
    const tsh = "Designed with premium cotton blend for superior comfort, modern fit, and effortless style."

    function Carting(item){
       
        if (click== false){
            if(isAuth){

                setClick(true)
                let Qitem={...item,qty:1}
                dis(addCart(Qitem))
                console.log(Qitem)
            }
            else{
                alert("Login First")
            }
        }
        else{
            navigate("/cart")
        }

    }
  return (
    <div className='pb d-flex justify-content-center align-items-center '>
       
        <div className='row v-con justify-content-center align-items-center shadow'>
            <div className='col-4'>
                <img className='img-fluid' src={selected.image} alt="iMAGE" />
            </div>
            <div className='col-4  '>
                <div className='row des justify-content-around flex-column'>
                    <p className='fs-2 fw-bold'> {selected.name}</p>
                    <p className='fs-3'>Price : ₹ {selected.price} &nbsp;&nbsp; <span className='fs-5 off'>15% off </span></p>
                    <p>Description : {selected.category == "Jeans"? j : selected.category == "Tshirt"?tsh:"Something nice"}</p>
                    <div className='d-flex justify-content-around align-items-end'>
                        <button onClick={()=> Carting(selected)} className='btn btn-1 add border'><span>{click==false?"Add to cart":"Add more"}</span></button>
                        <button onClick={()=>navigate(-1)} className='btn btn-1 border me-5'><span>back </span></button>
                    </div>
                </div>
            </div>

        </div>
  
      
    </div>
  )
}

export default View
