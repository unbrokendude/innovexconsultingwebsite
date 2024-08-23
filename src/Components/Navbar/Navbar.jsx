import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <nav className='container'>
       <NavLink to="/" className='logo-link'>
      <img src={logo} alt="Logo" className='logo'/>
      </NavLink>
      <form onSubmit={handleSearchSubmit} className='search-container'>
        <button type='submit' className='search-button'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
        </button>
        <input
          type='text'
          placeholder='Search...'
          className='search-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <ul>
        <li><NavLink to="/" exact className="nav-link" activeClassName="active">Accueil</NavLink></li>
        <li><NavLink to="/about" className="nav-link" activeClassName="active">À propos de nous</NavLink></li>
        <li><NavLink to="/careers" className="nav-link" activeClassName="active">Carrières</NavLink></li>
        <li><NavLink to="/consultants" className="nav-link" activeClassName="active">Notre équipe</NavLink></li>
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
