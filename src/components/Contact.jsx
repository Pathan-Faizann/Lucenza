import React from 'react'
import "./Contact.css"
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
 
<section className="contact-area">
   <div className="container">
      <div className="row">
         <div className="col-xl-7 animate__animated animate__fadeInLeft col-lg-8">
            <div className="section-title  mt-45">
               <h3 className="title">Get in touch</h3>
            </div>
            <div className="contact-form  form-style-four mt-15">
               <form action="#">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="form-input mt-15">
                           <label>Full Name</label>
                           <div className="input-items default">
                              <i className="lni lni-user"></i>
                              <input type="text" placeholder="name " />
                           </div>
                        </div>
                    
                     </div>
                     <div className="col-md-6">
                        <div className="form-input mt-15">
                           <label>Email Address</label>
                           <div className="input-items default">
                              <i className="lni lni-envelope"></i>
                              <input type="text" placeholder="email@.com" />
                           </div>
                        </div>
                    
                     </div>
                     <div className="col-md-6">
                        <div className="form-input mt-15">
                           <label>Phone Number</label>
                           <div className="input-items default">
                              <i className="lni lni-phone"></i>
                              <input type="text" placeholder="01234567890" />
                           </div>
                        </div>
                 
                     </div>
                     <div className="col-md-6">
                        <div className="form-input mt-15">
                           <label>Subject</label>
                           <div className="input-items default">
                              <i className="lni lni-bubble"></i>
                              <input type="text" placeholder="Type here" />
                           </div>
                        </div>
                   
                     </div>
                     <div className="col-md-12">
                        <div className="form-input mt-15">
                           <label>Your Message</label>
                           <div className="input-items default">
                              <i className="lni lni-pencil-alt"></i>
                              <textarea
                                 placeholder="Type your message here"
                                 ></textarea>
                           </div>
                        </div>
                
                     </div>
                     <div className="col-md-12">
                        <div className="single-form mt-15">
                           <div className="input-form rounded-buttons">
                              <button
                                 className="btn primary-btn bbt rounded-full"
                                 type="submit"
                                 >
                              SEND MESSAGE
                              </button>
                           </div>
                        </div>
                     
                     </div>
                  </div>
            
               </form>
            </div>
     
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 mb-5 col-sm-8 m-c animate__animated animate__fadeInRight offset-xl-1">
            <div className="section-title mt-5">
               <h3 className="title">Contact Information</h3>
            </div>
            <div className="contact-info">
               <ul className="info">
                  <li>
                     <div className="single-info">
                        <div className="info-icon">
                          <IoLocationSharp />
                        </div>
                        <div className="info-content">
                           <p className="text">
                              V3 Corner, Honey Park Road, Adajan, Surat 395003,
                              India
                           </p>
                        </div>
                     </div>
              
                  </li>
                  <li>
                     <div className="single-info">
                        <div className="info-icon">
                          <IoMdCall />
                        </div>
                        <div className="info-content">
                           <p className="text">+91 873 543 3555</p>
                        </div>
                     </div>
                
                  </li>
                  <li>
                     <div className="single-info">
                        <div className="info-icon">
                          <IoMdCall />
                        </div>
                        <div className="info-content">
                           <p className="text">+91 813 454 6351</p>
                        </div>
                     </div>
                  
                  </li>
                  <li>
                     <div className="single-info p">
                        <div className="info-icon">
                           <MdEmail />
                        </div>
                        <div className="info-content">
                           <p className="text mb-5">admin@lucenza.com</p>
                        </div>
                     </div>
                   
                  </li>
               </ul>
               
            </div>
        
         </div>
      </div>
 
   </div>

</section>

      
    </>
  )
}

export default Contact
