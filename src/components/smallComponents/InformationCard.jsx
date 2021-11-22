import React from 'react'

function InformationCard(props) {
  return ( 
      props.state.map(
        card => 
        <div key={card.id} className="cardInformationMikeVtc">
          {/* <img className="iconeInformationMikeVtc" src={card.image} alt="" /> */}
          {card.image}
          <h2 className="titreCardInformationMikeVtc">{card.titre}</h2>
          <p className="textCardInformationMikeVtc">{card.text}</p>
        </div>
        )
    
    
  )
}

export default InformationCard
