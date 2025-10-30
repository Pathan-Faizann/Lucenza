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
     <div className='par d-flex justify-content-around align-items-center'>
      <div className='row justify-content-around align-items-center'>
        <div className='col-6 animate__animated animate__fadeInLeft animate__slow  '><h2 className='text-dark display-4 text-center h2'>From streets to spotlight, <br /> every stitch we make is built <br /> for those who dare to stand out.</h2></div>
        <div className='col-6 part-2 animate__animated animate__fadeInRight animate__slow'>
          <img className='img-fluid img ' src="/Lucenza/Fhero.jpg" alt="" />
          <img className='img-fluid anime animate__animated animate__fadeInDown animate__slower animate__delay-1s ' src="/Lucenza/aniFin.png" alt="" />
          </div>
      </div>

 </div>   
    

      
    </>
  )
}

export default Home
