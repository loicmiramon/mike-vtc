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
    <section id="contact" className="sectionContactMikeVtc">
      <div className="blocInfosContactMikeVtc">
        <div className="sousBlocInfosContactMikeVtc">
          <img className="imgContactMikeVtc" src={logoContact} alt="" />
          <h2 className="titreContactMikeVtc">Une question ?</h2>
          <h3 className="sousTitreContactMikeVtc">Contactez votre chauffeur</h3>
          <p className="textContactMikeVtc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere alias corporis voluptates repellendus ab aliquid quam sint blanditiis ipsa animi.
          </p>
        </div>
        <div className="blocCardContactMikeVtc">
          {listContact.map(infos => 
          <article key={infos.id} className='cardContactMikeVtc'>
            {/* <img src={infos.image} alt="" className="imgCardContactMikeVtc" /> */}
            {infos.image}
            <h2 className="titreCardContactMikeVtc">{infos.titre}</h2>
          </article>
          )}
        </div>
      </div>
      <form action="" className="formContactMikeVtc">
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
        <button className="btnContactMikeVtc">envoyer</button>
      </form>
    </section>
  )
}

export default Contact
