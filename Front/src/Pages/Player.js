import React from 'react'
import CardPlayer from "../components/CardPlayer/Cardplayer";
import { useAppContext } from "../../src/Context/Context";
import { useParams } from 'react-router-dom';


const Player = () => {
    const { jugadores } = useAppContext();
    const params = useParams();
    
   const nombre = params
// console.log(nombre.theid);
   
    
    const filtrado = jugadores.filter((jugador) => jugador.name.toLowerCase() === nombre.theid.toLowerCase());
    const datosJugador = filtrado[0];
    console.log(datosJugador.number);
    
  return (
    <div>      
      
      <CardPlayer 

       name={datosJugador.name}
       number={datosJugador.number}
       score={datosJugador.score}
       position={datosJugador.position}
       originClub={datosJugador.originClub}
       matches={datosJugador.matches}
       goales={datosJugador.goales}
       foto={datosJugador.foto}
       
      />
    </div>
  )
}

export default Player