import React from 'react'
import { Navigate } from 'react-router-dom';
const AdminProtected = ({children}) => {

    const isAdmin = localStorage.getItem("admin")

    if(!isAdmin){
        alert("Admin access required");
        return <Navigate to="/admin" replace />
    }

  return children;
}

export default AdminProtected
