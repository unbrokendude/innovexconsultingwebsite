import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos de nous</a></li>
            <li><a href="#">Carrières</a></li>
            <li><a href="#">Nos consultants</a></li>
            <li><button className='btn'>Nous contacter</button></li>
        </ul>
    </nav>
  )
}

export default Navbar