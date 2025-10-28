import React from 'react'
import "./foot.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

<footer className="footer-area c-f parent footer-one">
   <div className="footer-widget">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-4 col-sm-12">
               <div className="f-about">
                  <div className="footer-logo">
                     <a href="#">
                     <img className='img-fluid logo' src="/logo.jpg" alt="Logo" />
                     </a>
                  </div>
                  <p className="text">
                     © 2025 Lucenza Studio — Redefining modern fashion.
                  </p>
               </div>
               <div className="footer-app-store">
                  <h5 className="download-title">Download Our App Now!</h5>
                

               </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
               <div className="footer-link">
                  <h6 className="footer-title">Company</h6>
                  <ul>
                     <li><a href="#">About</a></li>
                     <li><Link to="/admin" >Admin</Link></li>
                    <li><a href="#">Marketing</a></li>
                     <li><a href="#">Awards</a></li>
                  </ul>
               </div>
       
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
               <div className="footer-link">
                  <h6 className="footer-title">Services</h6>
                  <ul>
                     <li><a href="#">Products</a></li>
                     <li><a href="#">Business</a></li>
                     <li><a href="#">Developer</a></li>
                     <li><a href="#">Insights</a></li>
                  </ul>
               </div>
        
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
         
               <div className="footer-contact">
                  <h6 className="footer-title">Help & Support</h6>
                  <ul>
                     <li>
                        <i className="lni lni-map-marker"></i> Surat, Gujarat,
                        India
                     </li>
                     <li className='lie'> +883 556 8545</li>
                     <li className='lie'> support@lucenza.com</li>
                  </ul>
               </div>
       
            </div>
         </div>
   
      </div>
 
   </div>

   

</footer>

      
    </>
  )
}

export default Footer
