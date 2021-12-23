import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GiCarDoor } from 'react-icons/gi'
import { FaFan } from 'react-icons/fa'
import { GiGears } from 'react-icons/gi'
import { GiCarSeat } from 'react-icons/gi'


function Vehicule() {
  return (
    <section className="section-vehicule">
      <div className="filter-vehicule"></div>
      <div className="container-modele-vehicule">
        <h2 className="titre-vehicule">Le vehicule</h2>
        <h3 className="sous-titre-vehicule">Peugeot 308 SW</h3>
      </div>
      <div className="container-detail-vehicule">
        <ul className="list-detail-vehicule">
          <li className="item-detail-vehicule">
           <h3 className="titre-item-list-detail-vehicule"><FaRegCalendarAlt size="50%" color="#2D3E80"/></h3>
           <p className="paragraphe-item-list-detail-vehicule">2019</p>
          </li>
          <li className="item-detail-vehicule">
           <h3 className="titre-item-list-detail-vehicule"><GiCarDoor size="50%" color="#2D3E80"/></h3>
           <p className="paragraphe-item-list-detail-vehicule">5 portes</p>
          </li>
          <li className="item-detail-vehicule">
           <h3 className="titre-item-list-detail-vehicule"><FaFan size="50%" color="#2D3E80"/></h3>
           <p className="paragraphe-item-list-detail-vehicule">Climatisé</p>
          </li>
          <li className="item-detail-vehicule">
           <h3 className="titre-item-list-detail-vehicule"><GiGears size="50%" color="#2D3E80"/></h3>
           <p className="paragraphe-item-list-detail-vehicule">Automatique</p>
          </li>
          <li className="item-detail-vehicule">
           <h3 className="titre-item-list-detail-vehicule"><GiCarSeat size="50%" color="#2D3E80"/></h3>
           <p className="paragraphe-item-list-detail-vehicule">5 places</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Vehicule
