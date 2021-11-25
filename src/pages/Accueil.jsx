import React from 'react'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Information from '../components/Information'
import Vehicule from '../components/Vehicule'
import Services from '../components/Services'
import Reservation from '../components/Reservation'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Accueil() {
  return (
    <div className="accueil-mike-vtc">
      <Header />
      <Navbar />
      <Presentation />
      <Information />
      <Vehicule />
      <Services />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  )
}

export default Accueil
