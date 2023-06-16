import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";


// No cambier, aquí es donde inicializo nuestro contexto, por defecto será nulo.
export const Context = createContext();


// Esta función "envuelve" y crea una variable global que afectara de ser necesario a todas las vista/componente

export const AppContext = ({children}) => {	
	const [jugadores, setJugadores] = useState([]);
	const [estado, setEstado] = useState(false);

	// console.log(localStorage.key("token"));

	useEffect(() => {
	fetch("http://localhost:5000/jugador")
	 .then((res) => res.json())
	 .then((data) => setJugadores(data));
	} , []);

	const store = {jugadores,
		estado,  
		setEstado, }


		return (
			<Context.Provider value={store}>
				{children}
			</Context.Provider>
		);
	};
	
	
	export const useAppContext = () => useContext(Context);




