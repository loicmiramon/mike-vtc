import React, { useState } from 'react'
import bddService from '../bdd/bddService'
import ServiceCard from './smallComponents/ServiceCard'

const donneeService = bddService

function Services() {

  const [service] = useState(donneeService)
  // const [serviceOne, setServiceOne] = useState(false)
  // const [serviceTwo, setServiceTwo] = useState(false)
  // const [serviceThree, setServiceThree] = useState(false)
  // const [serviceFour, setServiceFour] = useState(false)



  return (
    <section id="services" className="sectionServicesMikeVtc">
        <h1 className="titreServicesMikeVtc">Mes services</h1>
        <div className="blocServicesMikeVtc">
          {service.map(serv => 
            <ServiceCard
            key = {serv.id}
            titreService = {serv.titre}
            contentService = {serv.content}
            boutonService = {serv.bouton}
            />
          )
          }
        </div>
    </section>
  )
}

export default Services
