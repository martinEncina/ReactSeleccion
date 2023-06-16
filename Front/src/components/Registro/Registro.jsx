import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Registro.css"


const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages,setmessages] =  useState("");
  const DB_URL = "http://localhost:5000";
  const url = `${DB_URL}/user/register`;
  const navigate = useNavigate();

  const handleSingup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, {
        email: email,
        password: password,
      });

      if (response.status === 201) {
        
        setEmail("");
        setPassword("");
        navigate("/sesion");
        setmessages("Usuario registrado corectamente");
        
      } else {
        console.log("Logueo Exitoso", response.data.message);
        setmessages(response.data.message);
      }
    } catch (error) {
      console.log("Hubo un problema con la petición:", error.response.data.message);
      setmessages(error.response.data.message);
    }
  };
console.log(messages);
  return (
    <div className="container  d-flex justify-content-center align-items-center">
      
      <form onSubmit={handleSingup}>
        
        <div className="mb-3 row">
        <h2 className="text-center">REGISTRARSE</h2>
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            
          </label>
       
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
         
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            
          </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
        {messages !== "" && (
  <div className=" text-danger row"  >
    {messages}
  </div>
)}
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4 col-lg-2 ">
            <button type="submit" className="btn btn-warning bg-boton">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registro;
