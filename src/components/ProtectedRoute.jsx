import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const isAuth = localStorage.getItem("auth");
   

if(!isAuth){
    alert("Login first") ;
    return <Navigate to="/login" replace />
}
return children
}

export default ProtectedRoute
