import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import logoContact from '../../assets/images/logo/logo-bfb.jpg'
import FormAreaContact from './form/FieldAera';
import FormChampContact from './form/Field';
import emailjs from 'emailjs-com';
import axios from 'axios'


function Contact() {

  const [notifContact, setNotifContact] = useState(false)
  const {register, handleSubmit, reset} = useForm()

  const handleSubmitContact = data => {
    const contactData = {
      ...data
    }
    sendEmailContact(contactData)
    openNotifContact()
    reset()
  }

  const openNotifContact = () => {
    setNotifContact(true)
    setTimeout(() => {
      setNotifContact(false)
    }, 7500)
  }

  const sendEmailContact = async (data) => {
    const dataEmailContact = {
      name: data.nom,
      telephone: data.telephone,
      email: data.email,
      message: data.message 
    }


    emailjs.send('service_pyym7qb', 'template_880g02v', dataEmailContact, 'yiFq_oFCF1P0mTCtB')
    .then(res => {
      console.log(res)
    })
    
    
    await axios.post('https://mikevtc.netlify.app/', {
      ...dataEmailContact
    })
    .then(response => {
       openNotifContact()
       /*emailjs.send('service_pyym7qb', 'template_880g02v', dataEmailContact, 'yiFq_oFCF1P0mTCtB')
       .then(res => {
         console.log(res)
       })*/
    })
    .catch(error => {
      console.log(error)
    }) 
  }

  return (
    <section id="contact" className="section-contact">
      <div className="container-information-contact">
        <div className="sous-container-contact">
          <img className="logo-contact" src={logoContact} alt="Logo Contact" />
          <h2 className="titre-contact">Une question ?</h2>
          <h3 className="sous-titre-contact">Contactez votre chauffeur</h3>
          <p className="paragraphe-contact">
            Pour toute demande ou renseignement, n'hésitez pas à nous contacter nous vous répondrons dans les plus bref délais.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleSubmitContact)} action="" method='POST' className="form-contact">
        {
          notifContact && <span className="notification-contact">Votre message a bien ete envoye</span>
        }
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
