import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className='logo'/>
      <ul>
        <li><NavLink to="/" exact className="nav-link" activeClassName="active">Accueil</NavLink></li>
        <li><NavLink to="/about" className="nav-link" activeClassName="active">À propos de nous</NavLink></li>
        <li><NavLink to="/careers" className="nav-link" activeClassName="active">Carrières</NavLink></li>
        <li><NavLink to="/consultants" className="nav-link" activeClassName="active">Nos consultants</NavLink></li>
        <li>
          <NavLink to="/contact" className="nav-link">
            <button className='btn'>Nous contacter</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
