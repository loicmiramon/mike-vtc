import React from 'react'

function InformationCard(props) {
  return ( 
      props.state.map(
        card => 
        <div key={card.id} className="card-informations">
          {card.image}
          <h2 className="titre-card-informations">{card.titre}</h2>
          <p className="paragraphe-card-informations">{card.text}</p>
        </div>
        )
    
    
  )
}

export default InformationCard
