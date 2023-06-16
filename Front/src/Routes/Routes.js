import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../Pages/Home"
import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Player from "../Pages/Player"
import Registro from "../Pages/PageRegistro"
import Sesion from "../Pages/PageSesion"
import NotFound from "../Pages/NotFound"
import Videoteca from '../components/Videoteca/Videoteca';
// import Auth from '../components/Auth/Auth';
import { Navigate } from 'react-router-dom';

const Layout = () => {
  const baseName = "http://localhost:3000/";
  return (
    <div>
       <BrowserRouter baseName ={baseName}> 
       <Navbar />
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jugador/:theid" element={<Player/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/sesion" element={<Sesion/>} />
        {/* <Route path="/videoteca" element={<Auth> <Videoteca/> <Auth/>} />   */}
        <Route path="/videoteca" element={<Videoteca/>} />

        <Route path="*" element={<NotFound/>} />
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default Layout

