import React, { useContext, useState } from 'react'
import { FirebaseContext } from '../firebase'
import FormChampReservation from './smallComponents/FormChampReservarion';
import FormSelectReservation from './smallComponents/FormSelectReservation';


function Reservation() {
  const firebaseReservation = useContext(FirebaseContext)

  const dataReservation = {
    nom : '',
    telephone: '',
    email: '',
    services: '',
    localisation: '',
    destination: ''
  }

  const [reservationData, setReservationData] = useState(dataReservation)
  const {nom, telephone, email, services, localisation, destination} = reservationData

  const handleChangeReservation = e => {
    setReservationData({...reservationData, [e.target.id]: e.target.value})
  } 

  const handleSubmitReservation = e => {
    e.preventDefault()
   
  }

  return (
    <section id="reservation" className="section-reservation"> 
      <form onSubmit={handleSubmitReservation} className="form-reservation">
        <h2 className="titre-reservation">Reservez votre course des maintenant !</h2>
        <p className="paragraphe-reservation">Toute réservation doit être prise 24 Heures à l'avance ! En cas d'absence veuillez nous le renseigner. 20% doit être payée au lancement de la course.</p>
        <div className="container-formulaire-reservation">
          <FormChampReservation 
          method={handleChangeReservation} 
          value={nom} 
          type="text"
          id="nom" 
          name="nom"
          placeholder="Nom">Votre nom</FormChampReservation>
          <FormChampReservation 
          method={handleChangeReservation} 
          value={telephone} 
          type="text" 
          name="telephone"
          id="telephone" 
          placeholder="Téléphone">Votre numéro de téléphone</FormChampReservation>
          <FormChampReservation 
          method={handleChangeReservation} 
          value={email} 
          type="email" 
          name="email"
          id="email" 
          placeholder="Email">Votre email</FormChampReservation>
        </div>
        <div className="container-formulaire-reservation">
          <div className="sous-container-formulaire-reservation">
            <FormSelectReservation 
            method={handleChangeReservation} 
            value={services} 
            name="services"
            id="services">Type de service</FormSelectReservation>
            <FormChampReservation 
            method={handleChangeReservation} 
            value={localisation} 
            type="text" 
            name="localisation"
            id="localisation" 
            placeholder="Localication">Votre localisation</FormChampReservation>
            <FormChampReservation 
            method={handleChangeReservation} 
            value={destination} 
            type="text" 
            name="destination"
            id="destination" 
            placeholder="Destination">Votre destination</FormChampReservation>
          </div>
          <div className="container-map-reservation">
          <iframe className="map-reservation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674384.9618229616!2d1.9422613428837587!3d48.68031781435368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e1c403a68c17%3A0x10b82c3688b2570!2s%C3%8Ele-de-France!5e0!3m2!1sfr!2sfr!4v1631444936953!5m2!1sfr!2sfr" title="map réservation"></iframe>
          </div>
        </div>
        <button className="btn-reservation">Reserver</button>
      </form>
    </section>
  )
}

export default Reservation
