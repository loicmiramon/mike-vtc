import React, { useState } from 'react'
import bddService from '../../bdd/bddService'
import ServiceCard from './card/ServiceCard'

const donneeService = bddService

function Services() {

  const [service] = useState(donneeService)



  return (
    <section id="services" className="section-services">
        <h1 className="titre-services">Mes services</h1>
        <div className="sous-container-services">
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
