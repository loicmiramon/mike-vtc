import React, { useState } from 'react'
import logoWhite from '../../assets/images/logo/logo-blanc-sf.png'
import logoBlue from '../../assets/images/logo/logo-bleu-sf.png'
import iconeInstagram from '../../assets/icones/instagram.png'
import iconeFacebook from '../../assets/icones/facebook.png'
import iconeLinkedin from '../../assets/icones/linkedin.png'
import { Sling as Hamburger } from 'hamburger-react'

function Navbar() {

  const [showNav, setShowNav] = useState(false);
  
  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  const handleClearNav = () => {
    setShowNav(!showNav);
  }

  return (
    <aside className={`aside-navbar ${showNav ? "aside-navbar-white" : ''}`}>
      <img className="logo-navbar" src={`${showNav ? logoBlue : logoWhite}`} alt="Logo Mike VTC" />
      <div onClick={() => handleShowNav()}  className="container-burger-navbar">
        <Hamburger toggled={showNav}   duration="0.3" color={showNav ? "#2D3E80" : "white"} />
      </div>
      <nav className={`navigation-navbar ${showNav ? "show-nav" : 'hidden-nav'}`}>
        <ul className="list-navigation-navbar">
          <li onClick={handleClearNav} className="lien-navigation-navbar"><a href="#presentation">Presentation</a></li>
          <li onClick={handleClearNav} className="lien-navigation-navbar"><a href="#information">Informations</a></li>
          <li onClick={handleClearNav} className="lien-navigation-navbar"><a href="#services">Services</a></li>
          <li onClick={handleClearNav} className="lien-navigation-navbar"><a href="#reservation">Reservation</a></li>
          <li onClick={handleClearNav} className="lien-navigation-navbar"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="container-reseaux-navbar">
        <a href="https://www.instagram.com"><img className="icone-reseau-navbar" src={iconeInstagram} alt="" /></a>
        <a href="https://www.facebook.com"><img className="icone-reseau-navbar" src={iconeFacebook} alt="" /></a>
        <a href="https://www.linkedin.com"><img className="icone-reseau-navbar" src={iconeLinkedin} alt="" /></a>
      </div>
    </aside>
  )
}

export default Navbar
