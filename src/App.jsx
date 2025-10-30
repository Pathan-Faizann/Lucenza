import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Navbar from './components/Navbar'
import Home2 from './components/Home2'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Products from './components/Products'
import Admin from './components/Admin'
import About from './components/About'
import Contact from './components/Contact'
import View from './components/View'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import Checkout from './components/Checkout'
import AddProducts from './components/AddProducts'
import AdminProtected from './components/AdminProtected'
import AdminOrders from './components/AdminOrders'
import AdminDashboard from "./components/AdminDashboard"
import AdminUsers from './components/AdminUsers'
import AdminProducts from './components/AdminProducts'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<><Navbar/><Home/><Home2/><Footer/></>} />
      <Route path='/register' element={<><Register/></>} />
      <Route path='/login' element={<><Login/></>} />
      <Route path='/products' element={<><Navbar/><Products/><Footer/></>} />
      <Route path='/admin' element={<><Admin/></>} />
      <Route path='/about' element={<><Navbar/><About/><Footer/></>} />
      <Route path='/contact' element={<><Navbar/><Contact/><Footer/></>} />
      <Route path='/view' element={<ProtectedRoute><View/></ProtectedRoute>} />
      <Route path='/checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
      <Route path='/adminorders' element={<AdminProtected><AdminOrders/></AdminProtected>} />  
      <Route path='/adminpanel' element={<AdminProtected><AdminDashboard/></AdminProtected>} />
      <Route path='/adminusers' element={<AdminProtected><AdminUsers/></AdminProtected>} />
      <Route path='/adminProducts' element={<AdminProtected><AdminProducts/></AdminProtected>} />
      <Route path='/cart' element={<> <ProtectedRoute> <Cart/> </ProtectedRoute> </>} />
      <Route path='/addproducts' element={<> <AdminProtected> <AddProducts/> </AdminProtected> </>} />
 
    </Routes>
      
    </>
  )
}

export default App
