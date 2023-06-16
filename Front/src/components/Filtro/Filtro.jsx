import React, { useState } from 'react';
import "./Filtro.css";
import { useAppContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Filtro = ({ onFilterChange }) => {
  const { jugadores } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(jugadores);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredData = jugadores.filter((item) => {
      const name = item.name.toLowerCase();
      const position = item.position.toLowerCase();
      const originClub = item.originClub.toLowerCase();

      return name.includes(searchTerm) || position.includes(searchTerm) || originClub.includes(searchTerm);
    });

    setFilteredData(filteredData);
    onFilterChange(filteredData); // Llamar a la función de devolución de llamada con los datos filtrados
  };

  return (
    <div className='container d-flex justify-content-center align-items-center'>
    <div className='col-md-6 col-sm-12 C-Filter my-3 text-center' >
      <label htmlFor="exampleDataList" className="form-label fw-bold">Conoce a los campeones</label>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Nombre del Jugador"
        value={searchTerm}
        onChange={handleSearch}
      />
   </div>
      
    </div>
  );
};

export default Filtro;
