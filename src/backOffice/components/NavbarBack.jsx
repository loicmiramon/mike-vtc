import React from 'react'
import { Link } from 'react-router-dom'

const NavbarBack = (props) => {
  return (
    <aside className="asideNavbarBackMikeVtc">
      <nav className="navBackMikeVtc">
        <ul className="listNavBackMikeVtc">
          <li className="itemListBackMikeVtc">Site
          <ul className="sousListBackMikeVtc">
            <Link to="/ChangeImage">
              <li className="sousItemBackMikeVtc">Image</li>
            </Link>
            <Link to="/ChangeCouleur">
              <li className="sousItemBackMikeVtc">Couleur</li>
            </Link>
            <Link to="/ChangeTexte">
              <li className="sousItemBackMikeVtc">Texte</li>
            </Link>
          </ul>
          </li>
          <li className="itemListBackMikeVtc">Entreprise
          <ul className="sousListBackMikeVtc">
            <li className="sousItemBackMikeVtc">Client</li>
            <li className="sousItemBackMikeVtc">Facture</li>
            <li className="sousItemBackMikeVtc">Information</li>
          </ul></li>
        </ul>
      </nav>
      <div>
        <button className="btnDeconnexionBackMikeVtc" onClick={props.btnSignOut}>Out</button>
      </div>
    </aside>
  )
}

export default NavbarBack
