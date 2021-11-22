import React, {useState} from 'react'
import InformationCard from './smallComponents/InformationCard'
import bddInformation from '../bdd/bddInformation'

const bdd = bddInformation

function Information() {
  const [list] = useState(bdd)
  return (
    <section id="information" className="sectionInformationMikeVtc">
      <div className="blocEngagementMikeVtc">
        <h1 className="titreInformationEngagementMikeVtc">Nos engagements envers vous</h1>
        <div className="blocCardEngagementInfosMikeVtc">
          <InformationCard 
            state= {list[0]}
            image= {list[0].image}
            titre= {list[0].titre}
            text={list[0].text}
            />
        </div>
      </div>
      <div className="blocSecuriterMikeVtc">
        <h1 className="titreInformationSecuriterMikeVtc">Votre securite, ma priorite</h1>
        <div className="blocCardSecuriterInfosMikeVtc">
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
