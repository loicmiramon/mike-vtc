import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GiCarDoor } from 'react-icons/gi'
import { FaFan } from 'react-icons/fa'
import { GiGears } from 'react-icons/gi'
import { GiCarSeat } from 'react-icons/gi'


function Vehicule() {
  return (
    <section className="sectionPresentationVehiculeMikeVtc">
      <div className="filterVehicule"></div>
      <div className="blocModeleVehiculeMikeVtc">
        <h2 className="titreVehiculeMikeVtc">Le vehicule</h2>
        <h3 className="sousTitreVehiculeMikeVtc">Peugeot 308 SW</h3>
      </div>
      <div className="blocDetailVehiculeMikeVtc">
        <ul className="listDetailVehiculeMikeVtc">
          <li className="itemListDetailVehiculeMikeVtc">
           <h3 className="titreListItemDetailVehiculeMikeVtc"><FaRegCalendarAlt size="50%" color="#2D3E80"/></h3>
           <p className="paragrapheListItemDetailVehiculeMikeVtc">2019</p>
          </li>
          <li className="itemListDetailVehiculeMikeVtc">
           <h3 className="titreListItemDetailVehiculeMikeVtc"><GiCarDoor size="50%" color="#2D3E80"/></h3>
           <p className="paragrapheListItemDetailVehiculeMikeVtc">5 portes</p>
          </li>
          <li className="itemListDetailVehiculeMikeVtc">
           <h3 className="titreListItemDetailVehiculeMikeVtc"><FaFan size="50%" color="#2D3E80"/></h3>
           <p className="paragrapheListItemDetailVehiculeMikeVtc">Climatisé</p>
          </li>
          <li className="itemListDetailVehiculeMikeVtc">
           <h3 className="titreListItemDetailVehiculeMikeVtc"><GiGears size="50%" color="#2D3E80"/></h3>
           <p className="paragrapheListItemDetailVehiculeMikeVtc">Automatique</p>
          </li>
          <li className="itemListDetailVehiculeMikeVtc">
           <h3 className="titreListItemDetailVehiculeMikeVtc"><GiCarSeat size="50%" color="#2D3E80"/></h3>
           <p className="paragrapheListItemDetailVehiculeMikeVtc">5 places</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Vehicule
