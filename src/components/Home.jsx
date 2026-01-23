import React from 'react'
import "./Home.css"
import "animate.css"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Home = () => {
  const see = useSelector((state)=>state.slice.Logged)
  useEffect(() => {
    console.log(see);
    
  }, [see])
  
  return (
    <>
    <div className="par container">
  <div className="row align-items-center justify-content-center">

    {/* LEFT TEXT */}
    <div className="col-12 col-md-6 text-center animate__animated animate__slow animate__fadeInLeft">
      <h2 className="hero-text">
        From streets to spotlight, <br />
        every stitch we make is built <br />
        for those who dare to stand out.
      </h2>
    </div>

    {/* RIGHT IMAGE */}
    <div className="col-12 col-md-6 position-relative text-center animate__animated animate__slow animate__fadeInRight">
      <img
        src="/Lucenza/Fhero.jpg"
        className="img-fluid main-img"
        alt=""
      />

      {/* THIRD IMAGE (Only laptop+) */}
      <img
        src="/Lucenza/aniFin.png"
        className="img-fluid floating-img d-none d-lg-block animate__animated animate__slower animate__fadeInDown"
        alt=""
      />
    </div>

  </div>
</div>
    

      
    </>
  )
}

export default Home
