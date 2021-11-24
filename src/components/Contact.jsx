import React, {useState} from 'react'
import logoContact from '../assets/images/logo/logo-bfb.jpg'
import bddContact from '../bdd/bddContact'
import FormAreaContact from './smallComponents/FormAreaContact';
import FormChampContact from './smallComponents/FormChampContact';

const donneeContact = bddContact;

function Contact() {

  const dataContact = {
    nom: "",
    telephone: "",
    email: "",
    message: ""
  }

  const [champContact, setChampContact] = useState(dataContact)
  const {nom, telephone, email, message} = champContact

  const handleChangeContact = e => {
    setChampContact({...champContact, [e.target.id]: e.target.value})
  } 

  const [listContact] = useState(donneeContact)
  return (
    <section id="contact" className="section-contact">
      <div className="container-information-contact">
        <div className="sous-container-contact">
          <img className="logo-contact" src={logoContact} alt="" />
          <h2 className="titre-contact">Une question ?</h2>
          <h3 className="sous-titre-contact">Contactez votre chauffeur</h3>
          <p className="paragraphe-contact">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere alias corporis voluptates repellendus ab aliquid quam sint blanditiis ipsa animi.
          </p>
        </div>
        <div className="container-card-contact">
          {listContact.map(infos => 
          <article key={infos.id} className='card-contact'>
            {infos.image}
            <h2 className="titre-card-contact">{infos.titre}</h2>
          </article>
          )}
        </div>
      </div>
      <form action="" className="form-contact">
        <FormChampContact 
        method={handleChangeContact}
        value={nom}
        type="text"
        id="nom"
        name="nom"
        placeholder="Nom">Votre nom</FormChampContact>
        <FormChampContact 
        method={handleChangeContact}
        value={telephone}
        type="text"
        name="telephone"
        id="telephone"
        placeholder="Téléphone">Votre téléphone</FormChampContact>
        <FormChampContact 
        method={handleChangeContact}
        value={email}
        type="email"
        name="email"
        id="email"
        placeholder="Email">Votre email</FormChampContact>
       <FormAreaContact
       method={handleChangeContact}
       id="message"
       name="message"
       placeholder="Message"
       value={message}>Votre message</FormAreaContact>
        <button className="btn-contact">envoyer</button>
      </form>
    </section>
  )
}

export default Contact
