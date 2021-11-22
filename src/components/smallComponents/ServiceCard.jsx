import React, { useState } from 'react'

function ServiceCard(props) {

  const [showService, setShowService] = useState(false)

  const handleShowService = () => {
    setShowService(!showService)
  }

  return (
      <article className="servicesMikeVtc" onClick={props.click}>
        <div className={` filterCardService ${showService ? "filterCardServiceShow" : null}`}></div>
          <h2 onClick={() => handleShowService()} className="sousTitreServicesMikeVtc">{props.titreService}</h2>
          <div className={`blocContentServiceMikeVtc ${showService ? "showService" : "hiddenService"}`}>
            <p className="paragrapheServiceMikeVtc">{props.contentService}</p>
            <button className="btnServiceMikeVtc">{props.boutonService}</button>
          </div>
        </article>
  )
}

export default ServiceCard
