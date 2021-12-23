import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import logoContact from '../../assets/images/logo/logo-bfb.jpg'
import bddContact from '../../bdd/bddContact'
import FormAreaContact from './form/FieldAera';
import FormChampContact from './form/Field';

const donneeContact = bddContact;

function Contact() {

  const [listContact] = useState(donneeContact)

  const {register, handleSubmit, reset} = useForm()

  const handleSubmitContact = data => {
    const contactData = {
      ...data
    }
    console.log(contactData)
    reset()
  }

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
      <form onSubmit={handleSubmit(handleSubmitContact)} action="" className="form-contact">
        <FormChampContact 
        register={register}
        type="text"
        id="nom"
        name="nom"
        placeholder="Nom">Votre nom</FormChampContact>
        <FormChampContact 
        register={register}
        type="text"
        name="telephone"
        id="telephone"
        placeholder="Téléphone">Votre téléphone</FormChampContact>
        <FormChampContact 
        register={register}
        type="email"
        name="email"
        id="email"
        placeholder="Email">Votre email</FormChampContact>
       <FormAreaContact
       register={register}
       id="message"
       name="message"
       placeholder="Message"
       >Votre message</FormAreaContact>
        <button className="btn-contact">envoyer</button>
      </form>
    </section>
  )
}

export default Contact
