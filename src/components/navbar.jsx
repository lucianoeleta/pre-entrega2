import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Ferretería </h1>
      </Link>
      <ul className="nav-links">
        <li><Link to="/category/herramientas">Herramientas</Link></li>
        <li><Link to="/category/construccion">Construcción</Link></li>
        <li><Link to="/category/electrico">Eléctrico</Link></li>
      </ul>
      
    </nav>
  );
}

export default NavBar;
