import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./login.css"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { addLog } from '../redux/slice';

const Login = () => {
    const data = useSelector((state)=>state.slice.userDetails)
    const dis = useDispatch()
    const isAuth = localStorage.getItem("auth")
     const navigate = useNavigate()
    const [login,setLogin] = useState({
        username:"",
        password:""

    })
    function change(e){
        setLogin({...login,[e.target.name]:e.target.value})
    }
    useEffect(() => {
    if(isAuth){
      navigate("/")
    }
   
  }, [isAuth])
    function save(e){
        e.preventDefault();
     
       
        (data.map((item)=>{
             if(item.username=== login.username && item.password === login.password){
            alert("Correct Id and Password")
               localStorage.setItem("auth","true")
               navigate("/")
               dis(addLog(item))
        }
        else{
            alert("Wrong Id or Password")
        }
        }))

    }
  return (
    <>
     <button className="btn border p-2 m-4 bc" onClick={()=>navigate(-1)}>Back</button>
    <Link className='btn border bc c' to="/admin">Admin</Link> 
    <div className=' parent1 d-flex flex-column justify-content-center align-items-center '>
      <h1 className='display-4 mb-5'>Login</h1>
    <form className='w-50 shadow p-5 for lF animate__animated animate__jackInTheBox animate__slow' onSubmit={save} action="">
        <label className="form-label text-dark" htmlFor="">
            Username
          </label>
          <input type="text" className="form-control" name="username" onChange={change} value={login.name} />
          <label className="form-label text-dark mt-3" htmlFor="">
            Password
          </label>
          <input type="text" className="form-control" name="password" onChange={change} value={login.password} />
          <div className='d-flex justify-content-center '>
            <button className='btn-1 mt-5 border border-3'>
          <span className=""  type='submit'>Login</span>

            </button>

          </div>
          
    </form>
      
    </div>
    </>
  )
}

export default Login
