import React, {useState} from 'react'
import InformationCard from './card/InformationCard'
import bddInformation from '../../bdd/bddInformation'

const bdd = bddInformation

function Information() {
  const [list] = useState(bdd)
  return (
    <section id="information" className="section-informations">
      <div className="container-engagement-informations">
        <h1 className="titre-engagement-informations">Nos engagements envers vous</h1>
        <div className="container-card-engagement-informations">
          <InformationCard 
            state= {list[0]}
            image= {list[0].image}
            titre= {list[0].titre}
            text={list[0].text}
            />
        </div>
      </div>
      <div className="container-securiter-informations">
        <h1 className="titre-securiter-informations">Votre securite, ma priorite</h1>
        <div className="container-card-securiter-informations">
        <InformationCard 
        state= {list[1]}
        image= {list[1].image}
        titre= {list[1].titre}
        text={list[1].text}
        />
        </div>
      </div>
    </section>
  )
}

export default Information
