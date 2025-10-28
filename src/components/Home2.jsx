import React from 'react'
import "./Home2.css"
import { useEffect } from 'react';

const Home2 = () => {
   useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
      });
    }
  }, []);
  return (
    <>
  
<section className="blog-area sec parent pb-5 mb-5">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-lg-4 col-md-8 col-sm-10 ">
            <div className="single-blog blog-style-one shadow " data-aos="fade-right" data-aos-duration='2000'>
               <div className="blog-image">
                  <a href="javascript:void(0)"
                     ><img className='img-fluid' src="/Lucenza/made.jpg" alt="Blog"
                     /></a>
       
               </div>
               <div className="blog-content">
                  <h5 className="blog-title">
                     <p className='fs-2 text-center display-4'>
                    Premium Quality
                     </p>
                  </h5>
                
                  <p className="text-center ">
                    Crafted from the finest materials for unmatched comfort and durability.
Every stitch reflects precision, passion, and perfection.
                  </p>
                
               </div>
            </div>
           
         </div>
         <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-blog blog-style-one shadow " data-aos="fade-up" data-aos-duration='2000'>
               <div className="blog-image ">
                  <a href="javascript:void(0)"
                     ><img className='img-fluid' src="/Lucenza/finall.jpeg" alt="Blog"
                     /></a>
              
               </div>
               <div className="blog-content">
                  <h5 className="blog-title">
                     <p className='fs-2 text-center display-4' >
                     Modern Style
                     </p>
                  </h5>
                  <p className="text-center">
                     Designed for today’s generation that lives bold and confident.
Effortless fashion that blends trend with timeless appeal.
                  </p>
              
               </div>
            </div>
         
         </div>
         <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-blog blog-style-one shadow" data-aos="fade-left" data-aos-duration='2000'>
               <div className="blog-image bimg">
                  <p
                     ><img className='img-fluid' src="/Lucenza/Qua.jpg" alt="Blog"
                     /></p>
                
               </div>
               <div className="blog-content">
                  <h5 className="blog-title">
                     <p className='fs-2 text-center display-4'>
                    Made to Last
                     </p>
                  </h5>
                  
                  <p className="text-center">
                     Built to withstand your hustle — day in, day out.
Because great style should stay as strong as you.
                  </p>
                
               </div>
            </div>
          
         </div>
      </div>
     
   </div>
 
</section>

      
    </>
  )
}

export default Home2
