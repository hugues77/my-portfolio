// import React from 'react'
import './Navbar.scss';
import logo from '../../assets/images/logo_hugues.png'
import { useEffect, useState } from 'react';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
const [menu, setMenu] = useState(false);

useEffect(() => {
  window.addEventListener('scroll', () =>{
    window.scrollY > 100 ? setMenu(true) : setMenu(false)
  })
},[]) 

//toggle Menu phone
const [mobileMenu, setMobileMenu] = useState(false);
const toggleButton = () =>{
  mobileMenu ? setMobileMenu(false): setMobileMenu(true)
}


  return (
    <nav className= {`${menu ? 'active': ''}`}>
      <Link to='header' spy={true} smooth={true} offset={50} duration={500} className= 'logo'> 
        <img src={logo} alt="image logo de hugues eyong" />
        <div>Hugues EYONG</div>
      </Link>
      <ul className={mobileMenu ? '': 'hide-mobile-menu'}>
        <li><Link to="header" spy={true} smooth={true} offset={50} duration={500} onClick={()=> toggleButton()}>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-175} duration={500} onClick={()=> toggleButton()}>A propos</Link></li>
        <li><Link to="realisation" spy={true} smooth={true} offset={-170} duration={500} onClick={()=> toggleButton()}>Mes réalisations</Link></li>
        <li><Link to="outils" spy={true} smooth={true} offset={-170} duration={500} onClick={()=> toggleButton()}>Mes outils</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-170} duration={500} onClick={()=> toggleButton()}>Contact</Link></li>
      </ul>
      <FontAwesomeIcon icon={faBarsStaggered} className='icon-menu' onClick={()=>toggleButton()} />
        {mobileMenu && <div className="info-rx">
          <a href="https://www.linkedin.com/in/hugues-eyong-ebun-939b41337/"><div className='icon'><FontAwesomeIcon icon={faLinkedinIn}  /></div></a>
          <a href="https://github.com/hugues77" target='_blank'><div className='icon'><FontAwesomeIcon icon={faGithub}  /></div></a>
          <a href="https://wa.me/+33651294692"><div className='icon'><FontAwesomeIcon icon={faWhatsapp}  /></div></a>
        </div>}
    </nav>
  )
}

export default Navbar
