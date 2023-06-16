import React from 'react'

import "./Card1.css"
import { Link } from "react-router-dom";


const Card1 = ({name, number, foto}) => {
  

  return (
  <Link className='col-xl-2 col-lg-3 col-md-4 col-sm-12 m-3 text-decoration-none'  to={`/jugador/${name}`}> 
    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-12 m-2'>
      <div className="card bg-name" style={{ width: "12rem", minHeight:"16rem"}}>
        <div className="card-header p-0 bg-image d-flex justify-content-center align-items-center ps-2" style={{backgroundImage: "url('https://wallpaperstock.net/argentina-bandera-wallpapers_14427_1024x768.jpg')" , backgroundSize: "cover", height:"11rem"}}>
          <div className="d-flex flex-column align-self-end " >
            <span className="card-rating text-center text-warning fw-bold p-1 text-nowrap fs-3">{parseInt(number)}</span>
            {/* <img className="img-fluid m-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club" style={{ width: "2rem"}}/> */}
          
        </div>
            <img src={foto} className="img-fluid align-self-end me-1" alt="..." style={{ width: "10rem"}}/>

       </div>
         <div className="card-body bg-name d-flex align-items-center justify-content-center ">
        <h5 className="card-title  text-center bg.name" style={{height:"4rem"}}>{name}</h5>
         </div>
    </div>
  </div>
</Link>
  )
}

export default Card1
