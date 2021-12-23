import React from 'react'

function Header() {
  return (
    <header className="container-header">
      <div className="container-informations-header">
        <h1 className="titre-header">Mike vtc</h1>
        <h2 className="slogan-header">Faîtes de vos déplacements un moment privilégié</h2>
        <p className="paragraphe-header">Réservez votre course dès maintenant !</p>
      </div>
      <button className="btn-header">réserver</button>
    </header>
  )
}

export default Header
