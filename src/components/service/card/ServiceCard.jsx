import React, { useState } from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'

function ServiceCard(props) {

  const [showService, setShowService] = useState(false)

  const handleShowService = () => {
    if(showService === true) {
      setShowService(false)
    } else {
      setShowService(true)
    }

  }

  return (
      <article className="container-services" onClick={props.click}>
        <div className={` filter-services ${showService ? "filter-services-show" : "filter-services-hidden"}`}></div>
          <h2 className="sous-titre-services">{props.titreService}</h2>
          {showService ? <AiFillCloseCircle color="white" size="30px" onClick={() => handleShowService()} className="icone-close-services" /> : <AiFillPlusCircle onClick={() => handleShowService()} color="white" className="icone-open-services" size="30px" />}
          <div className={`container-content-services ${showService ? "show-services" : "hidden-services"}`}>
            <p className="paragraphe-services">{props.contentService}</p>
            <button className="btn-services">{props.boutonService}</button>
          </div>
        </article>
  )
}

export default ServiceCard