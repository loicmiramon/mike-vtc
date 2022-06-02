import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import FormChampReservation from './form/Field';
import FormSelectReservation from './form/FiledSelect';
import PopUp from './popup/PopUp';


function Reservation() {

  let dataFormReservation = {
    nom: "",
    telephone: "",
    email: "",
    date: "",
    horaire: "",
    services: "",
    localisation: "",
    destrination: ""
  }

  const [popUp, setPopUp] = useState(false)
  const [notifReservation, setNotifReservation] = useState(false)
  const [formData, setFormData] = useState(dataFormReservation)
  const {register, handleSubmit, reset} = useForm()

  const handleSubmitReservation = data => {
    const dataReservation = {
      ...data
    }
    setFormData(dataReservation)
    setPopUp(true)
    
    reset()
  }

  const openNotifReservation = () => {
    setNotifReservation(true)
    setTimeout(() => {
      setNotifReservation(false)
    }, 7500)
  }

  return (
    <section id="reservation" className="section-reservation"> 
      {popUp ? <PopUp 
        state={setPopUp} 
        title="Recapitulatif"
        data={formData}
        methodNotif={openNotifReservation}
      /> : null}
      <form onSubmit={handleSubmit(handleSubmitReservation)} className="form-reservation">
        <h2 className="titre-reservation">Reservez votre course des maintenant !</h2>
        <p className="paragraphe-reservation">Toute réservation doit être prise 24 heures à l'avance ! En cas d'absence veuillez le renseigner au chauffeur. Après validation de votre réservation, 20% du prix de la course vous sera demandé.</p>
        {
          notifReservation && <span className="notification-reservation">Votre reservation a bien ete prise en compte</span>
        }
        <div className="container-formulaire-reservation">
          <FormChampReservation 
          register={register}
          type="text"
          id="nom" 
          name="nom"
          placeholder="Nom">Votre nom</FormChampReservation>
          <FormChampReservation 
          register={register}
          type="text" 
          name="telephone"
          id="telephone" 
          placeholder="Téléphone">Votre numéro de téléphone</FormChampReservation>
          <FormChampReservation
          register={register}
          type="email" 
          name="email"
          id="email" 
          placeholder="Email">Votre email</FormChampReservation>
          <div className="sous-container-formulaire-reservation-2">
          <FormChampReservation
          register={register}
          type="date" 
          name="date"
          id="date" 
          >Date de départ</FormChampReservation>
          <FormChampReservation
          register={register}
          type="time" 
          name="horaire"
          id="horaire" 
          >Horaire de départ</FormChampReservation>
          </div>
        </div>
        <div className="container-formulaire-reservation">
          <div className="sous-container-formulaire-reservation">
            <FormSelectReservation 
            register={register}
            name="services"
            id="services">Type de service</FormSelectReservation>
            <FormChampReservation 
            register={register}
            type="text" 
            name="localisation"
            id="localisation" 
            placeholder="Localication">Votre localisation</FormChampReservation>
            <FormChampReservation
            register={register}
            type="text" 
            name="destination"
            id="destination" 
            placeholder="Destination">Votre destination</FormChampReservation>
          </div>
          <div className="container-map-reservation">
          <iframe className="map-reservation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674384.9618229616!2d1.9422613428837587!3d48.68031781435368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e1c403a68c17%3A0x10b82c3688b2570!2s%C3%8Ele-de-France!5e0!3m2!1sfr!2sfr!4v1631444936953!5m2!1sfr!2sfr" title="map réservation"></iframe>
          </div>
        </div>
        <button className="btn-reservation">Réserver</button>
      </form>
    </section>
  )
}

export default Reservation
