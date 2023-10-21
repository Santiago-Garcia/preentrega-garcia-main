import React from 'react';
import CartWidget from './carrito';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <a className="navbar-brand" href="#"><img alt="logoempresa" src="/Fotos/logo_evn.jpg" height="100" /></a>
          <button className="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/start">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/:category">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contacto</Link>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;