// import React from 'react'
import './Navbar.scss';
import logo from '../../assets/images/logo_hugues.png'
import { useEffect, useState } from 'react';

const Navbar = () => {
const [menu, setMenu] = useState(false);

useEffect(() => {
  window.addEventListener('scroll', () =>{
    window.scrollY > 100 ? setMenu(true) : setMenu(false)
  })
},[])


  return (
    <nav className= {`${menu ? 'active': ''}`}>
      <a className='logo' href="/">
        <img src={logo} alt="image logo de hugues eyong" />
        <div>Hugues EYONG</div>
      </a>
      <ul>
        <li>Home</li>
        <li>A propos</li>
        <li>Mes réalisations</li>
        <li>Mes outils</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
