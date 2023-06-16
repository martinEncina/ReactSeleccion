import React, { useState, useEffect } from 'react';
import Banner from "../components/Banner/Banner";
import Card1 from "../components/Card/Card1";
import "../styles/Home.css";
import { useAppContext } from "../../src/Context/Context";
import Filtro from "../components/Filtro/Filtro";

const Home = () => {
  const { jugadores } = useAppContext();
  const [filtrado, setFiltrado] = useState([]);

  useEffect(() => {
    setFiltrado(jugadores);
  }, [jugadores]);

  const handleFilterChange = (filteredData) => {
    setFiltrado(filteredData);
  };

  return (    
    <div>     
      <Banner />
      <Filtro onFilterChange={handleFilterChange} />
      
      <section className="container-fluid justify-content-center">
        <div className="row justify-content-center">
          {filtrado.map((jugador) => (
            <Card1 
              name={jugador.name.toUpperCase()}
              number={jugador.number}
              foto={jugador.foto}
              key={jugador._id} 
            />
          ))}
        </div>  
      </section>
    </div>
  ); 
}

export default Home;
