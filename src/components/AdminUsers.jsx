import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import axios from "axios"


import { AiFillDelete } from "react-icons/ai";



const AdminUsers = () => {
    // const users = useSelector((state)=>state.slice.userDetails ||[])
    let [uData,setuData] = useState([])
   

    let fetchUser = async ()=>{
      let res = await axios.get("http://localhost:3000/lucenza/getusers")
      setuData(res.data)

    }

    async function remove(id){
       await axios.delete(`http://localhost:3000/lucenza/deleteUser/${id}`)
      fetchUser()

    }

    useEffect(() => {
      fetchUser()
  
 
}, [])
    
  return (
    <div className=" bg-dark pa py-5">
         <h2 className="text-center fw-bold mb-4 text-light bg-dark p-3 rounded">
           All Users
         </h2>
   
         {uData.length === 0 ? (
           <p className="text-center text-white fs-5">No Users available</p>
         ) : (
           <div className="table-responsive">
             <table className="table table-dark table-hover table-bordered align-middle shadow-lg">
               <thead className="table-primary text-center">
                 <tr>
                   <th>#</th>
                   <th>Customer Name</th>
                   <th>Email</th>
                   <th>Phone</th>
                   <th>Address</th>
                   <th>Remove</th>
                 </tr>
               </thead>
               <tbody>
                 {uData.map((item, index) => (
                   <tr key={index}>
                     <td className="text-center fw-bold">{index + 1}</td>
                     <td>{item.name}</td>
                     <td>{item.email}</td>
                     <td>{item.phone}</td>
                     <td>{item.address}</td>
                      <td className='text-center dus'><button onClick={()=>remove(item._id)}><AiFillDelete  size={27} /></button></td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         )}
       </div>
  )
}

export default AdminUsers
