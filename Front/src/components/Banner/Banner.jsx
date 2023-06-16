import React from 'react'
import banner1 from "../../imgs/fondo1.jpg"
import banner2 from "../../imgs/banner2.jpg"
import banner3 from "../../imgs/Banner1.jpg"
import "./Banner.css"


const Banner = () => {
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner"> 
            <div className="carousel-item active d-flex justify-content-start align-items-start"  data-bs-interval="7000">
            <img src={banner1} className=" img-fluid object-fit-cover " alt="..."/>
            </div>
            <div className="carousel-item  " data-bs-interval="7000">
            <img src={banner3} className="d-block w-100 " alt="..."/>
            </div>
            <div className="carousel-item  ">
            <img src={banner2} className="d-block w-100 " alt="..."/>
            </div>
        </div>
   </div>
   <div className="espacio">
        <h1>
        CORONADOS DE GLORIA VIVAMOS !!!
        </h1>
      </div>
   </>
  )
}

export default Banner
