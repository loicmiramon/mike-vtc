import React from 'react'
import { useState } from 'react'
import bddContact from '../../bdd/bddContact'
import logo from '../../assets/images/logo/logo-blanc-sf.png'

const donneeCardContact = bddContact

function Footer() {

  const [cardContact] = useState(donneeCardContact)

  return (
    <footer className="footerMikeVtc">
      <article className='container-footer'>
      <img className='logo-footer' src={logo} alt="Logo" />
      <div className="container-card-footer">
        {cardContact.map(infos => 
        <article key={infos.id} className='card-footer'>
          {infos.image}
          <h2 className="titre-card-footer">{infos.titre}</h2>
        </article>
        )}
      </div>
      </article>
      <p className="text-footer">Copyright ©2022 MikeVTC. Tous droits réservés. Les mentions légales de MikeVTC.<a className='lien-footer' href="https://google.com" target="_blank" rel="noreferrer"> Mentions Légales</a></p>
    </footer>
  )
}

export default Footer
