import React from 'react'
import "./abo.css"
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate  =useNavigate()
  return (
    <div>
<section className="about-area about-one">
        <button className="btn border p-2 ms-3 bc" onClick={()=>navigate(-1)}>Back</button>
   <div className="container">
      <div className="row">
         <div className="col-lg-12 ">
            <div className="about-title text-center">
               <h2 className="title fw-bold">Why Choose Us</h2>
            </div>
         </div>
      </div>

      <div className="row justify-content-center">
         <div className="col-md-4 col-sm-8">
            <div className="single-about-items animate__animated animate__bounceInUp">
               <div className="items-icon">
                 <img src="/fit.jpg" className='img-fluid ico-img' alt="" />
               </div>
               <div className="items-content">
                  <h4 className="items-title">Perfect Fit Guarantee </h4>
                  <p className="text">
                     Short description for the ones who look for something new
                  </p>
               </div>
            </div>
       
         </div>
         <div className="col-md-4 col-sm-8">
            <div className="single-about-items animate__animated animate__bounceInUp">
               <div className="items-icon">
                 <img src="/cust.jpg" className='img-fluid ico-img' alt="" />
               </div>
               <div className="items-content">
                  <h4 className="items-title"> Customer Satisfaction First</h4>
                  <p className="text">
                     Short description for the ones who look for something new
                  </p>
               </div>
            </div>
        
         </div>
         <div className="col-md-4 col-sm-8">
            <div className="single-about-items animate__animated animate__bounceInUp ">
               <div className="items-icon">
               <img src="/neww.jpg" className='img-fluid ico-img' alt="" />
               </div>
               <div className="items-content">
                  <h4 className="items-title">Timeless Style</h4>
                  <p className="text">
                     Short description for the ones who look for something new
                  </p>
               </div>
            </div>
          
         </div>
      </div>
  
   </div>

</section>

      
    </div>
  )
}

export default About
