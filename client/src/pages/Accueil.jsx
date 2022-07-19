import React from 'react'
import Header from '../components/header/Header'
import Presentation from '../components/presentation/Presentation'
import Information from '../components/information/Information'
import Vehicule from '../components/vehicule/Vehicule'
import Services from '../components/service/Services'
import Reservation from '../components/reservation/Reservation'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

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
