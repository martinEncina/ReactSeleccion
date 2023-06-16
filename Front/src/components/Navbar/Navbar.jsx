import React from 'react'
import logo  from "../../imgs/logoAfa.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useAppContext } from "../../Context/Context"

const Navbar = ( ) => {

  const { estado, setEstado } = useAppContext();
  const cerrarSesion = () => {  localStorage.removeItem('token');
  setEstado(false);} 

  return (
    <nav className="navbar navbar-expand-lg " >            
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img className="logo" src={logo} alt="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to="/imagenes">Imagenes</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/videoteca" className="nav-link active" aria-current="page">
          Videoteca
          </Link>
        </li>        
      </ul>
      <Link to="/registro">
      <button type="button" class="btn btn-warning">Registrarse</button>
      </Link>
      {!estado ? <Link to={"/sesion"}  className="btn  btn-outline-warning m-1"><strong>Iniciar sesion</strong></Link> : <button className="btn  btn-outline-warning m-1" onClick={cerrarSesion}> <strong>Cerrar sesion</strong></button>}
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
