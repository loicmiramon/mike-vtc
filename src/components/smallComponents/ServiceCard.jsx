import React, { useState } from 'react'

function ServiceCard(props) {

  const [showService, setShowService] = useState(false)

  const handleShowService = () => {
    setShowService(!showService)
  }

  return (
      <article className="container-services" onClick={props.click}>
        <div className={` filter-services ${showService ? "filter-services-show" : null}`}></div>
          <h2 onClick={() => handleShowService()} className="sous-titre-services">{props.titreService}</h2>
          <div className={`container-content-services ${showService ? "show-services" : "hidden-services"}`}>
            <p className="paragraphe-services">{props.contentService}</p>
            <button className="btn-services">{props.boutonService}</button>
          </div>
        </article>
  )
}

export default ServiceCard
