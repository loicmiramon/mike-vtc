import React, { useState, useEffect } from 'react'
import logoWhite from '../assets/images/logo/logo-blanc-sf.png'
import logoBlue from '../assets/images/logo/logo-bleu-sf.png'
import iconeInstagram from '../assets/icones/instagram.png'
import iconeFacebook from '../assets/icones/facebook.png'
import iconeLinkedin from '../assets/icones/linkedin.png'
import { Sling as Hamburger } from 'hamburger-react'

function Navbar() {

  useEffect(() => {

    const asideNavigation = document.querySelector('.asideMikeVtc');
    const header = document.querySelector('.headerMikeVtc')
    const ratioNavFixed = 1;
    const optionsNavFixed = {
      root: null,
      rootMargin: '0px',
      threshold: ratioNavFixed
    }

    const navFixed = function (entries) {
      entries.forEach(entry => {
        if(entry.intersectionRatio < ratioNavFixed) {
          asideNavigation.classList.add('navFixed');
        } else {
          asideNavigation.classList.remove('navFixed');
        }
      })
    }
    const observerNavFixed = new IntersectionObserver(navFixed, optionsNavFixed)
    observerNavFixed.observe(header)
  }, [])

  const [showNav, setShowNav] = useState(false);
  
  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  const handleClearNav = () => {
    setShowNav(!showNav);
  }

  return (
    <aside className={`asideMikeVtc ${showNav ? "asideWhite" : "asideBlue"}`}>
      <img className="logoMikeVtc" src={`${showNav ? logoBlue : logoWhite}`} alt="Logo Mike VTC" />
      <div onClick={() => handleShowNav()}  className="blocBurger">
        <Hamburger toggled={showNav}   duration="0.3" color={showNav ? "#2D3E80" : "white"} />
      </div>
      <nav className={`navigationMikeVtc ${showNav ? "showNav" : "hiddenNav"}`}>
        <ul className="blocNavigationMikeVtc">
          <li onClick={handleClearNav} className="lienNavMikeVtc"><a href="#presentation">Presentation</a></li>
          <li onClick={handleClearNav} className="lienNavMikeVtc"><a href="#information">Informations</a></li>
          <li onClick={handleClearNav} className="lienNavMikeVtc"><a href="#services">Services</a></li>
          <li onClick={handleClearNav} className="lienNavMikeVtc"><a href="#reservation">Reservation</a></li>
          <li onClick={handleClearNav} className="lienNavMikeVtc"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="blocReseauMikeVtc">
        <a href="https://www.instagram.com"><img className="iconeReseauMikeVtc" src={iconeInstagram} alt="" /></a>
        <a href="https://www.facebook.com"><img className="iconeReseauMikeVtc" src={iconeFacebook} alt="" /></a>
        <a href="https://www.linkedin.com"><img className="iconeReseauMikeVtc" src={iconeLinkedin} alt="" /></a>
      </div>
    </aside>
  )
}

export default Navbar
