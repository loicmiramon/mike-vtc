import React, { useState } from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import { HiOutlineInformationCircle } from 'react-icons/hi'

function ServiceCard(props) {

  const [showService, setShowService] = useState(false)

  const handleShowService = () => {
    if(showService === true) {
      setShowService(false)
    } else {
      setShowService(true)
    }
  }

  const handleReservation = (service) => {

  }

  return (
    <article className="container-services" onClick={props.click}>
      <div className={` filter-services ${showService ? "filter-services-show" : "filter-services-hidden"}`}></div>
        <h2 className="sous-titre-services">{props.titreService}</h2>
        {showService ? <AiFillCloseCircle color="white" size="30px" onClick={() => handleShowService()} className="icone-close-services" /> : <HiOutlineInformationCircle onClick={() => handleShowService()} color="white" className="icone-open-services" size="30px" title="Voir plus d'informations"/>}
        <div className={`container-content-services ${showService ? "show-services" : "hidden-services"}`}>
          <p className="paragraphe-services">{props.contentService}</p>
          <button onClick={() => handleReservation()} className="btn-services"><a className='ancre-reservation' href='#reservation'>{props.boutonService}</a></button>
        </div>
    </article>
  )
}

export default ServiceCard
