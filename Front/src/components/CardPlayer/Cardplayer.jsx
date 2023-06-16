import React from 'react'
import "./Cardplayer.css"


const CardPlayer = ({name, number,score,position, originClub,matches, goales,foto}) => {
  return (
<section className='container vh-100 d-flex justify-content-center align-items-center '>
  <div class="card mb-3 border border-4 border-warning" style={{width: "80%"}}>
    <div class="row g-0">
      <div class="col-md-4 align-self-end">
        <img src={foto} class="img-fluid" alt="..."/>
      </div>
      <div class="col-md-8 text-card">
        <div class="card-body"> 
          <h1 class="card-title border-bottom border-4 border-warning ">{name}</h1>
          <h4>Posición: {position}</h4>
           <ul>
            <li>Número : {number}</li>
            <li>Score : {score}</li>
            <li>Club de origen : {originClub}</li>
            <li>Partidos : {matches}</li>
            <li>Goles : {goales}</li>            
          </ul>
        </div>
      </div>
    </div>
 </div>
</section>
  )
}

export default CardPlayer
