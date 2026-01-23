import React from 'react'
import { Navigate } from 'react-router-dom';
import {toast} from "react-toastify"

const ProtectedRoute = ({children}) => {
    const isAuth = localStorage.getItem("user");
   

if(!isAuth){
    // alert("Login first") ;
    toast.warning("Login First",{
        position:'top-right'
    })
    return <Navigate to="/login" replace />
}
return children
}

export default ProtectedRoute
